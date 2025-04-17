export interface WeatherDetails {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export enum WeatherCondition {
  ENSOLARADO = 1000,
  PARCIALMENTE_NUBLADO = 1003,
  NUBLADO = 1006,
  ENCOBERTO = 1009,
  NEBLINA = 1030,
  POSSIBILIDADE_CHUVA_ISOLADA = 1063,
  POSSIBILIDADE_NEVE_ISOLADA = 1066,
  POSSIBILIDADE_GRANIZO_ISOLADO = 1069,
  POSSIBILIDADE_CHUVISCO_CONGELANTE = 1072,
  POSSIBILIDADE_TROVOADA = 1087,
  NEVE_VENTANIA = 1114,
  NEVASCA = 1117,
  NEVOEIRO = 1135,
  NEVOEIRO_CONGELANTE = 1147,
  CHUVISCO_LEVE_ISOLADO = 1150,
  CHUVISCO_LEVE = 1153,
  CHUVISCO_CONGELANTE = 1168,
  CHUVISCO_CONGELANTE_FORTE = 1171,
  CHUVA_LEVE_ISOLADA = 1180,
  CHUVA_LEVE = 1183,
  CHUVA_MODERADA_ISOLADA = 1186,
  CHUVA_MODERADA = 1189,
  CHUVA_FORTE_ISOLADA = 1192,
  CHUVA_FORTE = 1195,
  CHUVA_CONGELANTE_LEVE = 1198,
  CHUVA_CONGELANTE_MODERADA_FORTE = 1201,
  GRANIZO_LEVE = 1204,
  GRANIZO_MODERADO_FORTE = 1207,
  NEVE_LEVE_ISOLADA = 1210,
  NEVE_LEVE = 1213,
  NEVE_MODERADA_ISOLADA = 1216,
  NEVE_MODERADA = 1219,
  NEVE_FORTE_ISOLADA = 1222,
  NEVE_FORTE = 1225,
  PELOTAS_DE_GELO = 1237,
  PANCADA_CHUVA_LEVE = 1240,
  PANCADA_CHUVA_MODERADA_FORTE = 1243,
  PANCADA_CHUVA_TORRENCIAL = 1246,
  PANCADA_GRANIZO_LEVE = 1249,
  PANCADA_GRANIZO_MODERADO_FORTE = 1252,
  PANCADA_NEVE_LEVE = 1255,
  PANCADA_NEVE_MODERADA_FORTE = 1258,
  PANCADA_PELOTAS_GELO_LEVE = 1261,
  PANCADA_PELOTAS_GELO_MODERADA_FORTE = 1264,
  CHUVA_LEVE_COM_TROVOADA = 1273,
  CHUVA_MODERADA_FORTE_COM_TROVOADA = 1276,
  NEVE_LEVE_COM_TROVOADA = 1279,
  NEVE_MODERADA_FORTE_COM_TROVOADA = 1282,
}

export interface ForecastItem {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
}
