use datweather;

######################
#SPRING
######################
create table spring
SELECT *
FROM datweather.march
where day(date) > 19;

insert INTO datweather.spring
SELECT `april`.`date`,
    `april`.`HOURLYDRYBULBTEMPF`,
    `april`.`HOURLYWindSpeed`,
    `april`.`HOURLYPrecip`
FROM `datweather`.`april`;

insert INTO datweather.spring
SELECT `may`.`date`,
    `may`.`HOURLYDRYBULBTEMPF`,
    `may`.`HOURLYWindSpeed`,
    `may`.`HOURLYPrecip`
FROM `datweather`.`may`;

insert INTO datweather.spring
SELECT `june`.`date`,
    `june`.`HOURLYDRYBULBTEMPF`,
    `june`.`HOURLYWindSpeed`,
    `june`.`HOURLYPrecip`
FROM `datweather`.`june`
where day(date) < 20;


######################
#SUMMER
######################
create table summer
SELECT *
FROM datweather.june
where day(date) > 19;

insert INTO datweather.summer
SELECT `july`.`date`,
    `july`.`HOURLYDRYBULBTEMPF`,
    `july`.`HOURLYWindSpeed`,
    `july`.`HOURLYPrecip`
FROM `datweather`.`july`;

insert INTO datweather.summer
SELECT `august`.`date`,
    `august`.`HOURLYDRYBULBTEMPF`,
    `august`.`HOURLYWindSpeed`,
    `august`.`HOURLYPrecip`
FROM `datweather`.`august`;

insert INTO datweather.summer
SELECT `september`.`date`,
    `september`.`HOURLYDRYBULBTEMPF`,
    `september`.`HOURLYWindSpeed`,
    `september`.`HOURLYPrecip`
FROM `datweather`.`september`
where day(date) < 22;

######################
#FALL
######################
create table fall
SELECT *
FROM datweather.september
where day(date) > 19;

insert INTO datweather.fall
SELECT `october`.`date`,
    `october`.`HOURLYDRYBULBTEMPF`,
    `october`.`HOURLYWindSpeed`,
    `october`.`HOURLYPrecip`
FROM `datweather`.`october`;

insert INTO datweather.fall
SELECT `november`.`date`,
    `november`.`HOURLYDRYBULBTEMPF`,
    `november`.`HOURLYWindSpeed`,
    `november`.`HOURLYPrecip`
FROM `datweather`.`november`;

insert INTO datweather.fall
SELECT `december`.`date`,
    `december`.`HOURLYDRYBULBTEMPF`,
    `december`.`HOURLYWindSpeed`,
    `december`.`HOURLYPrecip`
FROM `datweather`.`december`
where day(date) < 21;

######################
#FALL
######################
create table winter
SELECT *
FROM datweather.december
where day(date) > 20;

insert INTO datweather.winter
SELECT `january`.`date`,
    `january`.`HOURLYDRYBULBTEMPF`,
    `january`.`HOURLYWindSpeed`,
    `january`.`HOURLYPrecip`
FROM `datweather`.`january`;

insert INTO datweather.winter
SELECT `february`.`date`,
    `february`.`HOURLYDRYBULBTEMPF`,
    `february`.`HOURLYWindSpeed`,
    `february`.`HOURLYPrecip`
FROM `datweather`.`february`;

insert INTO datweather.winter
SELECT `march`.`date`,
    `march`.`HOURLYDRYBULBTEMPF`,
    `march`.`HOURLYWindSpeed`,
    `march`.`HOURLYPrecip`
FROM `datweather`.`march`
where day(date) < 21;

