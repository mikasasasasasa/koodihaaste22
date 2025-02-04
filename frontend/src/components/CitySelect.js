import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Typography from '@mui/material/Typography'
import { useTheme, lighten, darken } from '@mui/material/styles/'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import lunch from '../assets/lunch.svg'

// list from: https://github.com/kkarikos/suomenkunnat/blob/master/data.json
const options = [
  {
    name: 'Akaa',
    latitude: 61.166667,
    longitude: 23.868056,
  },
  {
    name: 'Alajärvi',
    latitude: 63,
    longitude: 23.816667,
  },
  {
    name: 'Alavieska',
    latitude: 64.165278,
    longitude: 24.306944,
  },
  {
    name: 'Alavus',
    latitude: 62.586111,
    longitude: 23.619444,
  },
  {
    name: 'Asikkala',
    latitude: 61.172222,
    longitude: 25.547222,
  },
  {
    name: 'Askola',
    latitude: 60.527778,
    longitude: 25.6,
  },
  {
    name: 'Aura',
    latitude: 60.647222,
    longitude: 22.590278,
  },
  {
    name: 'Brändö',
    latitude: 60.411111,
    longitude: 21.045833,
  },
  {
    name: 'Eckerö',
    latitude: 60.223611,
    longitude: 19.556944,
  },
  {
    name: 'Enonkoski',
    latitude: 62.088889,
    longitude: 28.933333,
  },
  {
    name: 'Enontekiö',
    latitude: 68.384722,
    longitude: 23.638889,
  },
  {
    name: 'Espoo',
    latitude: 60.205556,
    longitude: 24.655556,
  },
  {
    name: 'Eura',
    latitude: 61.130556,
    longitude: 22.140278,
  },
  {
    name: 'Eurajoki',
    latitude: 61.201389,
    longitude: 21.730556,
  },
  {
    name: 'Evijärvi',
    latitude: 63.366667,
    longitude: 23.475,
  },
  {
    name: 'Finström',
    latitude: 60.229167,
    longitude: 19.988889,
  },
  {
    name: 'Forssa',
    latitude: 60.813889,
    longitude: 23.622222,
  },
  {
    name: 'Föglö',
    latitude: 60.030556,
    longitude: 20.3875,
  },
  {
    name: 'Geta',
    latitude: 60.375,
    longitude: 19.845833,
  },
  {
    name: 'Haapajärvi',
    latitude: 63.748611,
    longitude: 25.318056,
  },
  {
    name: 'Haapavesi',
    latitude: 64.1375,
    longitude: 25.366667,
  },
  {
    name: 'Hailuoto',
    latitude: 65.016667,
    longitude: 24.716667,
  },
  {
    name: 'Halsua',
    latitude: 63.463889,
    longitude: 24.166667,
  },
  {
    name: 'Hamina',
    latitude: 60.569722,
    longitude: 27.198056,
  },
  {
    name: 'Hammarland',
    latitude: 60.216667,
    longitude: 19.740278,
  },
  {
    name: 'Hankasalmi',
    latitude: 62.388889,
    longitude: 26.436111,
  },
  {
    name: 'Hanko',
    latitude: 59.823611,
    longitude: 22.968056,
  },
  {
    name: 'Harjavalta',
    latitude: 61.313889,
    longitude: 22.141667,
  },
  {
    name: 'Hartola',
    latitude: 61.579167,
    longitude: 26.020833,
  },
  {
    name: 'Hattula',
    latitude: 61.055556,
    longitude: 24.370833,
  },
  {
    name: 'Hausjärvi',
    latitude: 60.7875,
    longitude: 25.027778,
  },
  {
    name: 'Heinola',
    latitude: 61.202778,
    longitude: 26.031944,
  },
  {
    name: 'Heinävesi',
    latitude: 62.426389,
    longitude: 28.630556,
  },
  {
    name: 'Helsinki',
    latitude: 60.170833,
    longitude: 24.9375,
  },
  {
    name: 'Hirvensalmi',
    latitude: 61.638889,
    longitude: 26.780556,
  },
  {
    name: 'Hollola',
    latitude: 60.9875,
    longitude: 25.516667,
  },
  {
    name: 'Honkajoki',
    latitude: 61.993056,
    longitude: 22.263889,
  },
  {
    name: 'Huittinen',
    latitude: 61.176389,
    longitude: 22.698611,
  },
  {
    name: 'Humppila',
    latitude: 60.923611,
    longitude: 23.368056,
  },
  {
    name: 'Hyrynsalmi',
    latitude: 64.676389,
    longitude: 28.494444,
  },
  {
    name: 'Hyvinkää',
    latitude: 60.630556,
    longitude: 24.859722,
  },
  {
    name: 'Hämeenkoski',
    latitude: 61.022222,
    longitude: 25.154167,
  },
  {
    name: 'Hämeenkyrö',
    latitude: 61.638889,
    longitude: 23.197222,
  },
  {
    name: 'Hämeenlinna',
    latitude: 60.995833,
    longitude: 24.465278,
  },
  {
    name: 'Ii',
    latitude: 65.316667,
    longitude: 25.372222,
  },
  {
    name: 'Iisalmi',
    latitude: 63.561111,
    longitude: 27.188889,
  },
  {
    name: 'Iitti',
    latitude: 60.888889,
    longitude: 26.338889,
  },
  {
    name: 'Ikaalinen',
    latitude: 61.769444,
    longitude: 23.068056,
  },
  {
    name: 'Ilmajoki',
    latitude: 62.731944,
    longitude: 22.580556,
  },
  {
    name: 'Ilomantsi',
    latitude: 62.672222,
    longitude: 30.930556,
  },
  {
    name: 'Imatra',
    latitude: 61.193056,
    longitude: 28.776389,
  },
  {
    name: 'Inari',
    latitude: 68.659722,
    longitude: 27.538889,
  },
  {
    name: 'Inkoo',
    latitude: 60.045833,
    longitude: 24.005556,
  },
  {
    name: 'Isojoki',
    latitude: 62.113889,
    longitude: 21.958333,
  },
  {
    name: 'Isokyrö',
    latitude: 63,
    longitude: 22.325,
  },
  {
    name: 'Jalasjärvi',
    latitude: 62.488889,
    longitude: 22.7625,
  },
  {
    name: 'Janakkala',
    latitude: 60.922222,
    longitude: 24.647222,
  },
  {
    name: 'Joensuu',
    latitude: 62.6,
    longitude: 29.763889,
  },
  {
    name: 'Jokioinen',
    latitude: 60.804167,
    longitude: 23.486111,
  },
  {
    name: 'Jomala',
    latitude: 60.152778,
    longitude: 19.948611,
  },
  {
    name: 'Joroinen',
    latitude: 62.179167,
    longitude: 27.827778,
  },
  {
    name: 'Joutsa',
    latitude: 61.741667,
    longitude: 26.115278,
  },
  {
    name: 'Juankoski',
    latitude: 63.063889,
    longitude: 28.327778,
  },
  {
    name: 'Juuka',
    latitude: 63.241667,
    longitude: 29.252778,
  },
  {
    name: 'Juupajoki',
    latitude: 61.797222,
    longitude: 24.369444,
  },
  {
    name: 'Juva',
    latitude: 61.897222,
    longitude: 27.856944,
  },
  {
    name: 'Jyväskylä',
    latitude: 62.240278,
    longitude: 25.744444,
  },
  {
    name: 'Jämijärvi',
    latitude: 61.819444,
    longitude: 22.691667,
  },
  {
    name: 'Jämsä',
    latitude: 61.863889,
    longitude: 25.190278,
  },
  {
    name: 'Järvenpää',
    latitude: 60.472222,
    longitude: 25.088889,
  },
  {
    name: 'Kaarina',
    latitude: 60.406944,
    longitude: 22.372222,
  },
  {
    name: 'Kaavi',
    latitude: 62.975,
    longitude: 28.481944,
  },
  {
    name: 'Kajaani',
    latitude: 64.225,
    longitude: 27.733333,
  },
  {
    name: 'Kalajoki',
    latitude: 64.259722,
    longitude: 23.948611,
  },
  {
    name: 'Kangasala',
    latitude: 61.463889,
    longitude: 24.072222,
  },
  {
    name: 'Kangasniemi',
    latitude: 61.990278,
    longitude: 26.643056,
  },
  {
    name: 'Kankaanpää',
    latitude: 61.804167,
    longitude: 22.394444,
  },
  {
    name: 'Kannonkoski',
    latitude: 62.976389,
    longitude: 25.2625,
  },
  {
    name: 'Kannus',
    latitude: 63.9,
    longitude: 23.916667,
  },
  {
    name: 'Karijoki',
    latitude: 62.306944,
    longitude: 21.706944,
  },
  {
    name: 'Karkkila',
    latitude: 60.534722,
    longitude: 24.209722,
  },
  {
    name: 'Karstula',
    latitude: 62.877778,
    longitude: 24.802778,
  },
  {
    name: 'Karvia',
    latitude: 62.1375,
    longitude: 22.561111,
  },
  {
    name: 'Kaskinen',
    latitude: 62.384722,
    longitude: 21.222222,
  },
  {
    name: 'Kauhajoki',
    latitude: 62.423611,
    longitude: 22.176389,
  },
  {
    name: 'Kauhava',
    latitude: 63.101389,
    longitude: 23.063889,
  },
  {
    name: 'Kauniainen',
    latitude: 60.209722,
    longitude: 24.729167,
  },
  {
    name: 'Kaustinen',
    latitude: 63.548611,
    longitude: 23.690278,
  },
  {
    name: 'Keitele',
    latitude: 63.179167,
    longitude: 26.35,
  },
  {
    name: 'Kemi',
    latitude: 65.736111,
    longitude: 24.563889,
  },
  {
    name: 'Kemijärvi',
    latitude: 66.713889,
    longitude: 27.433333,
  },
  {
    name: 'Keminmaa',
    latitude: 65.801389,
    longitude: 24.544444,
  },
  {
    name: 'Kemiönsaari',
    latitude: 60.163889,
    longitude: 22.727778,
  },
  {
    name: 'Kempele',
    latitude: 64.9125,
    longitude: 25.508333,
  },
  {
    name: 'Kerava',
    latitude: 60.402778,
    longitude: 25.1,
  },
  {
    name: 'Keuruu',
    latitude: 62.259722,
    longitude: 24.706944,
  },
  {
    name: 'Kihniö',
    latitude: 62.208333,
    longitude: 23.179167,
  },
  {
    name: 'Kinnula',
    latitude: 63.366667,
    longitude: 24.966667,
  },
  {
    name: 'Kirkkonummi',
    latitude: 60.123611,
    longitude: 24.438889,
  },
  {
    name: 'Kitee',
    latitude: 62.098611,
    longitude: 30.1375,
  },
  {
    name: 'Kittilä',
    latitude: 67.656944,
    longitude: 24.908333,
  },
  {
    name: 'Kiuruvesi',
    latitude: 63.652778,
    longitude: 26.619444,
  },
  {
    name: 'Kivijärvi',
    latitude: 63.119444,
    longitude: 25.075,
  },
  {
    name: 'Kokemäki',
    latitude: 61.255556,
    longitude: 22.348611,
  },
  {
    name: 'Kokkola',
    latitude: 63.838889,
    longitude: 23.131944,
  },
  {
    name: 'Kolari',
    latitude: 67.330556,
    longitude: 23.777778,
  },
  {
    name: 'Konnevesi',
    latitude: 62.627778,
    longitude: 26.2875,
  },
  {
    name: 'Kontiolahti',
    latitude: 62.766667,
    longitude: 29.85,
  },
  {
    name: 'Korsnäs',
    latitude: 62.786111,
    longitude: 21.184722,
  },
  {
    name: 'Koski Tl',
    latitude: 60.654167,
    longitude: 23.140278,
  },
  {
    name: 'Kotka',
    latitude: 60.473056,
    longitude: 26.945833,
  },
  {
    name: 'Kouvola',
    latitude: 60.868056,
    longitude: 26.704167,
  },
  {
    name: 'Kristiinankaupunki',
    latitude: 62.273611,
    longitude: 21.377778,
  },
  {
    name: 'Kruunupyy',
    latitude: 63.727778,
    longitude: 23.033333,
  },
  {
    name: 'Kuhmo',
    latitude: 64.127778,
    longitude: 29.518056,
  },
  {
    name: 'Kuhmoinen',
    latitude: 61.563889,
    longitude: 25.181944,
  },
  {
    name: 'Kumlinge',
    latitude: 60.259722,
    longitude: 20.779167,
  },
  {
    name: 'Kuopio',
    latitude: 62.8925,
    longitude: 27.678333,
  },
  {
    name: 'Kuortane',
    latitude: 62.805556,
    longitude: 23.506944,
  },
  {
    name: 'Kurikka',
    latitude: 62.616667,
    longitude: 22.4,
  },
  {
    name: 'Kustavi',
    latitude: 60.545833,
    longitude: 21.358333,
  },
  {
    name: 'Kuusamo',
    latitude: 65.966667,
    longitude: 29.183333,
  },
  {
    name: 'Kyyjärvi',
    latitude: 63.043056,
    longitude: 24.563889,
  },
  {
    name: 'Kärkölä',
    latitude: 60.868056,
    longitude: 25.277778,
  },
  {
    name: 'Kärsämäki',
    latitude: 63.979167,
    longitude: 25.758333,
  },
  {
    name: 'Kökar',
    latitude: 59.920833,
    longitude: 20.909722,
  },
  {
    name: 'Köyliö',
    latitude: 61.118056,
    longitude: 22.308333,
  },
  {
    name: 'Lahti',
    latitude: 60.983333,
    longitude: 25.655556,
  },
  {
    name: 'Laihia',
    latitude: 62.976389,
    longitude: 22.011111,
  },
  {
    name: 'Laitila',
    latitude: 60.879167,
    longitude: 21.693056,
  },
  {
    name: 'Lapinjärvi',
    latitude: 60.623611,
    longitude: 26.197222,
  },
  {
    name: 'Lapinlahti',
    latitude: 63.366667,
    longitude: 27.391944,
  },
  {
    name: 'Lappajärvi',
    latitude: 63.218056,
    longitude: 23.629167,
  },
  {
    name: 'Lappeenranta',
    latitude: 61.066667,
    longitude: 28.183333,
  },
  {
    name: 'Lapua',
    latitude: 62.970833,
    longitude: 23.006944,
  },
  {
    name: 'Laukaa',
    latitude: 62.413889,
    longitude: 25.954167,
  },
  {
    name: 'Lavia',
    latitude: 61.595833,
    longitude: 22.586111,
  },
  {
    name: 'Lemi',
    latitude: 61.061111,
    longitude: 27.804167,
  },
  {
    name: 'Lemland',
    latitude: 60.069444,
    longitude: 20.086111,
  },
  {
    name: 'Lempäälä',
    latitude: 61.313889,
    longitude: 23.752778,
  },
  {
    name: 'Leppävirta',
    latitude: 62.491667,
    longitude: 27.7875,
  },
  {
    name: 'Lestijärvi',
    latitude: 63.530556,
    longitude: 24.666667,
  },
  {
    name: 'Lieksa',
    latitude: 63.318056,
    longitude: 30.025,
  },
  {
    name: 'Lieto',
    latitude: 60.504167,
    longitude: 22.458333,
  },
  {
    name: 'Liminka',
    latitude: 64.809722,
    longitude: 25.415278,
  },
  {
    name: 'Liperi',
    latitude: 62.531944,
    longitude: 29.384722,
  },
  {
    name: 'Lohja',
    latitude: 60.25,
    longitude: 24.066667,
  },
  {
    name: 'Loimaa',
    latitude: 60.851389,
    longitude: 23.058333,
  },
  {
    name: 'Loppi',
    latitude: 60.718056,
    longitude: 24.441667,
  },
  {
    name: 'Loviisa',
    latitude: 60.456944,
    longitude: 26.225,
  },
  {
    name: 'Luhanka',
    latitude: 61.797222,
    longitude: 25.702778,
  },
  {
    name: 'Lumijoki',
    latitude: 64.8375,
    longitude: 25.1875,
  },
  {
    name: 'Lumparland',
    latitude: 60.116667,
    longitude: 20.258333,
  },
  {
    name: 'Luoto',
    latitude: 63.752778,
    longitude: 22.747222,
  },
  {
    name: 'Luumäki',
    latitude: 60.922222,
    longitude: 27.5625,
  },
  {
    name: 'Luvia',
    latitude: 61.361111,
    longitude: 21.625,
  },
  {
    name: 'Maalahti',
    latitude: 62.944444,
    longitude: 21.547222,
  },
  {
    name: 'Maaninka',
    latitude: 63.155556,
    longitude: 27.3,
  },
  {
    name: 'Maarianhamina',
    latitude: 60.098611,
    longitude: 19.944444,
  },
  {
    name: 'Marttila',
    latitude: 60.584722,
    longitude: 22.9,
  },
  {
    name: 'Masku',
    latitude: 60.570833,
    longitude: 22.1,
  },
  {
    name: 'Merijärvi',
    latitude: 64.297222,
    longitude: 24.447222,
  },
  {
    name: 'Merikarvia',
    latitude: 61.861111,
    longitude: 21.508333,
  },
  {
    name: 'Miehikkälä',
    latitude: 60.670833,
    longitude: 27.7,
  },
  {
    name: 'Mikkeli',
    latitude: 61.6875,
    longitude: 27.273611,
  },
  {
    name: 'Muhos',
    latitude: 64.806944,
    longitude: 25.994444,
  },
  {
    name: 'Multia',
    latitude: 62.408333,
    longitude: 24.794444,
  },
  {
    name: 'Muonio',
    latitude: 67.956944,
    longitude: 23.679167,
  },
  {
    name: 'Mustasaari',
    latitude: 63.1125,
    longitude: 21.677778,
  },
  {
    name: 'Muurame',
    latitude: 62.129167,
    longitude: 25.672222,
  },
  {
    name: 'Mynämäki',
    latitude: 60.679167,
    longitude: 21.988889,
  },
  {
    name: 'Myrskylä',
    latitude: 60.669444,
    longitude: 25.852778,
  },
  {
    name: 'Mäntsälä',
    latitude: 60.636111,
    longitude: 25.319444,
  },
  {
    name: 'Mänttä-Vilppula',
    latitude: 62.033333,
    longitude: 24.616667,
  },
  {
    name: 'Mäntyharju',
    latitude: 61.418056,
    longitude: 26.879167,
  },
  {
    name: 'Naantali',
    latitude: 60.468056,
    longitude: 22.026389,
  },
  {
    name: 'Nakkila',
    latitude: 61.365278,
    longitude: 22.004167,
  },
  {
    name: 'Nastola',
    latitude: 60.948611,
    longitude: 25.930556,
  },
  {
    name: 'Nivala',
    latitude: 63.929167,
    longitude: 24.977778,
  },
  {
    name: 'Nokia',
    latitude: 61.477778,
    longitude: 23.509722,
  },
  {
    name: 'Nousiainen',
    latitude: 60.598611,
    longitude: 22.083333,
  },
  {
    name: 'Nurmes',
    latitude: 63.544444,
    longitude: 29.133333,
  },
  {
    name: 'Nurmijärvi',
    latitude: 60.4625,
    longitude: 24.806944,
  },
  {
    name: 'Närpiö',
    latitude: 62.473611,
    longitude: 21.3375,
  },
  {
    name: 'Orimattila',
    latitude: 60.804167,
    longitude: 25.733333,
  },
  {
    name: 'Oripää',
    latitude: 60.855556,
    longitude: 22.697222,
  },
  {
    name: 'Orivesi',
    latitude: 61.677778,
    longitude: 24.356944,
  },
  {
    name: 'Oulainen',
    latitude: 64.266667,
    longitude: 24.816667,
  },
  {
    name: 'Oulu',
    latitude: 65.016667,
    longitude: 25.466667,
  },
  {
    name: 'Outokumpu',
    latitude: 62.725,
    longitude: 29.018056,
  },
  {
    name: 'Padasjoki',
    latitude: 61.35,
    longitude: 25.275,
  },
  {
    name: 'Paimio',
    latitude: 60.456944,
    longitude: 22.686111,
  },
  {
    name: 'Paltamo',
    latitude: 64.406944,
    longitude: 27.8375,
  },
  {
    name: 'Parainen',
    latitude: 60.3,
    longitude: 22.3,
  },
  {
    name: 'Parikkala',
    latitude: 61.555556,
    longitude: 29.501389,
  },
  {
    name: 'Parkano',
    latitude: 62.009722,
    longitude: 23.025,
  },
  {
    name: 'Pedersören kunta',
    latitude: 63.6,
    longitude: 22.794444,
  },
  {
    name: 'Pelkosenniemi',
    latitude: 67.108333,
    longitude: 27.515278,
  },
  {
    name: 'Pello',
    latitude: 66.775,
    longitude: 23.965278,
  },
  {
    name: 'Perho',
    latitude: 63.215278,
    longitude: 24.420833,
  },
  {
    name: 'Pertunmaa',
    latitude: 61.502778,
    longitude: 26.479167,
  },
  {
    name: 'Petäjävesi',
    latitude: 62.255556,
    longitude: 25.183333,
  },
  {
    name: 'Pieksämäki',
    latitude: 62.3,
    longitude: 27.158333,
  },
  {
    name: 'Pielavesi',
    latitude: 63.231944,
    longitude: 26.755556,
  },
  {
    name: 'Pietarsaari',
    latitude: 63.675,
    longitude: 22.704167,
  },
  {
    name: 'Pihtipudas',
    latitude: 63.366667,
    longitude: 25.580556,
  },
  {
    name: 'Pirkkala',
    latitude: 61.465278,
    longitude: 23.643056,
  },
  {
    name: 'Polvijärvi',
    latitude: 62.854167,
    longitude: 29.369444,
  },
  {
    name: 'Pomarkku',
    latitude: 61.693056,
    longitude: 22.006944,
  },
  {
    name: 'Pori',
    latitude: 61.484722,
    longitude: 21.797222,
  },
  {
    name: 'Pornainen',
    latitude: 60.476389,
    longitude: 25.375,
  },
  {
    name: 'Porvoo',
    latitude: 60.393056,
    longitude: 25.663889,
  },
  {
    name: 'Posio',
    latitude: 66.111111,
    longitude: 28.166667,
  },
  {
    name: 'Pudasjärvi',
    latitude: 65.359722,
    longitude: 26.997222,
  },
  {
    name: 'Pukkila',
    latitude: 60.644444,
    longitude: 25.581944,
  },
  {
    name: 'Punkalaidun',
    latitude: 61.111111,
    longitude: 23.105556,
  },
  {
    name: 'Puolanka',
    latitude: 64.868056,
    longitude: 27.670833,
  },
  {
    name: 'Puumala',
    latitude: 61.523611,
    longitude: 28.177778,
  },
  {
    name: 'Pyhtää',
    latitude: 60.491944,
    longitude: 26.542778,
  },
  {
    name: 'Pyhäjoki',
    latitude: 64.463889,
    longitude: 24.258333,
  },
  {
    name: 'Pyhäjärvi',
    latitude: 63.681944,
    longitude: 25.977778,
  },
  {
    name: 'Pyhäntä',
    latitude: 64.097222,
    longitude: 26.330556,
  },
  {
    name: 'Pyhäranta',
    latitude: 60.95,
    longitude: 21.444444,
  },
  {
    name: 'Pälkäne',
    latitude: 61.338889,
    longitude: 24.268056,
  },
  {
    name: 'Pöytyä',
    latitude: 60.718056,
    longitude: 22.602778,
  },
  {
    name: 'Raahe',
    latitude: 64.684722,
    longitude: 24.479167,
  },
  {
    name: 'Raasepori',
    latitude: 59.975,
    longitude: 23.436111,
  },
  {
    name: 'Raisio',
    latitude: 60.486111,
    longitude: 22.169444,
  },
  {
    name: 'Rantasalmi',
    latitude: 62.066667,
    longitude: 28.3,
  },
  {
    name: 'Ranua',
    latitude: 65.929167,
    longitude: 26.516667,
  },
  {
    name: 'Rauma',
    latitude: 61.129167,
    longitude: 21.505556,
  },
  {
    name: 'Rautalampi',
    latitude: 62.622222,
    longitude: 26.833333,
  },
  {
    name: 'Rautavaara',
    latitude: 63.494444,
    longitude: 28.298611,
  },
  {
    name: 'Rautjärvi',
    latitude: 61.433333,
    longitude: 29.355556,
  },
  {
    name: 'Reisjärvi',
    latitude: 63.605556,
    longitude: 24.931944,
  },
  {
    name: 'Riihimäki',
    latitude: 60.738889,
    longitude: 24.772222,
  },
  {
    name: 'Ristijärvi',
    latitude: 64.505556,
    longitude: 28.213889,
  },
  {
    name: 'Rovaniemi',
    latitude: 66.501389,
    longitude: 25.734722,
  },
  {
    name: 'Ruokolahti',
    latitude: 61.291667,
    longitude: 28.819444,
  },
  {
    name: 'Ruovesi',
    latitude: 61.986111,
    longitude: 24.068056,
  },
  {
    name: 'Rusko',
    latitude: 60.541667,
    longitude: 22.222222,
  },
  {
    name: 'Rääkkylä',
    latitude: 62.3125,
    longitude: 29.623611,
  },
  {
    name: 'Saarijärvi',
    latitude: 62.705556,
    longitude: 25.256944,
  },
  {
    name: 'Salla',
    latitude: 66.833333,
    longitude: 28.666667,
  },
  {
    name: 'Salo',
    latitude: 60.386111,
    longitude: 23.125,
  },
  {
    name: 'Saltvik',
    latitude: 60.275,
    longitude: 20.061111,
  },
  {
    name: 'Sastamala',
    latitude: 61.341667,
    longitude: 22.908333,
  },
  {
    name: 'Sauvo',
    latitude: 60.343056,
    longitude: 22.693056,
  },
  {
    name: 'Savitaipale',
    latitude: 61.197222,
    longitude: 27.683333,
  },
  {
    name: 'Savonlinna',
    latitude: 61.868056,
    longitude: 28.886111,
  },
  {
    name: 'Savukoski',
    latitude: 67.291667,
    longitude: 28.161111,
  },
  {
    name: 'Seinäjoki',
    latitude: 62.790278,
    longitude: 22.840278,
  },
  {
    name: 'Sievi',
    latitude: 63.906944,
    longitude: 24.516667,
  },
  {
    name: 'Siikainen',
    latitude: 61.876389,
    longitude: 21.822222,
  },
  {
    name: 'Siikajoki',
    latitude: 64.813889,
    longitude: 24.7625,
  },
  {
    name: 'Siikalatva',
    latitude: 64.266667,
    longitude: 25.866667,
  },
  {
    name: 'Siilinjärvi',
    latitude: 63.075,
    longitude: 27.659722,
  },
  {
    name: 'Simo',
    latitude: 65.661111,
    longitude: 25.066667,
  },
  {
    name: 'Sipoo',
    latitude: 60.376389,
    longitude: 25.272222,
  },
  {
    name: 'Siuntio',
    latitude: 60.1375,
    longitude: 24.227778,
  },
  {
    name: 'Sodankylä',
    latitude: 67.416667,
    longitude: 26.593056,
  },
  {
    name: 'Soini',
    latitude: 62.873611,
    longitude: 24.205556,
  },
  {
    name: 'Somero',
    latitude: 60.629167,
    longitude: 23.513889,
  },
  {
    name: 'Sonkajärvi',
    latitude: 63.669444,
    longitude: 27.522222,
  },
  {
    name: 'Sotkamo',
    latitude: 64.130556,
    longitude: 28.383333,
  },
  {
    name: 'Sottunga',
    latitude: 60.130556,
    longitude: 20.666667,
  },
  {
    name: 'Sulkava',
    latitude: 61.7875,
    longitude: 28.370833,
  },
  {
    name: 'Sund',
    latitude: 60.223611,
    longitude: 20.169444,
  },
  {
    name: 'Suomussalmi',
    latitude: 64.884722,
    longitude: 28.9125,
  },
  {
    name: 'Suonenjoki',
    latitude: 62.625,
    longitude: 27.122222,
  },
  {
    name: 'Sysmä',
    latitude: 61.502778,
    longitude: 25.684722,
  },
  {
    name: 'Säkylä',
    latitude: 61.045833,
    longitude: 22.345833,
  },
  {
    name: 'Taipalsaari',
    latitude: 61.159722,
    longitude: 28.059722,
  },
  {
    name: 'Taivalkoski',
    latitude: 65.576389,
    longitude: 28.241667,
  },
  {
    name: 'Taivassalo',
    latitude: 60.5625,
    longitude: 21.609722,
  },
  {
    name: 'Tammela',
    latitude: 60.808333,
    longitude: 23.759722,
  },
  {
    name: 'Tampere',
    latitude: 61.498056,
    longitude: 23.760833,
  },
  {
    name: 'Tarvasjoki',
    latitude: 60.583333,
    longitude: 22.7375,
  },
  {
    name: 'Tervo',
    latitude: 62.955556,
    longitude: 26.755556,
  },
  {
    name: 'Tervola',
    latitude: 66.088889,
    longitude: 24.811111,
  },
  {
    name: 'Teuva',
    latitude: 62.486111,
    longitude: 21.747222,
  },
  {
    name: 'Tohmajärvi',
    latitude: 62.226389,
    longitude: 30.331944,
  },
  {
    name: 'Toholampi',
    latitude: 63.773611,
    longitude: 24.25,
  },
  {
    name: 'Toivakka',
    latitude: 62.097222,
    longitude: 26.081944,
  },
  {
    name: 'Tornio',
    latitude: 65.848611,
    longitude: 24.147222,
  },
  {
    name: 'Turku',
    latitude: 60.451389,
    longitude: 22.266667,
  },
  {
    name: 'Tuusniemi',
    latitude: 62.811111,
    longitude: 28.491667,
  },
  {
    name: 'Tuusula',
    latitude: 60.402778,
    longitude: 25.029167,
  },
  {
    name: 'Tyrnävä',
    latitude: 64.763889,
    longitude: 25.652778,
  },
  {
    name: 'Ulvila',
    latitude: 61.429167,
    longitude: 21.875,
  },
  {
    name: 'Urjala',
    latitude: 61.080556,
    longitude: 23.55,
  },
  {
    name: 'Utajärvi',
    latitude: 64.7625,
    longitude: 26.419444,
  },
  {
    name: 'Utsjoki',
    latitude: 69.906944,
    longitude: 27.023611,
  },
  {
    name: 'Uurainen',
    latitude: 62.5,
    longitude: 25.4375,
  },
  {
    name: 'Uusikaarlepyy',
    latitude: 63.522222,
    longitude: 22.530556,
  },
  {
    name: 'Uusikaupunki',
    latitude: 60.8,
    longitude: 21.409722,
  },
  {
    name: 'Vaala',
    latitude: 64.559722,
    longitude: 26.840278,
  },
  {
    name: 'Vaasa',
    latitude: 63.095833,
    longitude: 21.615278,
  },
  {
    name: 'Valkeakoski',
    latitude: 61.266667,
    longitude: 24.030556,
  },
  {
    name: 'Valtimo',
    latitude: 63.679167,
    longitude: 28.813889,
  },
  {
    name: 'Vantaa',
    latitude: 60.294444,
    longitude: 25.040278,
  },
  {
    name: 'Varkaus',
    latitude: 62.313889,
    longitude: 27.893056,
  },
  {
    name: 'Vehmaa',
    latitude: 60.686111,
    longitude: 21.713889,
  },
  {
    name: 'Vesanto',
    latitude: 62.931944,
    longitude: 26.415278,
  },
  {
    name: 'Vesilahti',
    latitude: 61.309722,
    longitude: 23.616667,
  },
  {
    name: 'Veteli',
    latitude: 63.473611,
    longitude: 23.788889,
  },
  {
    name: 'Vieremä',
    latitude: 63.743056,
    longitude: 27.001389,
  },
  {
    name: 'Vihti',
    latitude: 60.416667,
    longitude: 24.319444,
  },
  {
    name: 'Viitasaari',
    latitude: 63.075,
    longitude: 25.859722,
  },
  {
    name: 'Vimpeli',
    latitude: 63.161111,
    longitude: 23.822222,
  },
  {
    name: 'Virolahti',
    latitude: 60.583333,
    longitude: 27.706944,
  },
  {
    name: 'Virrat',
    latitude: 62.240278,
    longitude: 23.770833,
  },
  {
    name: 'Vårdö',
    latitude: 60.244444,
    longitude: 20.375,
  },
  {
    name: 'Vöyri',
    latitude: 63.131944,
    longitude: 22.252778,
  },
  {
    name: 'Ylitornio',
    latitude: 66.319444,
    longitude: 23.670833,
  },
  {
    name: 'Ylivieska',
    latitude: 64.072222,
    longitude: 24.5375,
  },
  {
    name: 'Ylöjärvi',
    latitude: 61.55,
    longitude: 23.583333,
  },
  {
    name: 'Ypäjä',
    latitude: 60.804167,
    longitude: 23.281944,
  },
  {
    name: 'Ähtäri',
    latitude: 62.55,
    longitude: 24.069444,
  },
  {
    name: 'Äänekoski',
    latitude: 62.604167,
    longitude: 25.726389,
  },
]

function CitySelect({
  value, setValue,
  tabValue, handleTabChange,
}) {
  const theme = useTheme()

  const [inputValue, setInputValue] = React.useState('')

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 16px',
      backgroundColor: theme.palette.mode === 'dark' ? lighten(theme.palette.background.paper, 0.1) : darken(theme.palette.background.paper, 0.1),
    }}
    >
      <div style={{ width: '400px', maxWidth: '100%' }}>
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: '16px', flexDirection: 'column',
        }}
        >
          <img src={lunch} style={{ height: '100px' }} alt="lunch" />
          <Typography
            variant="h6"
            align="center"
          >
            Missä tänään syödään?
          </Typography>
          <Typography variant="subtitle1" align="center" style={{ marginBottom: '16px' }}>
            Onko lounasporukassasi eripuraa ja &quot;nokkapokkaa&quot; missä tänään syödään? Ei hätää!
            Tämän sovelluksen avulla voitte päättää demokraattisesti lounaspaikan.
          </Typography>
        </div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue)
          }}
          options={options.map((o) => o.name)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField fullWidth {...params} placeholder="Valitse paikkakunta" label="Paikkakunta" />}
          noOptionsText="Paikkakuntaa ei löytynyt"
        />
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Lounaslista" />
          <Tab label="Päivän suosituimmat" />
        </Tabs>
      </div>
    </div>
  )
}

export default CitySelect
