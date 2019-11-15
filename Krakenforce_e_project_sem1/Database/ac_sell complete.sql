-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2019 at 03:10 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+07:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ac_sell`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL,
  `customer_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_type` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `email`, `phone`, `contact_type`) VALUES
(1, 'Ngô Vũ Thanh Toàn', 'ngotoanlibra@gmail.com', '0984685751', 'email'),
(2, 'Ngô Vũ Thanh Toàn', 'ngotoanlibra@gmail.com', '0984685751', 'email'),
(3, 'toan', 'ngotoanlibra@gmail.com', '984685751', 'on'),
(4, 'toanngo', 'ngotoanlibra@gmail.com', '0984685751', 'on'),
(5, 'toan', 'ngotoanlibra@gmail.com', '0984685751', 'Phone'),
(6, 'toanngo', 'ngotoan270997@gmail.com', '0984685751', 'Phone'),
(7, 'toanngo', 'ngotoan270997@gmail.com', '0984685751', 'email'),
(8, 'test', 'ngotoantest@gmail.com', '0984685751', 'Phone');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pro_id` int(11) NOT NULL,
  `product_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `download` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pro_id`, `product_code`, `name`, `price`, `brand`, `type`, `image`, `download`) VALUES
(1, 'SP01', 'Mitsubishi 1 Ton Inverter Series HJ35VA', '81000', 'Mitsubishi', 'Split AC', 'photos/Mitsubishi 1 Ton Inverter Series HJ35VA.png', 'downloads/01 (1).docx'),
(2, 'SP02', '1.5 Ton Inverter Series HJ50VA', '104000', 'Mitsubishi', 'Split AC', 'photos/Mitsubishi 1.5 Ton Inverter Series HJ50VA.png', 'downloads/Mitsubishi 1.5 Ton Inverter Series HJ50VA.docx'),
(3, 'SP03', '2 Ton Inverter Series HJ71VA', '148000', 'Mitsubishi', 'Split AC', 'photos/Mitsubishi 2 Ton Inverter Series HJ71VA.png', 'downloads/Mitsubishi 2 Ton Inverter Series HJ71VA.docx'),
(4, 'SP04', 'SRK 13 CJK Heavy Industries 1 Ton', '48000', 'Mitsubishi', 'Split AC', 'photos/Mitsubishi SRK 13CJK Heavy Industries 1 Ton.png', 'downloads/04.docx'),
(5, 'SP05', 'MS-13 VC Mr Slim 1 Ton', '48500', 'Mitsubishi', 'Split AC', 'photos/Mitsubishi MS-13 VC Mr Slim 1 Ton.png', 'downloads/05.docx'),
(6, 'SP06', 'PS 3 2 Ton', '121499', 'Mitsubishi', 'Cabinet AC', 'photos/Mitsubishi PS 3 2 Ton - Cabinet.png', 'downloads/Mitsubishi PS 3 2 Ton.docx'),
(7, 'SP07', '4 TON PS SERIES 5JJ', '251999', 'Mitsubishi', 'Cabinet AC', 'photos/Mitsubishi 4 TON PS SERIES 5JJ.png', 'downloads/Mitsubishi 4 TON PS SERIES 5JJ.docx'),
(8, 'SP08', 'PS-3 2.5 Ton Semi Inverter', '229990', 'Mitsubishi', 'Cabinet AC', 'photos/Mitsubishi PS-3 2.5 Ton Semi Inverter.png', 'downloads/Mitsubishi PS-3 2.5 Ton Semi Inverter.docx'),
(9, 'SP09', '4 TON PS SERIES 5JJ', '224999', 'Mitsubishi', 'Cabinet AC', 'photos/Mitsubishi 4 Ton PS Series 5JJ (2).png', 'downloads/Mitsubishi 4 TON PS SERIES 5JJ.docx'),
(10, 'SP10', 'PS3CFO Inverter 3.5 Ton', '298990', 'Mitsubishi', 'Cabinet AC', 'photos/Mitsubishi PS3CFO Inverter 3.5 Ton.png', 'downloads/05 (1).docx'),
(11, 'SP11', 'FDTC25VF', '127600', 'Mitsubishi', 'Cassette AC', 'photos/Mitsubishi FDTC25VF.png', 'downloads/Mitsubishi FDTC25VF.docx'),
(12, 'SP12', 'FDTW56KXE6F VRF 2-Way', '85300', 'Mitsubishi', 'Cassette AC', 'photos/Mitsubishi FDTW56KXE6F VRF 2-Way.png', 'downloads/Mitsubishi FDTW56KXE6F VRF 2-Way.docx'),
(13, 'SP13', 'FDTW140KXE6F VRF 2-Way', '80400', 'Mitsubishi', 'Cassette AC', 'photos/Mitsubishi FDTW140KXE6F VRF 2-Way.png', 'downloads/Mitsubishi FDTC45KXE6F VRF Compact.docx'),
(14, 'SP14', 'FDTC45KXE6F VRF Compact', '163400', 'Mitsubishi', 'Cassette AC', 'photos/Mitsubishi FDTC45KXE6F VRF Compact.png', 'downloads/Mitsubishi FDTC45KXE6F VRF Compact.docx'),
(15, 'SP15', 'FDTS71KXE6F VRF 1-Way', '122400', 'Mitsubishi', 'Cassette AC', 'photos/Mitsubishi FDTS71KXE6F VRF 1-Way.png', 'downloads/05 (2).docx'),
(16, 'SP16', 'CACI12OC3I6 1 Ton', '146300', 'Carrier', 'Split AC', 'photos/Carrier CACI12OC3I6 1 Ton.png', 'downloads/Carrier CACI12OC3I6 1 Ton.docx'),
(17, 'SP17', 'CACS18SU3C3 1.5 Ton', '156800', 'Carrier', 'Split AC', 'photos/Carrier CACS18SU3C3 1.5 Ton.png', 'downloads/Carrier CACS18SU3C3 1.5 Ton.docx'),
(18, 'SP18', 'Durakool Star 42KGL 012T 1Ton', '164686', 'Carrier', 'Split AC', 'photos/Carrier Durakool Star 42KGL 012T 1 Ton.png', 'downloads/Carrier Durakool Star 42KGL 012T 1 Ton.docx'),
(19, 'SP19', 'Xpower Gold 42CVSR022 703 2 Ton', '275700', 'Carrier', 'Split AC', 'photos/Carrier Xpower Gold 42CVSR022 703 2 Ton.png', 'downloads/04 (1).docx'),
(20, 'SP20', 'Xpower Gold 42CVSR018 703 1.5 Ton', '95700', 'Carrier', 'Split AC', 'photos/Carrier Xpower Gold 42CVSR018 703 1.5 Ton.png', 'downloads/05 (3).docx'),
(21, 'SP21', '1.5 Ton', '180000', 'Carrier', 'Cabinet AC', 'photos/Carrier 1.5 Ton.png', 'downloads/Carrier 1.5 Ton.docx'),
(22, 'SP22', '4.0HP Non-inverter', '202600', 'Carrier', 'Cabinet AC', 'photos/Carrier 4.0HP Non-Inverter.png', 'downloads/Carrier 4.0HP Non-Inverter.docx'),
(23, 'SP23', '6.0HP Non-Inverter', '137200', 'Carrier', 'Cabinet AC', 'photos/Carrier 6.0HP Non-Inverter.png', 'downloads/Carrier 6.0HP Non-Inverter.docx'),
(24, 'SP24', '5.0HP Inverter', '366000', 'Carrier', 'Cabinet AC', 'photos/Carrier 5.0HP Inverter.png', 'downloads/04 (2).docx'),
(25, 'SP25', '4.0HP Inverter', '299700', 'Carrier', 'Cabinet AC', 'photos/Carrier 4.0HP Inverter.png', 'downloads/05 (4).docx'),
(26, 'SP26', '3.0HP A5CK 28E/A5LC 28C', '87600', 'Carrier', 'Cassette AC', 'photos/Carrier 3.0HP A5CK 28EA5LC 28C.png', 'downloads/Carrier 3.0HP A5CK 28E_A5LC 28C.docx'),
(27, 'SP27', '2.5HP A5CK 25E/A5LC 20C', '89600', 'Carrier', 'Cassette AC', 'photos/Carrier 2.5HP A5CK 25EA5LC 20C.png', 'downloads/Carrier 2.5HP A5CK 25E_A5LC 20C.docx'),
(28, 'SP28', '2.0HP A5CKY 20E/A5LCY 20C', '219900', 'Carrier', 'Cassette AC', 'photos/Carrier 2.0HP A5CKY 20EA5LCY 20C.png', 'downloads/Carrier 2.0HP A5CKY 20E_A5LCY 20C.docx'),
(29, 'SP29', '4.0HP A5CK 40E/A5LCY 40D', '110700', 'Carrier', 'Cassette AC', 'photos/Carrier 4.0HP A5CK 40EA5LCY 40D.png', 'downloads/04 (3).docx'),
(30, 'SP30', '5.0HP A5CKY 50ER/A5LCY 50FR', '135000', 'Carrier', 'Cassette AC', 'photos/Carrier 2.5HP A5CK 25EA5LC 20C.png', 'downloads/05 (5).docx'),
(31, 'SP31', 'Econotech Series 1 Ton', '36500', 'Orient', 'Split AC', 'photos/Orient Econotech Series 1 Ton.png', 'downloads/Orient Econotech Series 1 Ton.docx'),
(32, 'SP32', 'OS-13 MP14 BM Pattern Series 1 Ton', '38500', 'Orient', 'Split AC', 'photos/Orient OS-13 MP14 BM Pattern Series 1 Ton.png', 'downloads/Orient OS-13 MP14 BM Pattern Series 1 Ton.docx'),
(33, 'SP33', 'DC Inverter Ultron Plus 2 Ton', '96000', 'Orient', 'Split AC', 'photos/Orient DC Inverter Ultron Plus 2 Ton.png', 'downloads/Orient DC Inverter Ultron Plus 2 Ton.docx'),
(34, 'SP34', 'DC Inverter Inventage 1.5 Ton', '60000', 'Orient', 'Split AC', 'photos/Orient DC Inverter Inventage 1.5 Ton.png', 'downloads/04 (4).docx'),
(35, 'SP35', 'DC Inverter Easy Clean 1 Ton', '54000', 'Orient', 'Split AC', 'photos/Orient DC Inverter Easy Clean 1 Ton.png', 'downloads/05 (6).docx'),
(36, 'SP36', '2 Ton OFS-24-MJ', '90999', 'Orient', 'Cabinet AC', 'photos/Orient 2 Ton OFS-24-MJ.png', 'downloads/Orient 2 Ton OFS-24-MJ.docx'),
(37, 'SP37', '4 Ton OFS-48 S2', '131999', 'Orient', 'Cabinet AC', 'photos/Orient 4 Ton OFS - 48 S2.png', 'downloads/Orient 4 Ton OFS - 48 S2.docx'),
(38, 'SP38', '4 Ton OF-48MJ', '136999', 'Orient', 'Cabinet AC', 'photos/Orient 4 Ton OFS - 48 S2.png', 'downloads/Orient 4 Ton OF-48MJ.docx'),
(39, 'SP39', 'OFS-24MS2 2 Ton', '90999', 'Orient', 'Cabinet AC', 'photos/Orient 2 Ton OFS-24-MJ.png', 'downloads/04 (5).docx'),
(40, 'SP40', '2 Ton OFS-24-MJ', '90999', 'Orient', 'Cabinet AC', 'photos/Orient 2 Ton OFS-24-MJ.png', 'downloads/05 (7).docx'),
(41, 'SP41', 'HBU-18HF03', '113000', 'Orient', 'Cassette AC', 'photos/Orient HBU-18HF03.png', 'downloads/Orient HBU-18HF03.docx'),
(42, 'SP42', 'HBU-24CA03', '122000', 'Orient', 'Cassette AC', 'photos/Orient HBU-24CA03.png', 'downloads/Orient HBU-24CA03.docx'),
(43, 'SP43', 'HBU-36HH03', '188000', 'Orient', 'Cassette AC', 'photos/Orient HBU-36HH03.png', 'downloads/Orient HBU-36HH03.docx'),
(44, 'SP44', 'HBU-50CA03T3', '240000', 'Orient', 'Cassette AC', 'photos/Orient HBU-50CA03T3.png', 'downloads/04 (6).docx'),
(45, 'SP45', 'HBU-60CAO3T3', '269000', 'Orient', 'Cassette AC', 'photos/Orient HBU-60CAO3T3.png', 'downloads/05 (8).docx'),
(46, 'SP46', 'SA-KC22BG3', '122000', 'Sanyo', 'Split AC', 'photos/SANYO SA-KC22BG3.png', 'downloads/SANYO SA-KC22BG3.docx'),
(47, 'SP47', 'SAP-KR543E', '286400', 'Sanyo', 'Split AC', 'photos/SANYO SAP-KR543E.png', 'downloads/SANYO SAP-KR543E.docx'),
(48, 'SP48', 'SA-KC18BG3', '138900', 'Sanyo', 'Split AC', 'photos/SANYO SA-KC18BG3.png', 'downloads/SANYO SA-KC18BG3.docx'),
(49, 'SP49', 'SA-KC12BG3', '292000', 'Sanyo', 'Split AC', 'photos/SANYO SA-KC12BG3.png', 'downloads/04 (7).docx'),
(50, 'SP50', 'SA-KC9BG3', '98100', 'Sanyo', 'Split AC', 'photos/SANYO SA-KC9BG3.png', 'downloads/05 (9).docx'),
(51, 'SP51', '0.75 Ton', '158400', 'Sanyo', 'Cabinet AC', 'photos/SANYO 0.75 Ton.png', 'downloads/SANYO 0.75 Ton.docx'),
(52, 'SP52', '2.3 Ton RQ71CXV1', '299000', 'Sanyo', 'Cabinet AC', 'photos/SANYO 2.3 Ton RQ71CXV1.png', 'downloads/SANYO 2.3 Ton RQ71CXV1.docx'),
(53, 'SP53', '3.8 Ton RQ125DXY1', '256100', 'Sanyo', 'Cabinet AC', 'photos/SANYO 3.8 Ton RQ125DXY1.png', 'downloads/SANYO 3.8 Ton RQ125DXY1.docx'),
(54, 'SP54', '4.6 Ton RQ140CXV1', '197100', 'Sanyo', 'Cabinet AC', 'photos/SANYO 4.6 Ton RQ140CXV1.png', 'downloads/04 (8).docx'),
(55, 'SP55', '2.0 Ton RQC25C', '88700', 'Sanyo', 'Cabinet AC', 'photos/SANYO 2.0 Ton RQC25C.png', 'downloads/05 (10).docx'),
(56, 'SP56', ' SN-58CA32 2Ton', '148200', 'Sanyo', 'Cassette AC', 'photos/SANYO SN-58CA32 2 Ton.png', 'downloads/SANYO SN-58CA32 2 Ton.docx'),
(57, 'SP57', 'SN- 24UA74 1.5 Ton', '254800', 'Sanyo', 'Cassette AC', 'photos/SANYO SN-24UA74 1.5 Ton.png', 'downloads/SANYO SN-24UA74 1.5 Ton.docx'),
(58, 'SP58', 'SN-96BA53 1 Ton', '185000', 'Sanyo', 'Cassette AC', 'photos/SANYO SN-96BA53 1 Ton.png', 'downloads/SANYO SN-96BA53 1 Ton.docx'),
(59, 'SP59', 'SN- 45FA68 1.7 Ton', '248100', 'Sanyo', 'Cassette AC', 'photos/SANYO SN-45FA68 1.7 Ton.png', 'downloads/04 (9).docx'),
(60, 'SP60', 'SN- 26YA44 2 Ton', '79999', 'Sanyo', 'Cassette AC', 'photos/SANYO SN-26YA44 2 Ton.png', 'downloads/05 (11).docx'),
(61, 'SP61', 'TS-C126LGA7 (1 Ton)', '45000', 'LG', 'Split AC', 'photos/LG TS-C126LGA7 (1 Ton) - Split.png', 'downloads/LG TS-C126LGA7 (1 Ton) - Split.docx'),
(62, 'SP62', 'TS-186KAA7 (1.5 Ton)', '55000', 'LG', 'Split AC', 'photos/LG TS-186KAA7 (1.5 Ton) - Split.png', 'downloads/LG TS-186KAA7 (1.5 Ton) - Split.docx'),
(63, 'SP63', 'TS - C246KAA7 (2 Ton)', '63800', 'LG', 'Split AC', 'photos/LG TS-C246KAA7 (2 Ton) - Split.png', 'downloads/LG TS-C246KAA7 (2 Ton) - Split.docx'),
(64, 'SP64', 'LS - UC1868RMO (1.5 Ton)', '80800', 'LG', 'Split AC', 'photos/LG LS-UC1868RMO (1.5 Ton) - Split.png', 'downloads/04 (10).docx'),
(65, 'SP65', 'LS - UC2468RMO (2 Ton)', '80900', 'LG', 'Split AC', 'photos/LG LS-UC2468RMO (2 Ton) - Split.png', 'downloads/05 (12).docx'),
(66, 'SP66', 'AF - Q236GMC0', '298200', 'LG', 'Cabinet AC', 'photos/LG AF-Q236GMC0 - Cabinet.png', 'downloads/LG AF-Q236GMC0.docx'),
(67, 'SP67', 'TPC C 488 TICI 4 Ton', '204999', 'LG', 'Cabinet AC', 'photos/LG TPC C 488 TICI 4 Ton - Cabinet.png', 'downloads/LG TPC C 488 TICI 4 Ton.docx'),
(68, 'SP68', 'TP- C186SLV0', '93300', 'LG', 'Cabinet AC', 'photos/LG TP-C186SLV0 - Cabinet.png', 'downloads/LG TP-C186SLV0.docx'),
(69, 'SP69', 'TP-C488TLV0', '128000', 'LG', 'Cabinet AC', 'photos/LG TP-C488TLV0 - Cabinet.png', 'downloads/04 (11).docx'),
(70, 'SP70', 'TP-C508TLA1', '94400', 'LG', 'Cabinet AC', 'photos/LG TP-C508TLA1 - Cabinet.png', 'downloads/05 (13).docx'),
(71, 'SP71', 'ATNQ18GPLE3', '263600', 'LG', 'Cassette AC', 'photos/LG ATNQ18GPLE3 - Cassette.png', 'downloads/LG ATNQ18GPLE3 - Cassette.docx'),
(72, 'SP72', 'ATNQ21GPLE3', '374800', 'LG', 'Cassette AC', 'photos/LG ATNQ21GPLE3 - Cassette.png', 'downloads/LG ATNQ21GPLE3 - Cassette.docx'),
(73, 'SP73', 'ATNQ24GNLE3', '243100', 'LG', 'Cassette AC', 'photos/LG ATNQ24GNLE3 - Cassette.png', 'downloads/LG ATNQ24GNLE3 - Cassette.docx'),
(74, 'SP74', 'ATNQ36GMLE3', '138000', 'LG', 'Cassette AC', 'photos/LG ATNQ36GMLE3 - Cassette.png', 'downloads/04 (12).docx'),
(75, 'SP75', 'ATNQ42GMLE3', '320500', 'LG', 'Cassette AC', 'photos/LG ATNQ42GMLE3 - Cassette.png', 'downloads/05 (14).docx');

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `create_product` AFTER INSERT ON `product` FOR EACH ROW insert into product_detail(pro_id, product_code) values(new.pro_id, new.product_code)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `pro_id` int(10) NOT NULL,
  `product_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `color` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ton` double DEFAULT NULL,
  `cooling_cap` int(10) DEFAULT NULL,
  `heating_cap` int(10) DEFAULT NULL,
  `pw_input` int(10) DEFAULT NULL,
  `eer` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fea_01` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fea_02` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fea_03` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_detail`
--

INSERT INTO `product_detail` (`pro_id`, `product_code`, `model`, `color`, `ton`, `cooling_cap`, `heating_cap`, `pw_input`, `eer`, `fea_01`, `fea_02`, `fea_03`) VALUES
(1, 'SP01', 'HJ35VA', 'White', 1, 42000, 0, 5100, '9.4-2.75', 'Compact Design', '3D Airflow', 'Rounding Natural Air'),
(2, 'SP02', 'HJ50VA', 'Off White', 1.5, 17000, 19000, 4900, '7.51', 'Powerful Cooling', 'Concealed LED Display', 'Child Lock'),
(3, 'SP03', 'HJ71VA', 'White', 2, 35000, 0, 3500, '6.4-2.40', 'Intelligent Airflow', 'Econo Cool', 'New LEV Control'),
(4, 'SP04', 'SRK 13 CJK', 'White', 1, 22000, 18000, 3100, '5.0-3.35', 'Super Quiet Mode', 'Comfortalble Sleep Mode', 'Evaporator Self-Cleaning'),
(5, 'SP05', 'MS-13', 'Grey', 1, 31000, 0, 1200, '6.0-3.50', 'Auto Mode', 'Ultra Thin Design', 'High Efficiency Filter'),
(6, 'SP06', 'PS 3', 'White', 2, 52000, 31000, 4100, '7.2-4.35', 'Dry Function', 'Wide Voltage', 'Active PFC Technology'),
(7, 'SP07', ' SERIES 5JJ', 'White', 1, 44000, 27000, 5100, '8.2-4.1', 'Anti Dust', '24 Hours Timer', 'Independent Dehumidification'),
(8, 'SP08', 'PS-3', 'White', 2.5, 39000, 0, 4500, '7.1-3.1', 'Easy Clean Panel', 'Remote Control Pocket', 'Three Minutes Protection'),
(9, 'SP09', 'SERIES 5JJ', 'White', 4, 35000, 29000, 3400, '6.2-3.1', 'Reserved Air Outlet', 'State Of The Art', 'Air Vane Technology'),
(10, 'SP10', 'PS3CFO', 'White', 3.5, 41000, 0, 3800, '7.6-2.1', 'Air Vane Technology', 'Auto Swing', 'Power Mode'),
(11, 'SP11', 'FDTC25VF', 'White', 3.5, 48000, 26000, 6100, '8.2-3.45', 'Precise System Control Technology', 'Intelligent Airflow', 'Friendly Referigerant'),
(12, 'SP12', 'VRF 2-Way', 'White', 4, 34000, 0, 4900, '7.3-2.9', 'Auto Restart', 'High Temperature Stable', 'Movable Baffle'),
(13, 'SP13', 'VRF 2-Way', 'White', 3.7, 55000, 0, 3800, '6.9-4.1', 'Built In Drain Pump', 'Wide Voltage', '50% Power Saving'),
(14, 'SP14', 'VRF Compact', 'White', 2.9, 61000, 0, 4100, '7.5-3.2', 'Compact Design', '3D Airflow', 'Rounding Natural Air'),
(15, 'SP15', ' VRF 1-Way', 'White', 3.5, 54000, 0, 5600, '8.1-4.3', 'Easy Clean Panel', 'Rust Resistant Cabinet', 'Reserved Air Outlet'),
(16, 'SP16', 'CACI12OC3I6', 'Grey', 1, 42000, 0, 4200, '8.1-3.85', 'Antifouling', 'Rounding Natural Air', 'Compact Design'),
(17, 'SP17', 'CACS18SU3C3', 'White', 1.5, 38000, 0, 4500, '6.4-4.2', 'Power Mode', 'Intelligent Airflow', 'Precise System'),
(18, 'SP18', '42KGL 012T', 'White', 1, 38000, 0, 5500, '7.2-5.2', 'Rust Resistant Cabinet', 'Reserved Air Outlet', 'State Of The Art'),
(19, 'SP19', '42CVSR022 ', 'White', 2, 51000, 0, 4600, '6.1-3.4', 'Intelligent Airflow', 'Friendly Referigerant', 'Auto Restart'),
(20, 'SP20', '42CVSR018 703', 'White', 1.5, 42000, 0, 3900, '7.2-4.5', 'Low Noise System', 'Easy Clean Panel', 'Remote Control'),
(21, 'SP21', '1.5 Ton', 'White', 1.5, 39000, 31000, 4800, '7.1-3.85', 'Self-Cleaning', 'Ultra Thin Design', 'High Efficiency Filter'),
(22, 'SP22', '4.0HP', 'White', 2, 42000, 0, 3200, '6.1-4.75', '24 Hours Timer', 'Easy Clean Panel', 'Remote Control'),
(23, 'SP23', '6.0HP', 'White', 3.5, 51000, 0, 4300, '6.4-3.45', 'Long Distance Airflow', 'Super Quiet Mode', 'Sleep Mode'),
(24, 'SP24', '5.0HP', 'White', 2.7, 35000, 0, 5800, '5.7-2.80', 'Dry Function', 'Wide Voltage', 'Anti Dust'),
(25, 'SP25', '4.0HP', 'White', 3.3, 43000, 38000, 3500, '4.7-1.8', 'Intelligent Airflow', 'Friendly Referigerant', 'LED Display'),
(26, 'SP26', '28E/A5LC 28C', 'White', 3.1, 51000, 0, 4600, '7.2-3.45', 'Reserved Air Outlet', 'State Of The Art', 'Power Mode'),
(27, 'SP27', 'A5CK 25E/A5LC', 'White', 2.9, 48000, 0, 5600, '5.3-2.8', 'LED Display', 'Intelligent Airflow', 'Auto Restart'),
(28, 'SP28', 'A5CKY 20E/A5LCY', 'White', 1.5, 49000, 0, 6600, '6.3-2.8', 'Dry Function', 'Anti Dust', 'Wide Voltage'),
(29, 'SP29', 'A5CK 40E/A5LCY', 'White', 2.5, 38000, 0, 5200, '7.3-3.8', 'Easy Clean Panel', 'Remote Control', 'Rust Resistant'),
(30, 'SP30', 'A5CKY 50ER/A5LCY', 'White', 3.5, 43000, 0, 6200, '5.7-2.8', 'Super Quiet Mode', 'Sleep Mode', 'Auto Mode'),
(31, 'SP31', 'Series 1 Ton', 'White', 1, 52000, 0, 4800, '6.2-3.4', 'Rust Resistant', 'Reserved Air Outlet', 'State Of The Art'),
(32, 'SP32', 'MP14 ', 'Grey', 1, 47000, 0, 3800, '7.2-2.8', 'Anti Dust', '24 Hours Timer', 'Low Noise Air Flow'),
(33, 'SP33', 'Ultron Plus ', 'Brown', 2, 53000, 0, 4800, '5.5-3.2', 'Air Vane Technology', 'Auto Swing', 'Power Mode'),
(34, 'SP34', 'Inventage', 'Black', 1.5, 47000, 0, 5200, '6.2-2.1', 'Multi- Mode', 'Dry Function', 'Wide Voltage'),
(35, 'SP35', 'Easy Clean', 'White', 1, 57000, 0, 4800, '7.1-4.6', 'Compact Design', 'Movable Baffle', '3D Airflow'),
(36, 'SP36', 'OFS-24-MJ', 'White', 2, 51000, 0, 4300, '6.2-2.2', 'Easy Clean Panel', 'Rust Resistant', 'Reserved Air Outlet'),
(37, 'SP37', 'OFS-48 S2', 'White', 4, 51000, 0, 3200, '6.5-3.2', 'Movable Baffle', 'Compact Design', '3D Airflow'),
(38, 'SP38', 'OF-48MJ', 'White', 4, 58000, 0, 4500, '7.5-3.2', 'Auto Mode', 'Ultra Thin Design', 'High Efficiency Filter'),
(39, 'SP39', 'OFS-24MS2', 'White', 2, 48000, 0, 3800, '5.8-2.2', 'Easy Clean Panel', 'Remote Control', 'Low Noise Air Flow'),
(40, 'SP40', 'OFS-24-MJ', 'White', 2, 51000, 0, 4300, '6.8-2.2', 'Long Distance Airflow', 'Super Quiet Mode', 'Inner Brass Screw'),
(41, 'SP41', '18HF03', 'White', 2, 42000, 0, 4800, '6.6-2.35', 'Remote Control', 'State Of The Art', 'Rust Resistant'),
(42, 'SP42', '24CA03', 'White', 2.5, 43000, 0, 3800, '4.6-2.2', 'Friendly Referigerant', 'Auto Restart', 'High Temperature Stable'),
(43, 'SP43', '36HH03', 'White', 1.9, 38000, 0, 4200, '6.1-3.7', 'Wide Voltage', 'Active PFC', '24 Hours Timer'),
(44, 'SP44', '50CA03T3', 'White', 2.5, 42000, 0, 3400, '4.3-2.1', 'Air Vane', 'Auto Swing', 'Power Mode'),
(45, 'SP45', '60CAO3T3', 'White', 3, 37000, 25000, 2900, '5.4-3.6', 'Head Drain Pump', 'Branch Outlet', '50% Power Saving'),
(46, 'SP46', 'KC22BG3', 'grey', 1, 51000, 0, 4800, '6.4-2.75', 'Easy Clean Panel', 'Remote Control', 'Rust Resistant'),
(47, 'SP47', 'KR543E', 'White', 2.8, 48000, 0, 3600, '4.1-1.4', 'Auto Swing', 'Power Mode', 'LED Display'),
(48, 'SP48', 'KC18BG3', 'White', 2.8, 37000, 0, 3900, '5.5-1.4', 'Auto Mode', 'Ultra Thin Design', 'High Efficiency Filter'),
(49, 'SP49', 'KC12BG3', 'White', 3, 41000, 0, 3500, '6.4-3.4', 'Anti Dust', '24 Hours Timer', 'Easy Clean Panel'),
(50, 'SP50', 'KC9BG3', 'Grey', 2, 53000, 0, 4100, '7.1-2.4', 'Friendly Referigerant', 'Compact Design', 'Auto Restart'),
(51, 'SP51', '0.75 Ton', 'White', 0.7, 37000, 0, 4500, '6.2-1.8', 'Movable Baffle', 'Compact Design', '3D Airflow'),
(52, 'SP52', ' RQ71CXV1', 'White', 2.3, 42000, 0, 4500, '5.7-1.8', 'State Of The Art', 'Auto Swing', 'Power Mode'),
(53, 'SP53', 'RQ125DXY1', 'White', 3.8, 48000, 0, 3700, '6.2-1.8', 'Compact Design', '3D Airflow', 'Head Drain Pump'),
(54, 'SP54', 'RQ140CXV1', 'White', 4.6, 32000, 0, 2900, '4.7-1.8', 'Auto Mode', 'Ultra Thin Design', 'High Efficiency Filter'),
(55, 'SP55', 'RQC25C', 'White', 4, 37000, 0, 2100, '6.7-1.8', 'LED Display', 'Intelligent Airflow', 'Friendly Referigerant'),
(56, 'SP56', 'SN-58CA32', 'White', 2, 51000, 0, 4600, '7.7-3.5', 'Easy Clean Panel', 'Remote Control', 'Air Flow System'),
(57, 'SP57', 'SN- 24UA74', 'White', 1.5, 38000, 0, 4800, '6.7-3.5', 'Power Mode', 'LED Display', 'Intelligent Airflow'),
(58, 'SP58', 'SN-96BA53', 'White', 1, 40000, 0, 3400, '5.4-2.5', 'Low Noise System', 'Easy Clean Panel', 'Remote Control'),
(59, 'SP59', 'SN- 45FA68 ', 'White', 1.7, 31000, 0, 2800, '3.4-1.5', 'LED Display', 'Intelligent Airflow', 'Friendly Referigerant'),
(60, 'SP60', 'SN- 26YA44', 'White', 2, 34000, 0, 3200, '4.5-2.5', 'Anti Dust', '24 Hours Timer', 'Wide Voltage'),
(61, 'SP61', 'TS-C126LGA7 ', 'White', 1, 42000, 0, 4700, '6.2-2.75', 'Movable Baffle', 'Compact Design', '3D Airflow'),
(62, 'SP62', 'TS-186KAA7', 'Red', 1.5, 48000, 0, 3400, '5.1-3.75', 'Power Mode', 'LED Display', 'Intelligent Airflow'),
(63, 'SP63', 'TS - C246KAA7', 'White', 2, 36000, 0, 4500, '6.4-2.7', 'Movable Baffle', 'Compact Design', '3D Airflow'),
(64, 'SP64', 'LS - UC1868RMO', 'White', 1.5, 38000, 0, 4200, '5.1-3.4', 'State Of The Art', 'Auto Swing', 'Power Mode'),
(65, 'SP65', 'LS - UC2468RMO', 'White', 2, 42000, 0, 3200, '6.5-2.7', 'Dry Function', 'Wide Voltage', 'Active PFC Technology'),
(66, 'SP66', 'Q236GMC0', 'White', 4, 57000, 0, 4800, '7.3-4.5', 'Econo Cool', 'Self-Diagnostic', 'Long Distance Airflow'),
(67, 'SP67', 'TPC C 488', 'White', 4, 43000, 0, 3800, '6.6-2.5', 'Low Noise Flow', 'Easy Clean Panel', 'Rust Resistant'),
(68, 'SP68', 'C186SLV0', 'White', 2.5, 36000, 0, 2700, '5.3-2.5', 'Compact Design', '3D Airflow', 'Movable Baffle'),
(69, 'SP69', 'C488TLV0', 'White', 3, 33000, 0, 3600, '6.1-2.5', 'Easy Clean Panel', 'Remote Control', 'Rust Resistant'),
(70, 'SP70', 'C508TLA1', 'White', 1.7, 37000, 0, 4200, '7.2-2.7', 'Sleep Mode', 'Auto Mode', 'Ultra-Thin Design'),
(71, 'SP71', 'Q18GPLE3', 'White', 2.5, 38000, 0, 4600, '6.7-3.75', 'Easy Clean Panel', 'Remote Control', 'Air Outlet'),
(72, 'SP72', 'Q21GPLE3', 'White', 2, 37000, 0, 4300, '5.4-2.7', 'Econo Cool', 'Self-Diagnostic', 'Long Distance Airflow'),
(73, 'SP73', 'Q24GNLE3', 'White', 2.8, 42000, 0, 3500, '6.6-3.2', '3D Airflow', 'Movable Baffle', 'Compact Design'),
(74, 'SP74', 'Q36GMLE3', 'White', 3, 37000, 0, 3500, '4.2-1.8', 'Easy Clean Panel', 'Remote Control', 'Low Noise Air Flow'),
(75, 'SP75', 'Q42GMLE3', 'White', 2.5, 43000, 0, 3900, '6.4-2.7', 'Electronic Metal Box', 'Super Quiet Mode', 'Long Distance Airflow');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`,`customer_name`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pro_id`,`product_code`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`pro_id`,`product_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `product_detail`
--
ALTER TABLE `product_detail`
  MODIFY `pro_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD CONSTRAINT `product_detail_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `product` (`pro_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
