use `datweather`;

create table january
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 1; 

create table february
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 2; 

create table march
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 3; 

create table april
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 4; 

create table may
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 5; 

create table june
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 6; 

create table july
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 7; 

create table august
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 8; 

create table september
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 9; 

create table october
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 10; 

create table november
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 11; 

create table december
SELECT `date`,`HOURLYDRYBULBTEMPF`, `HOURLYWindSpeed`, `HOURLYPrecip`
FROM `datweather`.`hourlytxaustincampmabry`
where month(date) = 12; 