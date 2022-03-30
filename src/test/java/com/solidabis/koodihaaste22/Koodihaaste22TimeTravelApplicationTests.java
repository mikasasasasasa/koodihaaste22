package com.solidabis.koodihaaste22;

import com.solidabis.koodihaaste22.utils.TimeSource;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import javax.servlet.http.Cookie;

import java.time.LocalDate;

import static com.solidabis.koodihaaste22.TestConstants.GET_LOUNASPAIKAT_ENDPOINT;
import static com.solidabis.koodihaaste22.TestConstants.VOTERID_COOKIE_NAME;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class Koodihaaste22TimeTravelApplicationTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TimeSource timeSource;

    @Test
    @DirtiesContext
    public void shouldAllowVoteForARestaurantOnSeparateDays() throws Exception {
        var cookieVoterId = new Cookie(VOTERID_COOKIE_NAME, "Höttöä");

        given(timeSource.today()).willReturn(LocalDate.of(2022,3,30));

        // given a restaurant has already been voted at previous day
        mockMvc.perform(post("/aanestys/9rewu9rewrew9u").cookie(cookieVoterId))
                .andExpect(status().isOk());

        mockMvc.perform(get(GET_LOUNASPAIKAT_ENDPOINT))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.restaurants[0].votes").value(11));

        // when vote another restaurant on another day
        given(timeSource.today()).willReturn(LocalDate.of(2022,4,1));

        mockMvc.perform(post("/aanestys/9rewu9rewrew9u").cookie(cookieVoterId))
                .andExpect(status().isOk());

        // expect
        mockMvc.perform(get(GET_LOUNASPAIKAT_ENDPOINT))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.restaurants[0].votes").value(11));
    }
}
