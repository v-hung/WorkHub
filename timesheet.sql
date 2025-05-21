-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 21, 2025 at 11:27 AM
-- Server version: 5.7.16
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timesheet`
--

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_roles`
--

CREATE TABLE `asp_net_roles` (
  `Id` char(36) CHARACTER SET ascii NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asp_net_roles`
--

INSERT INTO `asp_net_roles` (`Id`, `Description`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
('08dd9831-6632-4594-8e60-76b0cbcb8e67', '', 'Administrator', 'ADMINISTRATOR', '9cc4ad0b-ad81-457c-90b8-4db4983403fb');

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_role_claims`
--

CREATE TABLE `asp_net_role_claims` (
  `Id` int(11) NOT NULL,
  `RoleId` char(36) CHARACTER SET ascii NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asp_net_role_claims`
--

INSERT INTO `asp_net_role_claims` (`Id`, `RoleId`, `ClaimType`, `ClaimValue`) VALUES
(1, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.View'),
(2, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.Create'),
(3, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.Edit'),
(4, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.Delete'),
(5, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.Export'),
(6, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Users.Import'),
(7, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Roles.View'),
(8, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Roles.Create'),
(9, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Roles.Edit'),
(10, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Roles.Delete'),
(11, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Teams.View'),
(12, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Teams.Create'),
(13, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Teams.Edit'),
(14, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Teams.Delete'),
(15, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.WorkTimes.View'),
(16, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.WorkTimes.Create'),
(17, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.WorkTimes.Edit'),
(18, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.WorkTimes.Delete'),
(19, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Projects.View'),
(20, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Projects.Create'),
(21, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Projects.Edit'),
(22, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Projects.Delete'),
(23, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Devices.View'),
(24, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Devices.Create'),
(25, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Devices.Edit'),
(26, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Devices.Delete'),
(27, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Timesheets.View'),
(28, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.Timesheets.Export'),
(29, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.System.SendEmail'),
(30, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.System.Report'),
(31, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.BioStar.SyncUsers'),
(32, '08dd9831-6632-4594-8e60-76b0cbcb8e67', 'Permission', 'Permissions.BioStar.SyncTimesheets');

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_users`
--

CREATE TABLE `asp_net_users` (
  `Id` char(36) CHARACTER SET ascii NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `UserPosition` int(11) DEFAULT NULL,
  `IsFirstLogin` tinyint(1) NOT NULL,
  `RemainingLeaveMinutes` int(11) NOT NULL,
  `UserStatus` int(11) NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL,
  `IsDeleted` tinyint(1) NOT NULL,
  `WorkTimeId` int(11) DEFAULT NULL,
  `SupervisorId` char(36) CHARACTER SET ascii DEFAULT NULL,
  `TeamId` int(11) DEFAULT NULL,
  `BioStarUserId` longtext,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext,
  `SecurityStamp` longtext,
  `ConcurrencyStamp` longtext,
  `PhoneNumber` longtext,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime(6) DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asp_net_users`
--

INSERT INTO `asp_net_users` (`Id`, `FullName`, `Image`, `UserPosition`, `IsFirstLogin`, `RemainingLeaveMinutes`, `UserStatus`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `LastModifiedBy`, `IsDeleted`, `WorkTimeId`, `SupervisorId`, `TeamId`, `BioStarUserId`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`) VALUES
('021f9a4f-d5ce-421d-8269-b0a5c00a9a69', 'guess 5', '/uploads/users/avatar_021f9a4f-d5ce-421d-8269-b0a5c00a9a69.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462114', NULL, NULL, NULL, 0, NULL, NULL, NULL, '92', 'bioStar_92', 'bioStar_92', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEEd0SZe00WkahX9pX5px4FK+tu+r6Dcv+avFZ4Tzs6DHWf0SjkwjnzzVaDyiAahUNw==', 'a316ba4a-682f-4f32-9729-4531faf329c0', 'ef7d3b79-44a6-4f2f-bb6d-4c5d67dae33d', NULL, 0, 0, NULL, 1, 0),
('051c4428-a5f7-4326-a92e-084f000c00df', 'GUESS 3', '/uploads/users/avatar_051c4428-a5f7-4326-a92e-084f000c00df.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462112', NULL, NULL, NULL, 0, NULL, NULL, NULL, '83', 'bioStar_83', 'bioStar_83', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKAX0dNM0bXod6fzEfrPe7ZgfcR4hqVqi6D41RkO155R448Qlze96xfulOrHidxMHg==', '80c58de5-b852-41bc-a35b-541716200533', '375c3418-61a7-4a79-884b-405e1fb1e750', NULL, 0, 0, NULL, 1, 0),
('09fed376-1698-4d85-a414-b87bab3efa8b', 'Nakamura', '/uploads/users/avatar_09fed376-1698-4d85-a414-b87bab3efa8b.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462089', NULL, NULL, NULL, 0, NULL, NULL, NULL, '53', 'bioStar_53', 'bioStar_53', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEC08+3BL2MceIaTbXrjBJcue4U1a0U+24QBtjWXBBMH+eRaY//tYgtLR+RcZTxojhA==', '51dd20c1-55dd-45bf-9cfb-c473917fc9b7', '0843f025-6b8b-4dfb-a9aa-28ca960fe937', NULL, 0, 0, NULL, 1, 0),
('0b3c2dac-399b-4598-9324-087eac5468f2', 'Hayashi MSR', '/uploads/users/avatar_0b3c2dac-399b-4598-9324-087eac5468f2.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462139', NULL, NULL, NULL, 0, NULL, NULL, NULL, '209', 'bioStar_209', 'bioStar_209', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEObHyMHDhOUjMYqwn6Pj6zoFEfZayvvcGnEhgFofN8UAT7TRGL6GBl2F2O5PKBypZg==', '2babef45-e02a-4bef-b9f8-8b89009ac354', '6f3f30b5-1693-4c8e-a33d-47298450ca3b', NULL, 0, 0, NULL, 1, 0),
('10447acd-8689-473e-a76f-47aaef7a102a', 'Đặng Thị Diễm My', '/uploads/users/avatar_10447acd-8689-473e-a76f-47aaef7a102a.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462103', NULL, NULL, NULL, 0, NULL, NULL, NULL, '73', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEDBHuXRRwuyViwdDYYskWLxCwd6/Z79EJrmzOkMklddAMehHAAI5N7Fo7MxyYcj7JA==', '2d76cbbf-a023-4810-bd88-44a92c8493e2', '7df2bd01-5350-4d02-8b7c-a4cf77979979', NULL, 0, 0, NULL, 1, 0),
('1706d2ad-d694-4334-bbc0-ca74a556d4ae', 'Phùng Đức Long (Onsite)', '/uploads/users/avatar_1706d2ad-d694-4334-bbc0-ca74a556d4ae.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462140', NULL, NULL, NULL, 0, NULL, NULL, NULL, '210', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 1, 'AQAAAAIAAYagAAAAEMqYn/6m8kIfpzx8PohNoMTrpTXT2rihCXS/rnpTwEU/dMYtQRwN9AP8GDlOsTOMEA==', '01375d98-f203-484e-bd76-da622f15caf4', 'debb5654-508d-48b1-a39a-00b40d0fd50f', NULL, 0, 0, NULL, 1, 0),
('1b63c8c1-ed5c-474a-b049-b12e05c8232c', 'card 8', '/uploads/users/avatar_1b63c8c1-ed5c-474a-b049-b12e05c8232c.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462153', NULL, NULL, NULL, 0, NULL, NULL, NULL, '127', 'bioStar_127', 'bioStar_127', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEF0+vERaoM5gDsmw2wxCN/hwY1kRBbc7ECpr2CPWbhLZGu4KUNBEhCwamBwDNEBV5A==', '7842361e-a8cd-4136-9ef7-ba1fdd45d315', '66bfb8f9-70db-4ae1-9108-37404d210e3f', NULL, 0, 0, NULL, 1, 0),
('1b675e4e-d328-4635-b7de-6ef5855eaf66', '', '/uploads/users/avatar_1b675e4e-d328-4635-b7de-6ef5855eaf66.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462105', NULL, NULL, NULL, 0, NULL, NULL, NULL, '76', 'bioStar_76', 'bioStar_76', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBWov/05RvuzxPw7tMWURHFhTY11yMv29o5+RVJRvMRqqTCCGixL+Egor+qqwtcwIg==', 'b0d08916-2beb-4cf5-b934-dc169e217be4', '2407dac7-ce19-4986-81c7-44f7a168170f', NULL, 0, 0, NULL, 1, 0),
('21690bc5-1661-45b7-abea-b52a150ff2d8', 'Tang Ngoc Van', '/uploads/users/avatar_21690bc5-1661-45b7-abea-b52a150ff2d8.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462082', NULL, NULL, NULL, 0, NULL, NULL, NULL, '49', 'bioStar_49', 'bioStar_49', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEN5n1WKmHEqns4lhVvt28alcQoEaF3QnRQlwrqq1qx+YNdBtVtsjr7oHEDtaI9Z9zw==', '3b2aa612-cc5e-4c95-9ad9-37d7d0c33743', '8cca7080-4951-4d72-a01f-5770c4816a18', NULL, 0, 0, NULL, 1, 0),
('248f1dfd-e326-4fe6-87ab-77b831eee5c9', 'card3', '/uploads/users/avatar_248f1dfd-e326-4fe6-87ab-77b831eee5c9.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462148', NULL, NULL, NULL, 0, NULL, NULL, NULL, '122', 'bioStar_122', 'bioStar_122', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEG7ko84vSgmgqJYEDjwX1WxBKkw89xvqVwmQ5NH2Y0dZu9KJ0RoYKPln6JOtLP4O7A==', 'f1719f12-1eaf-4011-87c9-5d9788881075', 'b43833d6-9cef-40df-9f5b-b31bb8136f2c', NULL, 0, 0, NULL, 1, 0),
('30753979-125f-42b5-965f-7f28ada41aa9', 'Vũ Huyền Ngọc', '/uploads/users/avatar_30753979-125f-42b5-965f-7f28ada41aa9.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462075', NULL, NULL, NULL, 0, NULL, NULL, NULL, '32', 'bioStar_32', 'bioStar_32', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPjvEenEyA6KaTBOtmco9woLaDJDXW+/Ves7z3bvULs2UL5ZZHmFl5k8sli2nq3pgg==', 'bc179f5b-ba4a-4a41-aafb-339923ecf9c8', '505c0483-841e-4ce7-9dfa-018aacebd3b8', NULL, 0, 0, NULL, 1, 0),
('31216f27-09db-4bed-ad64-55d7f83f4391', 'card5', '/uploads/users/avatar_31216f27-09db-4bed-ad64-55d7f83f4391.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462151', NULL, NULL, NULL, 0, NULL, NULL, NULL, '124', 'bioStar_124', 'bioStar_124', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKZML9FMSQte7RZTNOFqBNG3pAsjsgcKe5d1uSBImDPN3XAM5qr+Pmxx+ymoZUL6Vw==', '08eb1752-f4f5-4bd1-ac58-2f0028c9ae52', '97e940f5-7a0b-4f48-a810-d09a33b8e0a4', NULL, 0, 0, NULL, 1, 0),
('3472c616-09c6-4761-ac39-707d9664c68f', 'guess 4', '/uploads/users/avatar_3472c616-09c6-4761-ac39-707d9664c68f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462113', NULL, NULL, NULL, 0, NULL, NULL, NULL, '91', 'bioStar_91', 'bioStar_91', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMM7krFVAU9XzBcTfZ54x1fpBW2kX1LERfWUnVGxUd5ja81DnqM4Eyxj1lmla7xeIg==', '61893456-4511-4874-bc69-a30729dd91a4', '993cb573-c4d4-4812-8f03-e9daee9cf43e', NULL, 0, 0, NULL, 1, 0),
('383bac99-81cf-4104-9e34-37ad1246cd5c', 'card10', '/uploads/users/avatar_383bac99-81cf-4104-9e34-37ad1246cd5c.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462155', NULL, NULL, NULL, 0, NULL, NULL, NULL, '129', 'bioStar_129', 'bioStar_129', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECtwoadtECHnBdSn6xh6mLimQ4jsnRE0LecMDvjDnL0RNss4urOxmApb1JbA2NETtA==', '5895ec99-09ea-4fa6-9d9a-85f2715911cd', 'fa229b7d-b5b2-4afa-b12b-414245c78aab', NULL, 0, 0, NULL, 1, 0),
('43b8b5db-1d7a-4e9a-91a5-1ce8534c217b', 'Sếp', '/uploads/users/avatar_43b8b5db-1d7a-4e9a-91a5-1ce8534c217b.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462051', NULL, NULL, NULL, 0, NULL, NULL, NULL, '7', 'bioStar_7', 'bioStar_7', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEL0iagd76GLva/VqGkuh6CZIOzDfbjxkpK5uqxWO+eP1dzNQRtmQyxUEVkpPVsFxzQ==', '40423ff7-ac39-4450-aad1-dd3411e6bb09', 'bcd9b933-2c55-4971-b849-e46e2a5f1310', NULL, 0, 0, NULL, 1, 0),
('48d9453e-44d2-4695-92ca-8e55124cbea6', 'Nguyen Tien Nghia (fabbi)', '/uploads/users/avatar_48d9453e-44d2-4695-92ca-8e55124cbea6.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462138', NULL, NULL, NULL, 0, NULL, NULL, NULL, '208', 'bioStar_208', 'bioStar_208', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAFnxx1dDHNPiUcT3xj/6h1kzepbvl4r3xFXi7x/xeoLDkEYEjV9Ixuz5X0XVbxibg==', 'e78285ae-a6cc-4257-b272-ccea44c16ed3', '164bab3f-a8a6-4b98-babb-ce352a5baad7', NULL, 0, 0, NULL, 1, 0),
('4a730ca5-ba65-48af-a4b5-a6c3fdafb950', 'guess 7', '/uploads/users/avatar_4a730ca5-ba65-48af-a4b5-a6c3fdafb950.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462116', NULL, NULL, NULL, 0, NULL, NULL, NULL, '94', 'bioStar_94', 'bioStar_94', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEA0kJuOHBhoFwFXr63aXKe8EM0KS4TDzRTCb+wurtqbsQED4Gs6KkqGwTMEWMJs+xg==', 'f073921f-9b57-4df6-baef-d321cd4ea126', '7b859fd0-5a7f-40a7-a18f-a1e7f737a4e4', NULL, 0, 0, NULL, 1, 0),
('5488d526-c36f-4928-befb-ae8008ee6f6d', 'Guees 2', '/uploads/users/avatar_5488d526-c36f-4928-befb-ae8008ee6f6d.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462109', NULL, NULL, NULL, 0, NULL, NULL, NULL, '81', 'bioStar_81', 'bioStar_81', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMyn+ZKQBn/xSk7yNFKjfnUR05646qIa5NLGjJ8CgqGQLpwiLhVO2oe0thmQfvsotw==', '1762038e-90ab-4f63-9502-f3f7d3fe5074', 'cfe13e8a-7d1c-44cd-b581-ce0e110c8c82', NULL, 0, 0, NULL, 1, 0),
('56837676-765e-4c48-b773-cb1aeaccdc49', 'Quách Thị Vân Anh', '/uploads/users/avatar_56837676-765e-4c48-b773-cb1aeaccdc49.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462068', NULL, NULL, NULL, 0, NULL, NULL, NULL, '15', 'bioStar_15', 'bioStar_15', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOKpaPF4h3kqBF+nNOcdk+jZlirToD+gdteYdLzwVUnrcpA2YAehgtAocD8dcJI6Gg==', '66598d4b-021e-4d85-8e58-1bebbfb14326', 'b4e3896d-1aa4-4189-9c9d-0829cc69dd81', NULL, 0, 0, NULL, 1, 0),
('5be2983d-1d3a-4937-bc43-79f40266e46e', 'Nguyễn Minh Thái', '/uploads/users/avatar_5be2983d-1d3a-4937-bc43-79f40266e46e.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462071', NULL, NULL, NULL, 0, NULL, NULL, NULL, '18', 'bioStar_18', 'bioStar_18', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPWaHHxi6oNpNCh7vOa9aT0x7AarIi3J3c0DD2QzS4j07gtoeeUtOnhS9NPjqXiZng==', 'b51be779-f895-4883-b14b-77741e744893', 'e0dae394-64ba-4d79-ae66-00afdc245004', NULL, 0, 0, NULL, 1, 0),
('61db0527-078c-423e-a297-ff4759e26662', 'Vũ Huy Bình (Rikkei)', '/uploads/users/avatar_61db0527-078c-423e-a297-ff4759e26662.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462074', NULL, NULL, NULL, 0, NULL, NULL, NULL, '31', 'bioStar_31', 'bioStar_31', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOUfGLzlAMNvoIpyaL759GPMIZ6e6zP/db/G1e0QStIuvvSY3RK+owYbmZiXlpqsmQ==', '420ab491-4dd1-475a-abf6-7be9b97ee61e', 'aecb3319-99e5-4716-9b11-023c65afacaa', NULL, 0, 0, NULL, 1, 0),
('64edf8c0-58f5-4249-9b4a-b9e1cef7f5e6', 'KHANG (rikkei)', '/uploads/users/avatar_64edf8c0-58f5-4249-9b4a-b9e1cef7f5e6.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462095', NULL, NULL, NULL, 0, NULL, NULL, NULL, '58', 'bioStar_58', 'bioStar_58', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMsvXUXdPjuRMFNM4jdSC6sW47/itb93QgjJr2v7Uz4MQzT4bldNqXBRV2ddxcQ1Xg==', 'a899a15f-5da0-4de6-b46b-66e856f1d97e', '1834d644-949d-40a1-a375-bce34b98ecad', NULL, 0, 0, NULL, 1, 0),
('657372c0-4d05-472d-9764-20d29a482318', 'Ngo thanh tung', '/uploads/users/avatar_657372c0-4d05-472d-9764-20d29a482318.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462126', NULL, NULL, NULL, 0, NULL, NULL, NULL, '118', 'bioStar_118', 'bioStar_118', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGroF5bgx7jNKYQZyOrbpWb+dBQBGCQDRXlraNzzqyClj+gcfQ/aSZsyfLOQcRIAqg==', '7f3ff1a0-abfe-4e38-966b-25950b4b2b68', '745c4522-7388-4dec-bdf8-ab34dc1bc283', NULL, 0, 0, NULL, 1, 0),
('65be44e0-0578-43b7-a1b2-bdc9e7343bac', 'guess 6', '/uploads/users/avatar_65be44e0-0578-43b7-a1b2-bdc9e7343bac.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462115', NULL, NULL, NULL, 0, NULL, NULL, NULL, '93', 'bioStar_93', 'bioStar_93', NULL, NULL, 1, 'AQAAAAIAAYagAAAAED3W6t/MnXyNMyjtsCYlDmwxXkyqnCFhyK9BKnHrsutVMweRp+fyNQJQIExNoIRNMg==', 'bcb0228c-f33a-46c4-a01c-e810e3d20bb8', '0779ef3e-c07f-40b9-8496-adb82d4c3dd9', NULL, 0, 0, NULL, 1, 0),
('66ffd80f-30a3-4bd2-ab80-b81501a80de5', 'Nguyễn Bảo Lộc (fabbi)', '/uploads/users/avatar_66ffd80f-30a3-4bd2-ab80-b81501a80de5.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462131', NULL, NULL, NULL, 0, NULL, NULL, NULL, '202', 'bioStar_202', 'bioStar_202', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKuiPUV1gg7pRtATjrK9rl8IZRvs2ky1wQ6GG5oFeykY+Vv5/K0AFGn/ApB0N8jQSw==', 'e72ff814-2b12-472e-a5f6-c721f9ed6894', '5e2037bc-051e-46bd-a56c-1cbb8fe5dff8', NULL, 0, 0, NULL, 1, 0),
('6b6b2f85-9499-4cb1-abd1-e0a493151d05', 'HASHIMOTO SEIKA', '/uploads/users/avatar_6b6b2f85-9499-4cb1-abd1-e0a493151d05.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462090', NULL, NULL, NULL, 0, NULL, NULL, NULL, '54', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEBcIAsuzEI5rwuiJh4vRgi2lC0TAwGR3bgtH4nBEorIUINxWJQ53gvxY30QHeEfbyQ==', 'f2201412-c811-4fba-ae9e-c364ee7e2c59', '1200637f-c196-4e6e-a8b9-6cb9a3335a94', NULL, 0, 0, NULL, 1, 0),
('6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1', 'Trần Cảnh Dưỡng', '/uploads/users/avatar_6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462079', NULL, NULL, NULL, 0, NULL, NULL, NULL, '39', 'bioStar_39', 'bioStar_39', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOG4O7XjcVybvfUJQ/mgPdGdeMjuwtLC9sqq/styZzd1egtiwszl+S5SX9LZYeYNpg==', 'fc9f23cc-9d3c-4b87-a16d-b701eac3cb08', '5d7805b0-9836-4652-9841-d0a2a731e6ba', NULL, 0, 0, NULL, 1, 0),
('713a69a9-b594-430d-aae4-e86cb36d64ff', 'Gues1', '/uploads/users/avatar_713a69a9-b594-430d-aae4-e86cb36d64ff.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462106', NULL, NULL, NULL, 0, NULL, NULL, NULL, '88', 'bioStar_88', 'bioStar_88', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDePGaUry/aL4ok/lBauvm+SoV3zK/5IlVio1XXpYdt4yvAkrUso7mQ8lkxo5vVVOg==', '1c382540-46a0-4ccd-9d1b-b833150833a7', 'bba84346-862b-4bfa-ad2a-dc32d02024a2', NULL, 0, 0, NULL, 1, 0),
('72c7aa50-f2a6-4837-a7f6-efcd17f3b851', 'Trần Việt Sỹ', '/uploads/users/avatar_72c7aa50-f2a6-4837-a7f6-efcd17f3b851.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462104', NULL, NULL, NULL, 0, NULL, NULL, NULL, '74', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAECnoIpgcRVZeXQjbTMwLkkDsNqHIh7127kvbtq7fJ1YG8jeEDKGfO2k2SKkxVA1M6Q==', '9d46766c-2467-4a63-aa81-0dc268ff0f74', 'b69301cb-4ad5-47ab-b9d2-85cf6143446a', NULL, 0, 0, NULL, 1, 0),
('7869c58b-ac36-42b2-8222-59c437ea79d5', 'Nguyễn Đức Thuận', '/uploads/users/avatar_7869c58b-ac36-42b2-8222-59c437ea79d5.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462072', NULL, NULL, NULL, 0, NULL, NULL, NULL, '19', 'bioStar_19', 'bioStar_19', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKbleHsqZDvPNh1fCZA7u8hb/NZblDqSzur5nyVRmkwUoaPKjNxc2tvfztgk1mivMg==', '4a071ffa-b473-4b4f-9bae-a5d82f6f77d5', '9ff04ba5-722f-4d0f-8dff-eec9fc820260', NULL, 0, 0, NULL, 1, 0),
('7ac34ee0-aeb8-498d-a8d1-479161488d89', 'card 4', '/uploads/users/avatar_7ac34ee0-aeb8-498d-a8d1-479161488d89.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462150', NULL, NULL, NULL, 0, NULL, NULL, NULL, '123', 'bioStar_123', 'bioStar_123', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKL+vSj1VjCmyzq42/omim3b0FawP1WeaxxKlf8bYlmDWkH+p8jXAc2lDYiMSggOFA==', '11e51e96-eac6-42c5-97d4-d909372656cb', 'b3759800-bac3-435d-85b3-84f710857ecd', NULL, 0, 0, NULL, 1, 0),
('7db80653-9743-4158-8252-b7f84723d6a2', 'Quản Thị Ngọc', '/uploads/users/avatar_7db80653-9743-4158-8252-b7f84723d6a2.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462094', NULL, NULL, NULL, 0, NULL, NULL, NULL, '55', 'bioStar_55', 'bioStar_55', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMK4cZyyqz8JpbjI7SaiN2tU0QRJq2EiwY1zjdrA53Hl09awbyKzYz3kEQccJI8ZpA==', 'e7c2a5e7-2dad-45fe-b01d-606f60d5641d', 'e9f0d9d4-ee3f-494f-ab5e-754d2dfd15f9', NULL, 0, 0, NULL, 1, 0),
('815152fc-871e-459b-89c6-324ff2c172b3', 'Bạch Thị Hương Giang', '/uploads/users/avatar_815152fc-871e-459b-89c6-324ff2c172b3.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462065', NULL, NULL, NULL, 0, NULL, NULL, NULL, '14', 'bioStar_14', 'bioStar_14', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKLOS79lA71xdM0gyXbClU+NxfRN20+ndMG67p6s19hf1pKd7XV+Ruu+hTmH2vkUnw==', '3456fd4c-3221-4e77-8462-b7e49c1fca80', '354f77c1-f050-41b3-aceb-08a80048b6d3', NULL, 0, 0, NULL, 1, 0),
('8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f', 'Do Tien Dung', '/uploads/users/avatar_8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462081', NULL, NULL, NULL, 0, NULL, NULL, NULL, '46', 'bioStar_46', 'bioStar_46', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHddSmZ2G5qAzSsH+HHLe6m0wGm6voGCjISEcVVt9XF6Y2tyI0H8Qo9q+cTRV72HTw==', '4b4b9a02-79a6-4bd3-827e-3ec931a32a72', '0f731409-91b2-4a8b-b482-37ad1538fcd2', NULL, 0, 0, NULL, 1, 0),
('8dc5b897-fc98-4d0e-acca-dcb4ccba9155', 'Trần Văn Long', '/uploads/users/avatar_8dc5b897-fc98-4d0e-acca-dcb4ccba9155.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462073', NULL, NULL, NULL, 0, NULL, NULL, NULL, '27', 'bioStar_27', 'bioStar_27', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIHkZXR6JuDVJFMvuuBhsTgyvYjgomrQCVf/XAstyavY/ofK0C2TD9W9sEKxFGXaNQ==', '2743ddcd-9247-4bab-a0d8-ee3a8256df29', '26175b1b-a00f-4292-b12b-96287ce4b6aa', NULL, 0, 0, NULL, 1, 0),
('914a88e1-930e-4a3f-bdc7-048515e14b66', 'card9', '/uploads/users/avatar_914a88e1-930e-4a3f-bdc7-048515e14b66.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462154', NULL, NULL, NULL, 0, NULL, NULL, NULL, '128', 'bioStar_128', 'bioStar_128', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJN2v/CL3Uhubrvx9urKz75Qy0vAl92VkBhfDFrjWN2eBhIsN9wRymqxH9VzLJVCQQ==', 'a1b3d527-c321-4cc3-9933-285e17d96b3f', '87f8f7a5-d647-4987-9ff8-4411278e05b6', NULL, 0, 0, NULL, 1, 0),
('91de8b04-686a-4471-ad40-0ae40aaccaee', 'Phạm An Thiện (fabbi)', '/uploads/users/avatar_91de8b04-686a-4471-ad40-0ae40aaccaee.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462130', NULL, NULL, NULL, 0, NULL, NULL, NULL, '201', 'bioStar_201', 'bioStar_201', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOPTS6a9TOpjp82IKddB49MDZ1CZMIOeAKDF9JhnWgPu7HELknznuhZtAphgjJTGkw==', 'd50e0787-dde5-4e23-aff5-9644b8124c78', '7c11901f-046c-4af3-b8e2-d8fdff3f3eb9', NULL, 0, 0, NULL, 1, 0),
('92193f9a-3a42-4049-a572-6a3828e6469f', 'Vu Binh Giang', '/uploads/users/avatar_92193f9a-3a42-4049-a572-6a3828e6469f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462144', NULL, NULL, NULL, 0, NULL, NULL, NULL, '215', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 1, 'AQAAAAIAAYagAAAAENWsKxjeR5CPFHwNH1odNH7qIHxDsDJseJ8ot+Np8jXU8s6yTNsJ0awZaX36DEsZKg==', '8d278a82-a304-41fc-8720-76dc06acc162', 'be4d6d0a-75fc-44ad-af1d-b7080f8c7b41', NULL, 0, 0, NULL, 1, 0),
('924a0b26-1171-4360-b417-eddde7fd1b26', 'Kien (rikkei)', '/uploads/users/avatar_924a0b26-1171-4360-b417-eddde7fd1b26.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462118', NULL, NULL, NULL, 0, NULL, NULL, NULL, '100', 'bioStar_100', 'bioStar_100', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECM0uVccVt52FzbFDdYlx+/ne4HF2JtPS1JOLSnU4jBVLuLW3Ypz7Y9rVFInT33o4A==', '88ba9112-0c69-4b5b-bc29-65940f0ff937', '0034e189-0843-474f-b09e-a8bbe33b005e', NULL, 0, 0, NULL, 1, 0),
('92cb5002-8953-47fb-8f5e-a8e8240125b9', 'Trần Văn Tuyên', '/uploads/users/avatar_92cb5002-8953-47fb-8f5e-a8e8240125b9.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462142', NULL, NULL, NULL, 0, NULL, NULL, NULL, '213', 'bioStar_213', 'bioStar_213', NULL, NULL, 1, 'AQAAAAIAAYagAAAAENmttZfOSUAD9JCyL4hLcoeyV3jmj2GO3ttG0arI5z8QQYtB0nHRHPeX+sT5udWuvA==', '337a29f4-938d-4953-80ed-544dedadae7d', '41a215b4-4a2c-4147-93f3-469248d3c6ca', NULL, 0, 0, NULL, 1, 0),
('93f3e318-6673-4d2a-a410-1b87fb16886f', 'Hai rikkei', '/uploads/users/avatar_93f3e318-6673-4d2a-a410-1b87fb16886f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462120', NULL, NULL, NULL, 0, NULL, NULL, NULL, '104', 'bioStar_104', 'bioStar_104', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOAPcj/hbDSztNBCJZ1biiJOKk5rgyHSyaH0CXDGKOH65ao2te2y1Rq6LO+lwGctWw==', '2507f734-4563-4ab9-80c0-a4a750a8668e', '85d78c0d-1e06-4e94-aa59-bddfe61f4a23', NULL, 0, 0, NULL, 1, 0),
('94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70', 'Hoàng Văn Dương', '/uploads/users/avatar_94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462101', NULL, NULL, NULL, 0, NULL, NULL, NULL, '70', 'bioStar_70', 'bioStar_70', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKfB4EbqTmgWiUbQsYAvCtv66GylJVRpk1qnXtRPSHhuoHu6tl5XqoFpq4d/5OhutA==', 'fea01423-cfae-45bc-b9c5-2da2b638dc7d', 'c1b115ff-0d9a-4107-a742-bb42fbf92166', NULL, 0, 0, NULL, 1, 0),
('9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b', 'Đào Duy Thắng', '/uploads/users/avatar_9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462076', NULL, NULL, NULL, 0, NULL, NULL, NULL, '33', 'bioStar_33', 'bioStar_33', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEL4mxPW9IMVmUPdnF+2nEw/lr08f3Oh1Pipk98HHM3iBsQToiM2dDR2sw//clc+ejQ==', 'c46dcc05-4e5b-4d30-ab7a-fd435191c9bc', 'df9e76ef-67da-495f-9834-6b69fb93ae7b', NULL, 0, 0, NULL, 1, 0),
('9b847d30-ed55-478c-90e9-ec40a9771b22', 'Vương Tiến Mạnh', '/uploads/users/avatar_9b847d30-ed55-478c-90e9-ec40a9771b22.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462080', NULL, NULL, NULL, 0, NULL, NULL, NULL, '43', 'bioStar_43', 'bioStar_43', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECshY0NgQ/WPOyejAcq3nkrB1sYnLFHGBaYr0GGMePRj80KWU3izKjQl2cswMPMFIQ==', '7b0e7060-987f-4fc3-84a3-5e381528a2da', '96c103f3-1d06-4569-a83a-2e19a41028a8', NULL, 0, 0, NULL, 1, 0),
('b1b2e0ce-35e4-47f2-b446-c2bd518f8b65', 'Bac Itose', '/uploads/users/avatar_b1b2e0ce-35e4-47f2-b446-c2bd518f8b65.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462099', NULL, NULL, NULL, 0, NULL, NULL, NULL, '61', 'bioStar_61', 'bioStar_61', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFo3umguEqGP06ZN4+aUA+bNBjELF8XHw19TyxehKsRbb4fX0N1Y0yyV74SJWcV+xw==', '1cd45e30-568f-4605-9b9e-358366d6a2f1', '64eba4a5-cd21-41db-b67a-685f1984af63', NULL, 0, 0, NULL, 1, 0),
('b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e', 'Dinh (extreme)', '/uploads/users/avatar_b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462143', NULL, NULL, NULL, 0, NULL, NULL, NULL, '214', 'bioStar_214', 'bioStar_214', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJJyju0DAZrIOUM9Lym1gETBlPGwYOo2bd6QDBiACxsIntmCXatuK6Dmtr5T0US04Q==', '47e3d83f-a890-4b93-9fc9-36ee98b147c6', 'ab18a6a0-2130-4f69-8aae-76cb71eda612', NULL, 0, 0, NULL, 1, 0),
('b3f18097-e655-463b-90e3-5306577f4ad4', 'Nguyễn Thị Hà', '/uploads/users/avatar_b3f18097-e655-463b-90e3-5306577f4ad4.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462100', NULL, NULL, NULL, 0, NULL, NULL, NULL, '63', 'bioStar_63', 'bioStar_63', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELKzrktJFULgfDtjuerEsYdFI8Xf0gD0w0FfYB+C1knhRoYjBNywXx6B18Wr7DYCgg==', 'b8515c3e-ef6e-4ff1-8842-117e9bb79d23', '4e126932-b66b-41d1-9cda-206f9176473f', NULL, 0, 0, NULL, 1, 0),
('bdf0c99a-eba0-4d55-b511-1174238abfb1', 'Đỗ Thị Thúy Ngọc (fabbi)', '/uploads/users/avatar_bdf0c99a-eba0-4d55-b511-1174238abfb1.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462132', NULL, NULL, NULL, 0, NULL, NULL, NULL, '203', 'bioStar_203', 'bioStar_203', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIBWOWXJZKO1WMMhR/l2uyzH5aT7TTPBbtLFNqfuBBYZ677ZnW4VgkllyLd8ntGXKw==', '8c4f42dc-0bec-4baa-a099-a8004b23158f', 'a3589d31-beca-475b-9c54-100f9d538ef8', NULL, 0, 0, NULL, 1, 0),
('be581356-db88-4f33-832d-8a7c08d29bf1', 'Vi Van Hung', '/uploads/users/avatar_be581356-db88-4f33-832d-8a7c08d29bf1.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462119', NULL, NULL, NULL, 0, NULL, NULL, NULL, '101', 'bioStar_101', 'bioStar_101', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIII1dWsOkGI/VrcEuypmzH0hW5cBGlBq9pjpG2/E6BGN1HDeD/+BuYKfPO71X7Tqg==', '511eb408-fdb6-49e3-812d-fe1c112b49d4', '7cd42812-6477-4e20-b831-063fbb8ed97b', NULL, 0, 0, NULL, 1, 0),
('bea1371b-8efe-43a4-bb71-6a66d2424846', 'guess 8', '/uploads/users/avatar_bea1371b-8efe-43a4-bb71-6a66d2424846.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462117', NULL, NULL, NULL, 0, NULL, NULL, NULL, '95', 'bioStar_95', 'bioStar_95', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMnR5LYQrI2p7XT1pY4IOZ56JTN0DAHbWgvuo4gqu5Ai0lXqpiJCXFbjRDYAA0t6tA==', '8360f328-9827-440e-9875-1b3a74243adf', '9c52c042-5b7f-4b67-9cdd-e46f2c4a7d4d', NULL, 0, 0, NULL, 1, 0),
('c1cff8e1-e2bb-49b2-ac4f-601b97b9370f', 'Trần Anh Thư', '/uploads/users/avatar_c1cff8e1-e2bb-49b2-ac4f-601b97b9370f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.461821', NULL, NULL, NULL, 0, NULL, NULL, NULL, '2', 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEIunyA4EZINuCoSYH04OGrhck0xOikbV79iev5ZqPi+DJE8eBjpD6RjA9JnGL9NLLQ==', '782a27af-c013-458c-a085-3ced5b8875b2', '85cd20ee-3976-4bf4-8bbd-6a8486e815de', NULL, 0, 0, NULL, 1, 0),
('c243adb7-5461-4d14-b77b-6fe4d9589b3b', 'card6', '/uploads/users/avatar_c243adb7-5461-4d14-b77b-6fe4d9589b3b.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462152', NULL, NULL, NULL, 0, NULL, NULL, NULL, '125', 'bioStar_125', 'bioStar_125', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEG0Pr7ArsCiyEtZYZfekDYWOTn+iJoQoygHLgYRf83xb12Eqqd+OIvytNejgb2c69g==', '26358398-67f4-42da-979e-d3c1d8998ce1', '9416be65-8007-4cf6-984a-2f3987a0fb7d', NULL, 0, 0, NULL, 1, 0),
('c47d787d-4475-473e-82b5-a4f49783d815', 'Pham Quang Linh (VMO)', '/uploads/users/avatar_c47d787d-4475-473e-82b5-a4f49783d815.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462122', NULL, NULL, NULL, 0, NULL, NULL, NULL, '112', 'bioStar_112', 'bioStar_112', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKLOfMjLpDcfp9uKClCh852etcMahPML7Pf0DL7ME2Ew7ik7+OtSTWt0ONvUoopekw==', 'd31cbbfd-f418-45b3-bd2c-a3693e2b84af', '1a46cee4-db89-4211-8b32-fbb94110ea09', NULL, 0, 0, NULL, 1, 0),
('cc19c3ab-634d-4ced-92e5-64921cc0130a', 'card7', '/uploads/users/avatar_cc19c3ab-634d-4ced-92e5-64921cc0130a.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462152', NULL, NULL, NULL, 0, NULL, NULL, NULL, '126', 'bioStar_126', 'bioStar_126', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOL8uvyoVyWX5HoJys7vAryOJF2Ry/vQ7xlrAxr5CABP6eWG0YuAbXvJo4B3xH0JAw==', '6b89b1a4-6349-4d0d-b9ba-b7c3cd930d0f', 'a3b630ab-11a6-4bff-b87e-2cfa203c9f25', NULL, 0, 0, NULL, 1, 0),
('cf9f934c-b77c-4d87-be1e-cfd9bfed294a', 'Quynh (VMO)', '/uploads/users/avatar_cf9f934c-b77c-4d87-be1e-cfd9bfed294a.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462124', NULL, NULL, NULL, 0, NULL, NULL, NULL, '114', 'bioStar_114', 'bioStar_114', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEESM3mu0TAg6zQ/tz1s96gER8R7NX3jc3EDplOv9Kf9FZSlv5iE2KIHupQ4+kgeJsg==', 'cc4c75c7-962c-4456-aa1c-08ed9b389947', '1207d4c5-0fe7-4d1f-9f29-5897b33cddcf', NULL, 0, 0, NULL, 1, 0),
('d0228b1e-a029-4aac-9ae2-ae2b3d1beed5', 'Trieu anh Tuan Onsite', '/uploads/users/avatar_d0228b1e-a029-4aac-9ae2-ae2b3d1beed5.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462141', NULL, NULL, NULL, 0, NULL, NULL, NULL, '211', 'bioStar_211', 'bioStar_211', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDUNEsGzfCRinxohsUNaMMJhTfVW9L+WCu3qerAjv5SqrJsqhBjYikBPHbmutD1fKA==', '3253c7e6-e9f0-48e3-a128-07a3ff434bd7', 'fc66445a-7a56-4653-81aa-eabcba17c275', NULL, 0, 0, NULL, 1, 0),
('d4b59431-26c6-40cf-95df-8b996b955f9c', 'Irikura', '/uploads/users/avatar_d4b59431-26c6-40cf-95df-8b996b955f9c.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462125', NULL, NULL, NULL, 0, NULL, NULL, NULL, '117', 'bioStar_117', 'bioStar_117', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKojFnjDS44EwSEcywF/VYfFpPdDRl4tYKg5OWGt4zEki/IWwkASRwnO8T3cwJnSJQ==', '9306f81e-726e-48b4-80c6-9cd12c4a0111', 'a725ccbc-5d15-48c3-b2af-4abd04af684c', NULL, 0, 0, NULL, 1, 0),
('dde419af-4acf-4d3b-956c-f002f4d7428f', 'IMAI', '/uploads/users/avatar_dde419af-4acf-4d3b-956c-f002f4d7428f.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462098', NULL, NULL, NULL, 0, NULL, NULL, NULL, '59', 'bioStar_59', 'bioStar_59', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMozw7YQLtU1UhDvaLAiOlyCWRJIG9MxCZwHT5DROujR+izli1CNGCfOrN9t6w+Qyg==', '6c5d006f-b0e2-4e5d-a508-8626c61a369e', '5873ff70-e97a-4e8c-bd13-620f29b110f8', NULL, 0, 0, NULL, 1, 0),
('e72fa4c9-fbea-4da1-b746-e213b86f40cf', 'Card 1', '/uploads/users/avatar_e72fa4c9-fbea-4da1-b746-e213b86f40cf.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462146', NULL, NULL, NULL, 0, NULL, NULL, NULL, '120', 'bioStar_120', 'bioStar_120', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELgvmdnhHFceFMD7cO0WSSiIIIPDqC+jO9XY3tsFu+gez3Bi9L6SbuCYs3jeWhj4Ng==', '31de9b16-1269-4606-bc64-eb8b770ba226', '36900455-f7d9-4308-aa90-176c93f3947f', NULL, 0, 0, NULL, 1, 0),
('eaf94299-18df-4b4f-8064-588bafad951a', 'Nguyễn Việt Hùng', '/uploads/users/avatar_eaf94299-18df-4b4f-8064-588bafad951a.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462123', NULL, NULL, NULL, 0, NULL, NULL, NULL, '113', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEPMtXS7Ue2U9KQlwKI8owoTNqSWEonFqrgA9R/X57nT/AOVcS0nNTWoCH63YQ4Btrg==', '170ca0a9-566c-423c-9521-dfc27dd11ba7', 'eda3a720-db4f-4b7c-aef7-e381b6aed9b2', NULL, 0, 0, NULL, 1, 0),
('eb4c5837-ef0b-4fa9-905d-49d33c115932', 'Nguyễn Mạnh Phúc', '/uploads/users/avatar_eb4c5837-ef0b-4fa9-905d-49d33c115932.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462087', NULL, NULL, NULL, 0, NULL, NULL, NULL, '51', 'bioStar_51', 'bioStar_51', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHGOxDtmxyMoLuJabhpII48kTu5FGqPcBuIz0VsfWto922wpKOMx/4Eon56q1ts0ew==', 'aa8b4cdb-6b02-4953-91be-b975a26e93ae', 'cad2dadf-c4b8-42fe-ab1e-a2ef344e8249', NULL, 0, 0, NULL, 1, 0),
('ecd932bc-d7b6-4445-b822-b3e9fd2db248', 'card 2', '/uploads/users/avatar_ecd932bc-d7b6-4445-b822-b3e9fd2db248.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462149', NULL, NULL, NULL, 0, NULL, NULL, NULL, '121', 'bioStar_121', 'bioStar_121', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGfQJ1txlyiA1SrMAGcAsHlgjo381yduiS1rtCP8qDjCKJ6ZpBQYQzj3Wp47ZZaWHg==', 'd15d4995-0032-443e-ba2b-d4011de343e7', '598f1923-3ddb-4cf7-ae0c-b1b43ee023f3', NULL, 0, 0, NULL, 1, 0),
('ed5202b0-c42a-4548-b4c7-9c9c01ed5004', 'Trần Thị Phương Thảo', '/uploads/users/avatar_ed5202b0-c42a-4548-b4c7-9c9c01ed5004.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462128', NULL, NULL, NULL, 0, NULL, NULL, NULL, '200', 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEMQXcZwxT55+/rZnsmD9z+nPpluxlbTravtOXuGphskj5z/IboRDr6Oz/GGJFXNThg==', 'd746303c-e0c8-4ec9-96c3-81d2c0ba9d6d', '2fa2dc12-99bc-49ae-a07c-680230f37fb4', NULL, 0, 0, NULL, 1, 0),
('f3f518ed-d8f4-40b5-9126-0e015c63034b', 'Đặng Quang Khang', '/uploads/users/avatar_f3f518ed-d8f4-40b5-9126-0e015c63034b.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462100', NULL, NULL, NULL, 0, NULL, NULL, NULL, '68', 'bioStar_68', 'bioStar_68', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEI+BMfCcsmQFhpEhifoR9EARUKBLR44WpNpoGLY88E3zimaoUolYKJ22G1RS7VaKAA==', 'd0c11156-7af9-47b6-8970-cfe16bedde6b', '7a2a62de-44fb-4e8f-9af6-2cccd6c7c5d3', NULL, 0, 0, NULL, 1, 0),
('f53a83fd-f6ab-4f6d-811e-cbc1f85403d9', 'Nomura', '/uploads/users/avatar_f53a83fd-f6ab-4f6d-811e-cbc1f85403d9.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462088', NULL, NULL, NULL, 0, NULL, NULL, NULL, '52', 'bioStar_52', 'bioStar_52', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMm6j6p0fWmrrF5TaZJPuKP5CE1Y8trbvN4HBp7og5qUYkHDk+0w4zKFEQaR0yJ8fw==', 'ade8da03-3a55-4359-a01f-bec8f58b0e47', '14377333-fda1-4663-8214-5b3e0444c5cd', NULL, 0, 0, NULL, 1, 0),
('f727cb71-f9df-41e8-ae10-5a1114399637', 'Nguyễn Tiến Thành (fabbi)', '/uploads/users/avatar_f727cb71-f9df-41e8-ae10-5a1114399637.png', NULL, 1, 0, 0, '2025-05-21 09:08:35.462137', NULL, NULL, NULL, 0, NULL, NULL, NULL, '204', 'bioStar_204', 'bioStar_204', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOrzD///j9R7oKJHP8MDvZ5zsSeHfJWnAw7wWFSmnN3pVl0bkarX4w/ZXKYkH61Ofw==', '1d772f77-af0a-44ee-a57b-4f240433eb30', '891df9ba-4a9f-40bf-9b93-2122d62f25ea', NULL, 0, 0, NULL, 1, 0),
('fd3b0f2b-3dc0-462f-b80b-d70128570551', 'Administrator', '/uploads/users/avatar_fd3b0f2b-3dc0-462f-b80b-d70128570551.png', 0, 1, 0, 0, '2025-05-21 09:07:36.544178', NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 'admin@admin.com', 'ADMIN@ADMIN.COM', 'admin@admin.com', 'ADMIN@ADMIN.COM', 1, 'AQAAAAIAAYagAAAAEGnjA9PsOiM6Iqo9J0tPpSul7JQ61U1/uOYhHdryW9nfzaeKrvYhk0euqC4RUtgmHQ==', 'QQE3PL2GVOZL2372ZFFNW2PUQASH6ACQ', '1ae4e198-49c1-4c93-b7b2-3e11676b64ed', NULL, 0, 0, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_user_claims`
--

CREATE TABLE `asp_net_user_claims` (
  `Id` int(11) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_user_logins`
--

CREATE TABLE `asp_net_user_logins` (
  `LoginProvider` varchar(255) NOT NULL,
  `ProviderKey` varchar(255) NOT NULL,
  `ProviderDisplayName` longtext,
  `UserId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_user_roles`
--

CREATE TABLE `asp_net_user_roles` (
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `RoleId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asp_net_user_roles`
--

INSERT INTO `asp_net_user_roles` (`UserId`, `RoleId`) VALUES
('fd3b0f2b-3dc0-462f-b80b-d70128570551', '08dd9831-6632-4594-8e60-76b0cbcb8e67');

-- --------------------------------------------------------

--
-- Table structure for table `asp_net_user_tokens`
--

CREATE TABLE `asp_net_user_tokens` (
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `LoginProvider` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Value` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Status` int(11) NOT NULL,
  `AssignedUserId` char(36) CHARACTER SET ascii DEFAULT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `device_categories`
--

CREATE TABLE `device_categories` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `device_device_category`
--

CREATE TABLE `device_device_category` (
  `DeviceCategoriesId` int(11) NOT NULL,
  `DevicesId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `Id` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Message` varchar(255) NOT NULL,
  `Date` datetime(6) NOT NULL,
  `Category` int(11) NOT NULL,
  `RelatedEntityId` longtext,
  `IsRead` tinyint(1) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `StartDate` datetime(6) DEFAULT NULL,
  `EndDate` datetime(6) DEFAULT NULL,
  `Status` int(11) NOT NULL,
  `TeamId` int(11) DEFAULT NULL,
  `ManagerId` char(36) CHARACTER SET ascii NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `project_user`
--

CREATE TABLE `project_user` (
  `MembersId` char(36) CHARACTER SET ascii NOT NULL,
  `ProjectsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `Id` int(11) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Expires` datetime(6) NOT NULL,
  `RememberMe` tinyint(1) NOT NULL,
  `Created` datetime(6) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `SecurityStamp` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `refresh_tokens`
--

INSERT INTO `refresh_tokens` (`Id`, `Token`, `Expires`, `RememberMe`, `Created`, `UserId`, `SecurityStamp`) VALUES
(4, 'N0sZgvAJTgG37fC+EfhAcUNgdFa74yOFQmPLIZNsCmE=', '2025-05-28 11:22:28.920969', 1, '2025-05-21 11:22:28.921317', 'fd3b0f2b-3dc0-462f-b80b-d70128570551', 'QQE3PL2GVOZL2372ZFFNW2PUQASH6ACQ');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `Id` int(11) NOT NULL,
  `Date` datetime(6) NOT NULL,
  `RequestType` int(11) NOT NULL,
  `Reason` varchar(500) NOT NULL,
  `Status` int(11) NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `ApprovedId` char(36) CHARACTER SET ascii NOT NULL,
  `TimesheetId` char(36) CHARACTER SET ascii DEFAULT NULL,
  `BreakStartDate` datetime(6) DEFAULT NULL,
  `BreakEndDate` datetime(6) DEFAULT NULL,
  `CheckIn` datetime(6) DEFAULT NULL,
  `CheckOut` datetime(6) DEFAULT NULL,
  `TimesheetAdjustmentRequest_BreakStartDate` datetime(6) DEFAULT NULL,
  `TimesheetAdjustmentRequest_BreakEndDate` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `CompletedProjects` int(11) NOT NULL,
  `ActiveProjects` int(11) NOT NULL,
  `ManagerId` char(36) CHARACTER SET ascii DEFAULT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`Id`, `Name`, `Description`, `CompletedProjects`, `ActiveProjects`, `ManagerId`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `LastModifiedBy`) VALUES
(1, 'STNet', NULL, 0, 0, NULL, '0001-01-01 00:00:00.000000', NULL, NULL, NULL),
(2, 'Msr', NULL, 0, 0, NULL, '0001-01-01 00:00:00.000000', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `timesheets`
--

CREATE TABLE `timesheets` (
  `Id` char(36) CHARACTER SET ascii NOT NULL,
  `Date` datetime(6) NOT NULL,
  `StartTime` datetime(6) DEFAULT NULL,
  `EndTime` datetime(6) DEFAULT NULL,
  `WorkedMinutes` int(11) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timesheets`
--

INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd9848-84d7-46dc-8a12-56d6bc40e1c5', '2025-05-21 00:00:00.000000', '2025-05-21 07:49:34.000000', '2025-05-21 16:18:59.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd9848-c4e5-4b5c-8147-19ed46114d9b', '2025-05-21 00:00:00.000000', '2025-05-21 08:05:50.000000', '2025-05-21 17:07:43.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd984a-1c66-4878-8ce4-94eb7de6380b', '2025-05-21 00:00:00.000000', '2025-05-21 08:26:48.000000', '2025-05-21 16:42:00.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd984b-55a6-460c-87dd-9ef78bcc827d', '2025-05-21 00:00:00.000000', '2025-05-21 07:58:56.000000', '2025-05-21 17:05:44.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd984c-3275-4404-85d6-6d7120f15f05', '2025-05-21 00:00:00.000000', '2025-05-21 08:23:07.000000', '2025-05-21 17:59:53.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd984c-3f30-4907-8bb0-3452bd6cc69b', '2025-05-21 00:00:00.000000', '2025-05-21 08:46:05.000000', '2025-05-21 18:19:00.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd984c-e6f2-4cdb-8962-800f7ca3e987', '2025-05-21 00:00:00.000000', '2025-05-21 08:06:49.000000', '2025-05-21 17:21:49.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd984d-4d16-4746-8f8e-478b01a63bb2', '2025-05-21 00:00:00.000000', '2025-05-21 08:30:01.000000', '2025-05-21 18:03:41.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd984e-bb6d-4a42-8cbb-7b8adcd83515', '2025-05-21 00:00:00.000000', '2025-05-21 08:09:47.000000', '2025-05-21 17:54:25.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd984f-68f3-4f94-8c1b-4dff0301b9cd', '2025-05-21 00:00:00.000000', '2025-05-21 08:10:10.000000', '2025-05-21 17:48:14.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd984f-cb4a-4676-837b-c30f3330493b', '2025-05-21 00:00:00.000000', '2025-05-21 08:53:59.000000', '2025-05-21 17:57:52.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd9850-1414-43c7-8490-85064ae323e4', '2025-05-21 00:00:00.000000', '2025-05-21 08:17:54.000000', '2025-05-21 17:49:49.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd9851-2071-4ec7-8643-5a063647e10f', '2025-05-21 00:00:00.000000', '2025-05-21 07:45:04.000000', '2025-05-21 17:31:12.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd9851-e6c1-4001-8209-bb810886ec6f', '2025-05-21 00:00:00.000000', '2025-05-21 08:36:51.000000', '2025-05-21 18:13:43.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd9851-fcf9-4d7f-8bc4-ad16165fe975', '2025-05-21 00:00:00.000000', '2025-05-21 07:57:24.000000', '2025-05-21 17:32:21.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd9852-e268-43b3-8452-a2cd6e7ca02d', '2025-05-21 00:00:00.000000', '2025-05-21 08:18:27.000000', '2025-05-21 18:15:03.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd9852-f5b7-45c8-8407-2f0d1a93e058', '2025-05-21 00:00:00.000000', '2025-05-21 08:42:39.000000', '2025-05-21 17:36:43.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd9853-196b-42c1-804c-d66c105f6dc6', '2025-05-21 00:00:00.000000', '2025-05-21 07:59:15.000000', '2025-05-21 17:34:46.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd9853-578a-4541-8da1-f64afc1f96ba', '2025-05-21 00:00:00.000000', '2025-05-21 07:57:46.000000', '2025-05-21 17:36:30.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd9854-3472-4566-8957-a006739893e2', '2025-05-21 00:00:00.000000', '2025-05-21 07:25:17.000000', '2025-05-21 17:42:34.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd9854-c91d-4290-8f5c-c1b4f08e6d41', '2025-05-21 00:00:00.000000', '2025-05-21 08:41:02.000000', '2025-05-21 17:46:50.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd9854-e046-4b3d-8d26-474a7b6f0b4c', '2025-05-21 00:00:00.000000', '2025-05-21 07:58:19.000000', '2025-05-21 17:47:29.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd9855-5637-4c65-8865-f0e36caf2fad', '2025-05-21 00:00:00.000000', '2025-05-21 08:18:59.000000', '2025-05-21 17:50:47.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd9856-a9e7-4f8a-88f9-9c80745b1371', '2025-05-21 00:00:00.000000', '2025-05-21 09:04:27.000000', '2025-05-21 18:11:30.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd9856-f27c-498b-8976-35576731ca72', '2025-05-21 00:00:00.000000', '2025-05-21 09:55:40.000000', '2025-05-21 18:02:18.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd9857-b035-4a4e-894c-2336301d5600', '2025-05-21 00:00:00.000000', '2025-05-21 08:06:35.000000', '2025-05-21 18:07:37.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd9858-d1e6-4c85-88ac-e611958d0511', '2025-05-21 00:00:00.000000', '2025-05-21 08:17:30.000000', '2025-05-21 18:15:43.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd9859-c70f-463c-8f67-3d60f2cf828b', '2025-05-21 00:00:00.000000', '2025-05-21 08:29:51.000000', '2025-05-21 18:22:30.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4810-4f48-8a06-21312bfb2b55', '2025-05-05 00:00:00.000000', '2025-05-05 07:24:24.000000', '2025-05-05 17:38:13.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4811-4065-8c21-3235bee029c1', '2025-05-05 00:00:00.000000', '2025-05-05 07:32:17.000000', '2025-05-05 17:34:20.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-4811-40d5-8f3a-e517691d7dc9', '2025-05-05 00:00:00.000000', '2025-05-05 07:43:47.000000', '2025-05-05 18:21:07.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4811-4119-8a1b-351b4ef5ae0a', '2025-05-05 00:00:00.000000', '2025-05-05 07:47:09.000000', '2025-05-05 16:29:15.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4811-4166-806d-3a64421ae063', '2025-05-05 00:00:00.000000', '2025-05-05 07:48:31.000000', '2025-05-05 16:25:53.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4811-41ae-8f2b-a9e9611d1dd6', '2025-05-05 00:00:00.000000', '2025-05-05 07:59:52.000000', '2025-05-05 17:26:10.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4811-41f2-8c6c-bec17c39946d', '2025-05-05 00:00:00.000000', '2025-05-05 08:02:02.000000', '2025-05-05 17:45:13.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4811-422c-8bfd-05ce433e73d0', '2025-05-05 00:00:00.000000', '2025-05-05 08:08:51.000000', '2025-05-05 17:18:42.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4811-425a-8121-26cc405dd917', '2025-05-05 00:00:00.000000', '2025-05-05 08:10:00.000000', '2025-05-05 17:52:13.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4811-4287-828e-6165b95ae495', '2025-05-05 00:00:00.000000', '2025-05-05 08:10:04.000000', '2025-05-05 11:35:07.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4811-4383-8d29-7801ca4cef98', '2025-05-05 00:00:00.000000', '2025-05-05 08:10:41.000000', '2025-05-05 17:47:08.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4811-448d-83f2-54c172345ee0', '2025-05-05 00:00:00.000000', '2025-05-05 08:11:51.000000', '2025-05-05 13:53:20.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4811-44f3-80f5-9b47d5896ab1', '2025-05-05 00:00:00.000000', '2025-05-05 08:12:04.000000', '2025-05-05 17:45:47.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4811-4539-8234-880a2b238f14', '2025-05-05 00:00:00.000000', '2025-05-05 08:13:53.000000', '2025-05-05 17:47:42.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4811-45b6-8230-d2a7c71c7af3', '2025-05-05 00:00:00.000000', '2025-05-05 08:15:25.000000', '2025-05-05 18:18:05.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4811-4718-8e9a-67c64fb0303d', '2025-05-05 00:00:00.000000', '2025-05-05 08:15:59.000000', '2025-05-05 17:55:12.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4811-47d9-8107-016bf673fb50', '2025-05-05 00:00:00.000000', '2025-05-05 08:16:24.000000', '2025-05-05 17:53:14.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4811-482b-8296-cbc4ac3749ba', '2025-05-05 00:00:00.000000', '2025-05-05 08:17:28.000000', '2025-05-05 17:52:47.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4811-4905-80f2-f899edea1cf7', '2025-05-05 00:00:00.000000', '2025-05-05 08:20:37.000000', '2025-05-05 17:27:37.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4811-4987-8764-4247cb8cb052', '2025-05-05 00:00:00.000000', '2025-05-05 08:21:28.000000', '2025-05-05 17:56:04.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4811-4a7b-8e42-384a511b0a40', '2025-05-05 00:00:00.000000', '2025-05-05 08:25:29.000000', '2025-05-05 17:38:50.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4811-4b02-8592-0f8db8e9c7e8', '2025-05-05 00:00:00.000000', '2025-05-05 08:35:20.000000', '2025-05-05 20:21:01.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4811-4bdb-8ea4-0778fccaccf8', '2025-05-05 00:00:00.000000', '2025-05-05 08:36:40.000000', '2025-05-05 19:06:40.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4811-4ebc-8cb0-1852153469f2', '2025-05-05 00:00:00.000000', '2025-05-05 08:38:11.000000', '2025-05-05 18:21:25.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4811-4f1b-846e-dedd5e77e704', '2025-05-05 00:00:00.000000', '2025-05-05 08:38:50.000000', '2025-05-05 17:54:42.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4812-40a6-84b3-1c5e66e12ea2', '2025-05-05 00:00:00.000000', '2025-05-05 08:43:05.000000', '2025-05-05 18:25:59.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4812-4194-8b72-058d0c00e67e', '2025-05-05 00:00:00.000000', '2025-05-05 08:45:23.000000', '2025-05-05 17:34:59.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4812-41ef-8b98-23799325d0f5', '2025-05-05 00:00:00.000000', '2025-05-05 08:52:10.000000', '2025-05-05 18:29:49.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-4812-42a7-8d14-17fbe6f2d9e1', '2025-05-05 00:00:00.000000', '2025-05-05 08:56:08.000000', '2025-05-05 17:57:43.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4812-43a6-831e-22f5a8b1686e', '2025-05-05 00:00:00.000000', '2025-05-05 08:58:55.000000', '2025-05-05 17:46:36.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4812-4434-812e-2ddeb502a6c2', '2025-05-05 00:00:00.000000', '2025-05-05 09:59:02.000000', '2025-05-05 18:34:16.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4812-4511-8422-01990f068189', '2025-05-05 00:00:00.000000', '2025-05-05 10:44:53.000000', '2025-05-05 17:55:54.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4812-458b-8940-03a9fafa7b3f', '2025-05-05 00:00:00.000000', '2025-05-05 10:53:35.000000', '2025-05-05 17:21:47.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4812-45cf-89ff-25e3297d7f28', '2025-05-06 00:00:00.000000', '2025-05-06 07:31:43.000000', '2025-05-06 13:09:23.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-4812-4603-815e-a161b571e2d4', '2025-05-06 00:00:00.000000', '2025-05-06 07:40:02.000000', '2025-05-06 15:38:32.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4812-4676-8747-7910f2f96808', '2025-05-06 00:00:00.000000', '2025-05-06 07:43:37.000000', '2025-05-06 16:27:12.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4812-46bc-8935-a59a979caaaa', '2025-05-06 00:00:00.000000', '2025-05-06 07:48:53.000000', '2025-05-06 17:38:52.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4812-46fb-864e-860f9cd59f5a', '2025-05-06 00:00:00.000000', '2025-05-06 07:51:20.000000', '2025-05-06 17:36:09.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4812-4727-88c5-cc1bffc1a8a6', '2025-05-06 00:00:00.000000', '2025-05-06 07:52:25.000000', '2025-05-06 15:00:04.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4812-4752-8c9c-638b8f8bf94d', '2025-05-06 00:00:00.000000', '2025-05-06 07:56:12.000000', '2025-05-06 16:58:00.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4812-47a9-8ae8-ca71bb3ea57e', '2025-05-06 00:00:00.000000', '2025-05-06 07:57:05.000000', '2025-05-06 17:35:27.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4812-4804-8926-3cefa950fee9', '2025-05-06 00:00:00.000000', '2025-05-06 07:58:13.000000', '2025-05-06 18:24:13.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4812-4835-8686-dd7b1093edcf', '2025-05-06 00:00:00.000000', '2025-05-06 07:59:01.000000', '2025-05-06 17:37:45.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4812-4864-8726-058d2d965556', '2025-05-06 00:00:00.000000', '2025-05-06 08:01:05.000000', '2025-05-06 17:34:25.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4812-4895-809a-3708eabdaebf', '2025-05-06 00:00:00.000000', '2025-05-06 08:01:32.000000', '2025-05-06 15:22:38.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4812-491a-835e-d559eb1bbeda', '2025-05-06 00:00:00.000000', '2025-05-06 08:07:43.000000', '2025-05-06 16:41:23.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4812-4951-8337-10898f13a646', '2025-05-06 00:00:00.000000', '2025-05-06 08:08:15.000000', '2025-05-06 17:42:22.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4812-498c-8be8-f994b5350e30', '2025-05-06 00:00:00.000000', '2025-05-06 08:11:06.000000', '2025-05-06 17:45:37.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4812-49ad-8242-80938f680c74', '2025-05-06 00:00:00.000000', '2025-05-06 08:14:37.000000', '2025-05-06 17:23:15.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4812-49e7-832b-eaa4d8e57561', '2025-05-06 00:00:00.000000', '2025-05-06 08:15:23.000000', '2025-05-06 18:01:12.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4812-4a17-8c2e-63392235f270', '2025-05-06 00:00:00.000000', '2025-05-06 08:16:15.000000', '2025-05-06 17:48:26.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4812-4a48-8934-05a7f3dcaac6', '2025-05-06 00:00:00.000000', '2025-05-06 08:16:59.000000', '2025-05-06 17:52:51.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4812-4a7f-8253-413d4d2f0f55', '2025-05-06 00:00:00.000000', '2025-05-06 08:18:30.000000', '2025-05-06 17:52:11.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4812-4aca-86ef-62d044c9df61', '2025-05-06 00:00:00.000000', '2025-05-06 08:19:20.000000', '2025-05-06 17:55:22.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4812-4b11-8189-32ba8c7303a4', '2025-05-06 00:00:00.000000', '2025-05-06 08:20:48.000000', '2025-05-06 17:54:54.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4812-4b40-8838-2401c0a49b4d', '2025-05-06 00:00:00.000000', '2025-05-06 08:22:32.000000', '2025-05-06 16:57:07.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4812-4b79-897c-95ca19ae1e87', '2025-05-06 00:00:00.000000', '2025-05-06 08:24:01.000000', '2025-05-06 17:49:18.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4812-4bba-86d5-ba165ed74ccf', '2025-05-06 00:00:00.000000', '2025-05-06 08:29:10.000000', '2025-05-06 18:02:07.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-4812-4bf3-836f-bcb2a310c267', '2025-05-06 00:00:00.000000', '2025-05-06 08:29:43.000000', '2025-05-06 18:03:50.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4812-4c17-8591-3610c69962c2', '2025-05-06 00:00:00.000000', '2025-05-06 08:38:12.000000', '2025-05-06 14:36:39.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4812-4c3b-841e-7f7c3e013026', '2025-05-06 00:00:00.000000', '2025-05-06 08:41:31.000000', '2025-05-06 18:33:17.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4812-4c63-8192-86efac492066', '2025-05-06 00:00:00.000000', '2025-05-06 08:42:14.000000', '2025-05-06 18:18:13.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4812-4c91-89f0-43fea1200f35', '2025-05-06 00:00:00.000000', '2025-05-06 08:48:08.000000', '2025-05-06 18:54:20.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4812-4cc9-8268-038927682773', '2025-05-06 00:00:00.000000', '2025-05-06 08:50:30.000000', '2025-05-06 18:15:28.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4812-4d02-8643-ed39ab1ff95f', '2025-05-06 00:00:00.000000', '2025-05-06 08:50:40.000000', '2025-05-06 18:31:11.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4812-4d35-84f9-3456905aaea7', '2025-05-06 00:00:00.000000', '2025-05-06 09:15:48.000000', '2025-05-06 18:34:38.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4812-4d5c-8f61-a2c04d6893e5', '2025-05-06 00:00:00.000000', '2025-05-06 10:28:43.000000', '2025-05-06 17:11:37.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4812-4d86-87d9-d6fc3b215433', '2025-05-06 00:00:00.000000', '2025-05-06 11:27:20.000000', '2025-05-06 17:06:06.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4812-4db2-8e69-ebf99821b54e', '2025-05-07 00:00:00.000000', '2025-05-07 07:24:17.000000', '2025-05-07 17:34:25.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4812-4df8-83b0-82fe8cf3b34c', '2025-05-07 00:00:00.000000', '2025-05-07 07:36:39.000000', '2025-05-07 17:35:14.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-4812-4eac-807f-3a13dd62ba47', '2025-05-07 00:00:00.000000', '2025-05-07 07:41:10.000000', '2025-05-07 17:34:05.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4812-4f4c-8434-96a5a7651e0a', '2025-05-07 00:00:00.000000', '2025-05-07 07:44:39.000000', '2025-05-07 18:11:13.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4812-4ff1-8790-0b6df183fbed', '2025-05-07 00:00:00.000000', '2025-05-07 07:44:57.000000', '2025-05-07 17:43:52.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4813-4053-8792-d1aec8aa7f53', '2025-05-07 00:00:00.000000', '2025-05-07 07:49:26.000000', '2025-05-07 17:33:04.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4813-4092-8bba-9f89809de585', '2025-05-07 00:00:00.000000', '2025-05-07 07:52:21.000000', '2025-05-07 17:30:25.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4813-40c7-8997-cf37f0f248e8', '2025-05-07 00:00:00.000000', '2025-05-07 07:53:47.000000', '2025-05-07 16:38:03.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4813-40ee-8d27-47debc5e255b', '2025-05-07 00:00:00.000000', '2025-05-07 07:54:52.000000', '2025-05-07 17:12:10.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4813-416b-8165-85c78366de8f', '2025-05-07 00:00:00.000000', '2025-05-07 07:58:45.000000', '2025-05-07 17:26:56.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4813-4212-8888-88bcba50d70b', '2025-05-07 00:00:00.000000', '2025-05-07 07:59:42.000000', '2025-05-07 17:35:25.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4813-42a6-8fba-902cbe21f71e', '2025-05-07 00:00:00.000000', '2025-05-07 08:00:01.000000', '2025-05-07 16:04:53.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4813-4342-8d6f-cd33681f57ef', '2025-05-07 00:00:00.000000', '2025-05-07 08:00:34.000000', '2025-05-07 17:38:53.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4813-4391-8085-74710c25f14a', '2025-05-07 00:00:00.000000', '2025-05-07 08:01:48.000000', '2025-05-07 17:01:50.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4813-43e9-8cd9-a19c1ad02db5', '2025-05-07 00:00:00.000000', '2025-05-07 08:02:57.000000', '2025-05-07 17:21:21.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4813-4478-8607-ff0cb4850077', '2025-05-07 00:00:00.000000', '2025-05-07 08:06:27.000000', '2025-05-07 19:04:49.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4813-44e0-843b-93b7de740d13', '2025-05-07 00:00:00.000000', '2025-05-07 08:07:36.000000', '2025-05-07 14:21:54.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4813-4532-81a1-666c41092928', '2025-05-07 00:00:00.000000', '2025-05-07 08:08:49.000000', '2025-05-07 17:41:01.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-4813-456c-8b47-83a99388e0af', '2025-05-07 00:00:00.000000', '2025-05-07 08:09:21.000000', '2025-05-07 16:57:08.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4813-45a5-8798-d47031175a3e', '2025-05-07 00:00:00.000000', '2025-05-07 08:10:01.000000', '2025-05-07 17:42:41.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4813-45d1-8b8f-f08a19359b85', '2025-05-07 00:00:00.000000', '2025-05-07 08:11:10.000000', '2025-05-07 17:54:11.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4813-45f7-87ee-2d06e0d70478', '2025-05-07 00:00:00.000000', '2025-05-07 08:13:14.000000', '2025-05-07 18:32:35.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4813-462c-8486-daa605f02394', '2025-05-07 00:00:00.000000', '2025-05-07 08:17:41.000000', '2025-05-07 17:52:03.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4813-4667-8069-2df4cc01e1e0', '2025-05-07 00:00:00.000000', '2025-05-07 08:18:46.000000', '2025-05-07 17:55:13.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4813-46bb-8a44-5e5ac93913ae', '2025-05-07 00:00:00.000000', '2025-05-07 08:20:08.000000', '2025-05-07 17:51:43.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4813-46ff-838e-c6f3cd16e1f0', '2025-05-07 00:00:00.000000', '2025-05-07 08:23:12.000000', '2025-05-07 17:54:44.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4813-474c-8384-7b65a1d4ecd1', '2025-05-07 00:00:00.000000', '2025-05-07 08:23:46.000000', '2025-05-07 18:28:18.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-4813-4780-8d6d-c13923159de0', '2025-05-07 00:00:00.000000', '2025-05-07 08:32:37.000000', '2025-05-07 17:16:05.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4813-47ad-8769-21f0b528fc53', '2025-05-07 00:00:00.000000', '2025-05-07 08:51:10.000000', '2025-05-07 18:42:15.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4813-47e3-8561-546105c11f90', '2025-05-07 00:00:00.000000', '2025-05-07 08:52:56.000000', '2025-05-07 18:04:03.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4813-4823-8b66-a2579f73e29f', '2025-05-07 00:00:00.000000', '2025-05-07 08:58:45.000000', '2025-05-07 18:08:30.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4813-486e-8c1f-ef705a12830a', '2025-05-07 00:00:00.000000', '2025-05-07 09:27:44.000000', '2025-05-07 16:59:02.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4813-490b-8e0f-4f30794c056a', '2025-05-07 00:00:00.000000', '2025-05-07 09:42:27.000000', '2025-05-07 18:32:55.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4813-4952-8cd7-112f886cbf04', '2025-05-07 00:00:00.000000', '2025-05-07 10:03:27.000000', '2025-05-07 17:13:26.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4813-497f-8333-bf18e9c94924', '2025-05-07 00:00:00.000000', '2025-05-07 11:24:32.000000', '2025-05-07 17:57:14.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4813-49b3-8f9f-f5ce4158395f', '2025-05-07 00:00:00.000000', '2025-05-07 13:21:45.000000', '2025-05-07 18:31:20.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4813-4b38-8929-c2f7390e29c2', '2025-05-08 00:00:00.000000', '2025-05-08 07:26:26.000000', '2025-05-08 16:18:49.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4813-4b7d-89ff-145aa745f8af', '2025-05-08 00:00:00.000000', '2025-05-08 07:29:29.000000', '2025-05-08 16:49:04.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4813-4bbf-89de-8de637488378', '2025-05-08 00:00:00.000000', '2025-05-08 07:31:00.000000', '2025-05-08 17:36:17.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4813-4bec-8b3f-7a004e9d601c', '2025-05-08 00:00:00.000000', '2025-05-08 07:41:33.000000', '2025-05-08 18:24:21.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4813-4c10-8dc2-b5ee080abd16', '2025-05-08 00:00:00.000000', '2025-05-08 07:51:30.000000', '2025-05-08 17:34:17.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4813-4c36-8ffe-2bedeca0f7a7', '2025-05-08 00:00:00.000000', '2025-05-08 07:52:26.000000', '2025-05-08 15:31:46.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4813-4c5e-8bca-5004709a5189', '2025-05-08 00:00:00.000000', '2025-05-08 07:56:16.000000', '2025-05-08 16:42:35.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-4813-4d42-80fc-b020ea3cc3ca', '2025-05-08 00:00:00.000000', '2025-05-08 07:58:45.000000', '2025-05-08 17:38:58.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4813-4e3b-83dc-77ca986bea4b', '2025-05-08 00:00:00.000000', '2025-05-08 08:02:14.000000', '2025-05-08 18:17:42.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4813-4ed3-816a-08880beb4cf1', '2025-05-08 00:00:00.000000', '2025-05-08 08:02:53.000000', '2025-05-08 16:00:38.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4813-4fc7-8135-bff729031220', '2025-05-08 00:00:00.000000', '2025-05-08 08:04:50.000000', '2025-05-08 17:46:25.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4814-4008-84c7-5004107f3f72', '2025-05-08 00:00:00.000000', '2025-05-08 08:08:44.000000', '2025-05-08 17:14:00.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4814-4053-8dde-5e81a90c4653', '2025-05-08 00:00:00.000000', '2025-05-08 08:09:15.000000', '2025-05-08 20:44:02.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4814-409b-8d47-ef36d5eb258a', '2025-05-08 00:00:00.000000', '2025-05-08 08:09:49.000000', '2025-05-08 14:38:03.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4814-40c7-8081-94fd94deb383', '2025-05-08 00:00:00.000000', '2025-05-08 08:10:13.000000', '2025-05-08 18:13:46.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4814-4150-82aa-81207ea01023', '2025-05-08 00:00:00.000000', '2025-05-08 08:12:16.000000', '2025-05-08 17:48:18.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4814-41a7-8dca-5da6c034223e', '2025-05-08 00:00:00.000000', '2025-05-08 08:14:10.000000', '2025-05-08 17:49:33.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4814-4214-87b5-511daa724b16', '2025-05-08 00:00:00.000000', '2025-05-08 08:16:32.000000', '2025-05-08 18:14:52.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4814-429a-8b8d-459eb6616210', '2025-05-08 00:00:00.000000', '2025-05-08 08:18:07.000000', '2025-05-08 17:53:10.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4814-4503-80aa-f178c8c3d204', '2025-05-08 00:00:00.000000', '2025-05-08 08:21:13.000000', '2025-05-08 17:55:03.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4814-46d1-850b-376322e3f030', '2025-05-08 00:00:00.000000', '2025-05-08 08:21:26.000000', '2025-05-08 18:14:09.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4814-4857-86fc-1990410ab196', '2025-05-08 00:00:00.000000', '2025-05-08 08:24:22.000000', '2025-05-08 18:25:35.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4814-4894-8361-ab876c99b959', '2025-05-08 00:00:00.000000', '2025-05-08 08:27:37.000000', '2025-05-08 18:01:16.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4814-48b4-8c72-85bd161a1333', '2025-05-08 00:00:00.000000', '2025-05-08 08:37:09.000000', '2025-05-08 19:00:13.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4814-48e3-83e2-8f915aa60303', '2025-05-08 00:00:00.000000', '2025-05-08 08:38:33.000000', '2025-05-08 17:31:40.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4814-49d2-8760-beb0c819dd52', '2025-05-08 00:00:00.000000', '2025-05-08 08:42:56.000000', '2025-05-08 18:21:50.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4814-4a23-8552-335d557ebdca', '2025-05-08 00:00:00.000000', '2025-05-08 08:50:39.000000', '2025-05-08 14:35:03.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4814-4a53-808a-9dae86d9e882', '2025-05-08 00:00:00.000000', '2025-05-08 08:51:20.000000', '2025-05-08 17:17:09.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4814-4a86-8958-6396c2d24c43', '2025-05-08 00:00:00.000000', '2025-05-08 08:54:28.000000', '2025-05-08 18:01:48.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4814-4b31-864e-f8c38d049215', '2025-05-08 00:00:00.000000', '2025-05-08 08:58:06.000000', '2025-05-08 18:31:37.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4814-4b82-8701-660536fad40e', '2025-05-08 00:00:00.000000', '2025-05-08 09:04:17.000000', '2025-05-08 18:35:33.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4814-4c50-82b3-3822f26fbcab', '2025-05-08 00:00:00.000000', '2025-05-08 09:38:57.000000', '2025-05-08 17:08:29.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4814-4cab-84da-c6eb03d948da', '2025-05-08 00:00:00.000000', '2025-05-08 10:12:54.000000', '2025-05-08 18:35:46.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481a-4395-871d-9965e1e9a634', '2025-05-08 00:00:00.000000', '2025-05-08 10:58:42.000000', '2025-05-08 17:32:28.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481a-4412-89d8-b469215873ab', '2025-05-08 00:00:00.000000', '2025-05-08 11:07:52.000000', '2025-05-08 17:22:56.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481a-443a-8e8f-46f89d4b37ba', '2025-05-09 00:00:00.000000', '2025-05-09 07:25:37.000000', '2025-05-09 16:14:28.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481a-445e-8464-ed273af94b44', '2025-05-09 00:00:00.000000', '2025-05-09 07:27:43.000000', '2025-05-09 17:46:44.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481a-447d-8fcd-d5fc0ecebfb4', '2025-05-09 00:00:00.000000', '2025-05-09 07:48:39.000000', '2025-05-09 15:25:07.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-481a-449d-87f4-b715fce93152', '2025-05-09 00:00:00.000000', '2025-05-09 07:51:11.000000', '2025-05-09 16:01:41.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-481a-44bb-85d3-cdcaad015ddb', '2025-05-09 00:00:00.000000', '2025-05-09 07:52:29.000000', '2025-05-09 15:17:30.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-481a-44d7-8df5-7c70d8cad420', '2025-05-09 00:00:00.000000', '2025-05-09 07:55:20.000000', '2025-05-09 16:06:46.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-481a-44f6-88d7-fd95c88faca8', '2025-05-09 00:00:00.000000', '2025-05-09 07:55:47.000000', '2025-05-09 15:11:02.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481a-4513-85bf-5fee6de50dae', '2025-05-09 00:00:00.000000', '2025-05-09 08:00:31.000000', '2025-05-09 15:35:06.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-481a-452f-8f60-fc4bd31ced17', '2025-05-09 00:00:00.000000', '2025-05-09 08:01:20.000000', '2025-05-09 17:33:49.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-481a-454d-8286-1f4c3ac1b9c9', '2025-05-09 00:00:00.000000', '2025-05-09 08:01:29.000000', '2025-05-09 14:51:30.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481a-456f-825d-ed3f2219ea7c', '2025-05-09 00:00:00.000000', '2025-05-09 08:05:37.000000', '2025-05-09 15:19:17.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481a-458b-8a20-f0e47d0d2a90', '2025-05-09 00:00:00.000000', '2025-05-09 08:06:56.000000', '2025-05-09 16:41:55.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-481a-45a8-8545-34d768249d6e', '2025-05-09 00:00:00.000000', '2025-05-09 08:07:41.000000', '2025-05-09 17:26:02.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-481a-45c5-88de-ce8ddd8cce4f', '2025-05-09 00:00:00.000000', '2025-05-09 08:08:38.000000', '2025-05-09 13:27:34.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-481a-45e4-8241-1114a6396468', '2025-05-09 00:00:00.000000', '2025-05-09 08:09:12.000000', '2025-05-09 12:13:04.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-481a-460a-8052-23bb38596a8f', '2025-05-09 00:00:00.000000', '2025-05-09 08:09:52.000000', '2025-05-09 15:55:31.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-481a-4627-8825-1484b8177d65', '2025-05-09 00:00:00.000000', '2025-05-09 08:11:39.000000', '2025-05-09 17:54:28.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-481a-4644-8e3f-19b54c1486fb', '2025-05-09 00:00:00.000000', '2025-05-09 08:16:41.000000', '2025-05-09 17:48:18.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-481a-4665-86fe-19a872306416', '2025-05-09 00:00:00.000000', '2025-05-09 08:17:46.000000', '2025-05-09 14:52:01.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-481a-4688-8433-6ea408345b5d', '2025-05-09 00:00:00.000000', '2025-05-09 08:18:05.000000', '2025-05-09 17:34:19.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-481a-46a8-8a6c-7c64a4eb41b9', '2025-05-09 00:00:00.000000', '2025-05-09 08:19:05.000000', '2025-05-09 18:24:46.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-481a-46c6-8ef5-26f672946564', '2025-05-09 00:00:00.000000', '2025-05-09 08:19:47.000000', '2025-05-09 17:50:58.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-481a-46e4-8e7f-73d7bc19fce8', '2025-05-09 00:00:00.000000', '2025-05-09 08:19:58.000000', '2025-05-09 17:53:53.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-481a-4704-8d4a-f1f8b032c888', '2025-05-09 00:00:00.000000', '2025-05-09 08:20:07.000000', '2025-05-09 17:51:53.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-481a-4734-84ee-8553dd2ab438', '2025-05-09 00:00:00.000000', '2025-05-09 08:23:39.000000', '2025-05-09 18:01:18.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-481a-4754-82c1-8420e7432f32', '2025-05-09 00:00:00.000000', '2025-05-09 08:36:07.000000', '2025-05-09 18:21:46.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481a-4771-87cc-bef3b30c01aa', '2025-05-09 00:00:00.000000', '2025-05-09 08:42:46.000000', '2025-05-09 18:20:09.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-481a-4790-8384-f5abb7bb386f', '2025-05-09 00:00:00.000000', '2025-05-09 08:43:44.000000', '2025-05-09 13:09:24.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-481a-47ad-8a41-63f1bf2cfb3b', '2025-05-09 00:00:00.000000', '2025-05-09 08:45:12.000000', '2025-05-09 15:36:24.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-481a-47cb-8299-c687bfccc0c4', '2025-05-09 00:00:00.000000', '2025-05-09 08:50:59.000000', '2025-05-09 15:56:54.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-481a-47e8-84a4-7a26035f17fa', '2025-05-09 00:00:00.000000', '2025-05-09 08:54:41.000000', '2025-05-09 16:16:32.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-481a-480a-89cd-0dacc41e6a6c', '2025-05-09 00:00:00.000000', '2025-05-09 08:55:42.000000', '2025-05-09 14:38:21.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-481a-4827-8375-641ef6b42de9', '2025-05-09 00:00:00.000000', '2025-05-09 09:00:15.000000', '2025-05-09 19:09:24.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-481a-4844-8062-1175394460a2', '2025-05-09 00:00:00.000000', '2025-05-09 09:33:20.000000', '2025-05-09 18:37:03.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-481a-4867-86b9-4755a250ce82', '2025-05-09 00:00:00.000000', '2025-05-09 13:23:21.000000', '2025-05-09 18:15:04.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481a-4887-885d-7021827c9595', '2025-05-09 00:00:00.000000', '2025-05-09 13:58:50.000000', '2025-05-09 18:02:06.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-481a-48a4-801b-e92252423c67', '2025-05-10 00:00:00.000000', '2025-05-10 06:31:20.000000', '2025-05-10 07:55:00.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481a-48c0-8158-32266ec98a82', '2025-05-10 00:00:00.000000', '2025-05-10 08:08:24.000000', '2025-05-10 17:16:28.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481a-48dd-89e5-650ce5037f7b', '2025-05-12 00:00:00.000000', '2025-05-12 07:23:38.000000', '2025-05-12 17:37:17.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481a-48fb-84a5-0ee6b58e773f', '2025-05-12 00:00:00.000000', '2025-05-12 07:27:06.000000', '2025-05-12 17:35:01.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481a-4917-82e8-fdb22821626d', '2025-05-12 00:00:00.000000', '2025-05-12 07:28:00.000000', '2025-05-12 14:52:42.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481a-4932-8cfc-869cde2b4c5d', '2025-05-12 00:00:00.000000', '2025-05-12 07:40:05.000000', '2025-05-12 17:32:38.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-481a-494f-8bea-55128d209054', '2025-05-12 00:00:00.000000', '2025-05-12 07:40:27.000000', '2025-05-12 16:00:42.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-481a-496d-8d95-2cdeb23a612f', '2025-05-12 00:00:00.000000', '2025-05-12 07:47:04.000000', '2025-05-12 16:34:57.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481a-498d-8a17-2f0b862b7c72', '2025-05-12 00:00:00.000000', '2025-05-12 07:51:11.000000', '2025-05-12 17:41:12.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-481a-49aa-8cff-43d02df4f8fa', '2025-05-12 00:00:00.000000', '2025-05-12 07:51:29.000000', '2025-05-12 17:34:44.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481a-49c8-8541-19a801c1065b', '2025-05-12 00:00:00.000000', '2025-05-12 07:56:20.000000', '2025-05-12 17:35:34.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-481a-49e5-8aa5-8b6e372b5544', '2025-05-12 00:00:00.000000', '2025-05-12 08:06:36.000000', '2025-05-12 17:52:19.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-481a-4a03-8e1e-f5028a05c975', '2025-05-12 00:00:00.000000', '2025-05-12 08:07:26.000000', '2025-05-12 17:46:22.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-481a-4a20-8be6-f33a574821a6', '2025-05-12 00:00:00.000000', '2025-05-12 08:10:05.000000', '2025-05-12 17:28:56.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-481a-4a3d-8e98-70fd4a52b4a1', '2025-05-12 00:00:00.000000', '2025-05-12 08:11:10.000000', '2025-05-12 17:43:16.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-481a-4a5a-872a-3408d0a9bbdd', '2025-05-12 00:00:00.000000', '2025-05-12 08:11:28.000000', '2025-05-12 17:46:44.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-481a-4a79-85be-dd0806f4fe4d', '2025-05-12 00:00:00.000000', '2025-05-12 08:12:47.000000', '2025-05-12 17:45:25.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-481a-4a98-8405-1025f9a50d1e', '2025-05-12 00:00:00.000000', '2025-05-12 08:16:32.000000', '2025-05-12 18:04:10.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-481a-4ab5-8ba4-e581b68f3ea8', '2025-05-12 00:00:00.000000', '2025-05-12 08:17:58.000000', '2025-05-12 17:23:08.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-481a-4b06-8a19-2b831e4f95e0', '2025-05-12 00:00:00.000000', '2025-05-12 08:20:32.000000', '2025-05-12 17:50:09.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-481a-4b2f-8af8-26d66417e7f4', '2025-05-12 00:00:00.000000', '2025-05-12 08:22:21.000000', '2025-05-12 17:54:16.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-481a-4b51-8e2a-ef7562c1bf9d', '2025-05-12 00:00:00.000000', '2025-05-12 08:24:27.000000', '2025-05-12 17:34:40.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-481a-4ba1-844f-e1f83fa875cf', '2025-05-12 00:00:00.000000', '2025-05-12 08:29:11.000000', '2025-05-12 18:18:39.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-481a-4bfb-83b5-a78492cc45ce', '2025-05-12 00:00:00.000000', '2025-05-12 08:33:36.000000', '2025-05-12 18:12:09.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-481a-4c2a-8bdf-738414721852', '2025-05-12 00:00:00.000000', '2025-05-12 08:36:44.000000', '2025-05-12 18:13:35.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-481a-4c4e-8474-3480a61b8ab0', '2025-05-12 00:00:00.000000', '2025-05-12 08:43:07.000000', '2025-05-12 18:18:33.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-481a-4c6d-8de5-e9d5f52d6e7f', '2025-05-12 00:00:00.000000', '2025-05-12 08:44:57.000000', '2025-05-12 17:03:09.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481a-4c8c-88d2-f5b7bbb2bd52', '2025-05-12 00:00:00.000000', '2025-05-12 08:48:44.000000', '2025-05-12 18:41:16.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-481a-4ca9-8de4-793207e30054', '2025-05-12 00:00:00.000000', '2025-05-12 08:55:12.000000', '2025-05-12 18:08:37.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-481a-4cc9-8e8c-aa04834d0060', '2025-05-12 00:00:00.000000', '2025-05-12 09:03:39.000000', '2025-05-12 17:11:02.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-481a-4ce6-8596-f9a214b4612c', '2025-05-12 00:00:00.000000', '2025-05-12 09:05:20.000000', '2025-05-12 18:33:02.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481a-4d02-8774-15885f5a5846', '2025-05-12 00:00:00.000000', '2025-05-12 09:09:26.000000', '2025-05-12 17:05:27.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-481a-4d20-88e6-40ad6fed39d2', '2025-05-12 00:00:00.000000', '2025-05-12 09:13:33.000000', '2025-05-12 18:31:38.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-481a-4d4c-824f-bac0b21cbaa8', '2025-05-12 00:00:00.000000', '2025-05-12 09:23:43.000000', '2025-05-12 17:55:26.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-481a-4d6f-8554-325b6a391113', '2025-05-12 00:00:00.000000', '2025-05-12 10:25:46.000000', '2025-05-12 17:33:59.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-481a-4dab-8f5c-cb9f019778aa', '2025-05-12 00:00:00.000000', '2025-05-12 12:36:48.000000', '2025-05-12 17:20:52.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-481a-4dd2-8339-9bc83917c478', '2025-05-12 00:00:00.000000', '2025-05-12 13:27:25.000000', '2025-05-12 17:19:04.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-481a-4df7-81c6-db07ca412684', '2025-05-13 00:00:00.000000', '2025-05-13 07:16:15.000000', '2025-05-13 17:38:47.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481a-4e19-81a0-d289eae32a79', '2025-05-13 00:00:00.000000', '2025-05-13 07:26:53.000000', '2025-05-13 09:37:30.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481a-4e36-86a5-3980e0eb45f1', '2025-05-13 00:00:00.000000', '2025-05-13 07:30:26.000000', '2025-05-13 16:49:57.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481a-4e69-8bbc-58b23c515dfc', '2025-05-13 00:00:00.000000', '2025-05-13 07:41:25.000000', '2025-05-13 17:34:23.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-481a-4eb9-8f51-ae506ae99e93', '2025-05-13 00:00:00.000000', '2025-05-13 07:43:26.000000', '2025-05-13 16:21:17.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481a-4f03-871a-87ba39f2c792', '2025-05-13 00:00:00.000000', '2025-05-13 07:49:23.000000', '2025-05-13 17:33:36.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-481a-4f2c-83c6-a3a49ee1f7d6', '2025-05-13 00:00:00.000000', '2025-05-13 07:50:26.000000', '2025-05-13 17:48:25.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-481a-4f4c-8e68-d0df9506ff46', '2025-05-13 00:00:00.000000', '2025-05-13 07:55:32.000000', '2025-05-13 17:17:55.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-481a-4f6e-8054-46feefa7235b', '2025-05-13 00:00:00.000000', '2025-05-13 07:55:48.000000', '2025-05-13 17:37:32.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-481a-4f8b-8af3-ed0e7d4fcfef', '2025-05-13 00:00:00.000000', '2025-05-13 07:58:34.000000', '2025-05-13 17:37:52.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-481a-4fa9-8246-9c1b6ce2292e', '2025-05-13 00:00:00.000000', '2025-05-13 08:02:15.000000', '2025-05-13 16:58:14.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-481a-4fcc-8e0d-813382ac501e', '2025-05-13 00:00:00.000000', '2025-05-13 08:03:41.000000', '2025-05-13 17:57:08.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-481a-4fec-8940-af0cf3b2f54a', '2025-05-13 00:00:00.000000', '2025-05-13 08:04:16.000000', '2025-05-13 12:50:53.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-481b-400a-8639-2ba65f43d7fd', '2025-05-13 00:00:00.000000', '2025-05-13 08:06:42.000000', '2025-05-13 15:20:21.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-481b-4028-8acd-19a5c8b25084', '2025-05-13 00:00:00.000000', '2025-05-13 08:08:59.000000', '2025-05-13 17:53:35.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-481b-4045-855b-a30c7ca38e0e', '2025-05-13 00:00:00.000000', '2025-05-13 08:11:06.000000', '2025-05-13 17:43:14.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-481b-4063-8439-ced47df36c76', '2025-05-13 00:00:00.000000', '2025-05-13 08:12:44.000000', '2025-05-13 18:20:23.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-481b-4081-888d-a66d20ee6631', '2025-05-13 00:00:00.000000', '2025-05-13 08:15:29.000000', '2025-05-13 17:13:34.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-481b-409e-8bfd-d5ec33a1bd37', '2025-05-13 00:00:00.000000', '2025-05-13 08:16:13.000000', '2025-05-13 17:25:38.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-481b-40bd-8c35-5c931bab92b4', '2025-05-13 00:00:00.000000', '2025-05-13 08:16:45.000000', '2025-05-13 17:52:17.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-481b-40dd-8179-3390f7c30d5a', '2025-05-13 00:00:00.000000', '2025-05-13 08:16:53.000000', '2025-05-13 17:48:58.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-481b-40fd-80a6-3eb50850586a', '2025-05-13 00:00:00.000000', '2025-05-13 08:22:13.000000', '2025-05-13 18:15:05.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-481b-411b-8715-466b7158234c', '2025-05-13 00:00:00.000000', '2025-05-13 08:23:09.000000', '2025-05-13 17:41:05.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-481b-413a-83b5-f2e06b814ff3', '2025-05-13 00:00:00.000000', '2025-05-13 08:35:19.000000', '2025-05-13 16:27:09.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-481b-4158-8cb9-0df0e3ded55c', '2025-05-13 00:00:00.000000', '2025-05-13 08:38:45.000000', '2025-05-13 18:38:21.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-481b-4175-8415-fa66d9d45068', '2025-05-13 00:00:00.000000', '2025-05-13 08:49:00.000000', '2025-05-13 15:26:48.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481b-4192-8eee-607e268ebb09', '2025-05-13 00:00:00.000000', '2025-05-13 08:50:19.000000', '2025-05-13 18:30:14.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-481b-41b0-8d91-eea5b56b1e6a', '2025-05-13 00:00:00.000000', '2025-05-13 08:51:59.000000', '2025-05-13 18:25:54.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-481b-41d2-812d-1cab32b68974', '2025-05-13 00:00:00.000000', '2025-05-13 08:52:33.000000', '2025-05-13 17:31:00.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-481b-41f1-8b15-c498f7590fb2', '2025-05-13 00:00:00.000000', '2025-05-13 08:55:08.000000', '2025-05-13 16:35:24.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-481b-4210-85ae-020f057a75dd', '2025-05-13 00:00:00.000000', '2025-05-13 08:56:14.000000', '2025-05-13 18:04:39.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-481b-4238-8a4a-a0791c8819ad', '2025-05-13 00:00:00.000000', '2025-05-13 08:58:35.000000', '2025-05-13 18:32:02.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-481b-425a-8b84-84cb69736737', '2025-05-13 00:00:00.000000', '2025-05-13 09:05:10.000000', '2025-05-13 18:37:42.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481b-4279-829a-e66856a81f65', '2025-05-13 00:00:00.000000', '2025-05-13 10:15:08.000000', '2025-05-13 13:07:02.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-481b-4295-892c-e5a202744cf8', '2025-05-13 00:00:00.000000', '2025-05-13 12:38:33.000000', '2025-05-13 15:24:33.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481b-42b3-8faf-58add66e0d0d', '2025-05-14 00:00:00.000000', '2025-05-14 07:16:12.000000', '2025-05-14 17:32:17.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481b-42d1-872a-788eb9511a13', '2025-05-14 00:00:00.000000', '2025-05-14 07:27:02.000000', '2025-05-14 17:34:49.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481b-42ef-83a3-4292afc33a78', '2025-05-14 00:00:00.000000', '2025-05-14 07:39:53.000000', '2025-05-14 17:34:02.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-481b-430c-8c07-29839bfbb33e', '2025-05-14 00:00:00.000000', '2025-05-14 07:46:06.000000', '2025-05-14 17:28:52.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481b-432d-8e64-a746e6247bbe', '2025-05-14 00:00:00.000000', '2025-05-14 07:48:10.000000', '2025-05-14 16:28:39.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481b-434d-896d-fbd9fc730cad', '2025-05-14 00:00:00.000000', '2025-05-14 07:51:10.000000', '2025-05-14 17:33:32.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-481b-436b-8493-e97c01771ecb', '2025-05-14 00:00:00.000000', '2025-05-14 07:53:33.000000', '2025-05-14 17:31:47.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481b-4388-87c2-663f381d3c14', '2025-05-14 00:00:00.000000', '2025-05-14 07:54:04.000000', '2025-05-14 16:42:27.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae');
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd985a-481b-43a6-8ee5-2e86dc60ca05', '2025-05-14 00:00:00.000000', '2025-05-14 07:54:29.000000', '2025-05-14 15:59:10.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-481b-43c3-8f03-8061e3a6763a', '2025-05-14 00:00:00.000000', '2025-05-14 08:01:08.000000', '2025-05-14 17:45:29.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-481b-43e0-8e50-3eb945324c80', '2025-05-14 00:00:00.000000', '2025-05-14 08:04:12.000000', '2025-05-14 17:37:41.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-481b-43fe-8347-a30171b39394', '2025-05-14 00:00:00.000000', '2025-05-14 08:04:41.000000', '2025-05-14 15:52:55.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-481b-441c-85af-57a45099a197', '2025-05-14 00:00:00.000000', '2025-05-14 08:07:22.000000', '2025-05-14 17:54:41.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-481b-4439-8d7b-173b9ea77a95', '2025-05-14 00:00:00.000000', '2025-05-14 08:08:07.000000', '2025-05-14 17:48:51.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-481b-4457-85f7-71ab0fe8f1c1', '2025-05-14 00:00:00.000000', '2025-05-14 08:09:13.000000', '2025-05-14 17:03:19.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-481b-4474-86e7-9bf0f2b71c93', '2025-05-14 00:00:00.000000', '2025-05-14 08:10:45.000000', '2025-05-14 17:46:35.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-481b-449b-83b1-b01be4eab005', '2025-05-14 00:00:00.000000', '2025-05-14 08:10:59.000000', '2025-05-14 16:21:15.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-481b-44ba-8538-031e716b9a21', '2025-05-14 00:00:00.000000', '2025-05-14 08:12:35.000000', '2025-05-14 15:30:24.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-481b-44d7-8c14-9e30607f7302', '2025-05-14 00:00:00.000000', '2025-05-14 08:12:49.000000', '2025-05-14 18:09:53.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-481b-44f4-8ffa-7e6af215920c', '2025-05-14 00:00:00.000000', '2025-05-14 08:13:54.000000', '2025-05-14 17:45:55.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-481b-4513-888c-b62ea94add5b', '2025-05-14 00:00:00.000000', '2025-05-14 08:14:50.000000', '2025-05-14 17:49:18.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-481b-4530-8c35-cc3d46e3a1da', '2025-05-14 00:00:00.000000', '2025-05-14 08:15:17.000000', '2025-05-14 17:50:49.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-481b-454e-8ad2-b4b9f581f12a', '2025-05-14 00:00:00.000000', '2025-05-14 08:17:41.000000', '2025-05-14 17:32:35.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-481b-456b-8eec-7418beb35fce', '2025-05-14 00:00:00.000000', '2025-05-14 08:18:25.000000', '2025-05-14 17:16:13.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-481b-458a-8796-55478963a3a7', '2025-05-14 00:00:00.000000', '2025-05-14 08:24:26.000000', '2025-05-14 18:06:08.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-481b-45a8-8397-16d7aef144e3', '2025-05-14 00:00:00.000000', '2025-05-14 08:44:09.000000', '2025-05-14 18:21:34.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-481b-45c5-8e18-2d0fa6bcbc7d', '2025-05-14 00:00:00.000000', '2025-05-14 08:45:42.000000', '2025-05-14 17:56:08.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-481b-45e3-8e88-ff44bdb922aa', '2025-05-14 00:00:00.000000', '2025-05-14 08:55:16.000000', '2025-05-14 17:54:59.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-481b-4603-872f-ddef7e9c16c9', '2025-05-14 00:00:00.000000', '2025-05-14 08:58:24.000000', '2025-05-14 18:31:32.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-481b-4621-87e0-44e72dec3bad', '2025-05-14 00:00:00.000000', '2025-05-14 09:00:40.000000', '2025-05-14 19:08:44.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-481b-463e-8df2-f0668a17ea43', '2025-05-14 00:00:00.000000', '2025-05-14 09:06:39.000000', '2025-05-14 18:09:53.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-481b-465c-8bfb-ccfb0ef2d35f', '2025-05-14 00:00:00.000000', '2025-05-14 09:07:12.000000', '2025-05-14 18:34:09.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481b-470a-8145-ee40cee4a857', '2025-05-14 00:00:00.000000', '2025-05-14 10:21:55.000000', '2025-05-14 17:43:26.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-481b-4745-8689-7d72eb957170', '2025-05-14 00:00:00.000000', '2025-05-14 10:30:29.000000', '2025-05-14 18:42:50.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481b-48d3-82f0-c9ea505da060', '2025-05-14 00:00:00.000000', '2025-05-14 11:17:40.000000', '2025-05-14 12:05:13.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-481b-4951-8abc-f083dd4f6281', '2025-05-15 00:00:00.000000', '2025-05-15 07:05:09.000000', '2025-05-15 16:08:37.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-481b-49ab-8dfd-98770a9731f6', '2025-05-15 00:00:00.000000', '2025-05-15 07:21:05.000000', '2025-05-15 17:32:47.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481b-49d5-8321-9e90a8fe60ab', '2025-05-15 00:00:00.000000', '2025-05-15 07:30:27.000000', '2025-05-15 13:33:11.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481b-49f6-8d9c-bd1b75a199ea', '2025-05-15 00:00:00.000000', '2025-05-15 07:30:52.000000', '2025-05-15 17:31:15.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-481b-4a16-8724-3b4ba7451c15', '2025-05-15 00:00:00.000000', '2025-05-15 07:33:08.000000', '2025-05-15 17:57:46.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481b-4a38-845a-11b6569410ea', '2025-05-15 00:00:00.000000', '2025-05-15 07:46:21.000000', '2025-05-15 17:35:07.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-481b-4a58-82a1-5deb2909eb34', '2025-05-15 00:00:00.000000', '2025-05-15 07:46:59.000000', '2025-05-15 17:38:34.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-481b-4a79-84e4-16392ef03018', '2025-05-15 00:00:00.000000', '2025-05-15 07:51:21.000000', '2025-05-15 17:35:28.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-481b-4a98-86e7-3f1a86dc0b69', '2025-05-15 00:00:00.000000', '2025-05-15 07:52:44.000000', '2025-05-15 17:31:41.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-481b-4ab7-8dd7-6720db072a19', '2025-05-15 00:00:00.000000', '2025-05-15 07:56:09.000000', '2025-05-15 12:04:17.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-481b-4ad4-8fc2-c88d4561e5cf', '2025-05-15 00:00:00.000000', '2025-05-15 07:58:03.000000', '2025-05-15 17:43:31.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-481b-4af3-862e-13d9e2b273ed', '2025-05-15 00:00:00.000000', '2025-05-15 07:59:55.000000', '2025-05-15 12:46:57.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-481b-4b11-813a-cbe9fc8793b3', '2025-05-15 00:00:00.000000', '2025-05-15 08:00:14.000000', '2025-05-15 17:33:47.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-481b-4b2f-8a6c-0cbdabd09cea', '2025-05-15 00:00:00.000000', '2025-05-15 08:04:34.000000', '2025-05-15 17:37:14.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-481b-4b4c-8a5d-71cf5ddcf462', '2025-05-15 00:00:00.000000', '2025-05-15 08:07:04.000000', '2025-05-15 17:51:08.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-481b-4b6a-81e5-3d82158ad7db', '2025-05-15 00:00:00.000000', '2025-05-15 08:13:33.000000', '2025-05-15 17:47:32.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-481b-4b87-89d3-b53793af7647', '2025-05-15 00:00:00.000000', '2025-05-15 08:13:45.000000', '2025-05-15 17:51:26.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-481b-4ba6-8f98-99a1ab439b8a', '2025-05-15 00:00:00.000000', '2025-05-15 08:14:18.000000', '2025-05-15 17:52:47.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-481b-4bc4-873c-8b56a09bc3b0', '2025-05-15 00:00:00.000000', '2025-05-15 08:15:00.000000', '2025-05-15 17:21:17.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-481b-4be7-8d16-acf5dd78f7a0', '2025-05-15 00:00:00.000000', '2025-05-15 08:15:11.000000', '2025-05-15 18:10:39.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-481b-4dcf-809c-38a71ad2badd', '2025-05-15 00:00:00.000000', '2025-05-15 08:16:26.000000', '2025-05-15 17:50:36.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-481b-4e0a-8c85-c03e71c21738', '2025-05-15 00:00:00.000000', '2025-05-15 08:21:47.000000', '2025-05-15 16:31:39.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-481b-4e34-80e2-0659fee82add', '2025-05-15 00:00:00.000000', '2025-05-15 08:22:21.000000', '2025-05-15 17:54:35.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-481f-4c3e-80b3-1f4fb0ea34f1', '2025-05-15 00:00:00.000000', '2025-05-15 08:22:56.000000', '2025-05-15 17:56:36.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-481f-4cea-8955-11e650c7d6a1', '2025-05-15 00:00:00.000000', '2025-05-15 08:24:28.000000', '2025-05-15 18:12:37.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-481f-4d32-8b85-7940d96802ee', '2025-05-15 00:00:00.000000', '2025-05-15 08:27:02.000000', '2025-05-15 18:04:43.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-481f-4d64-8e2c-25c4cecc6644', '2025-05-15 00:00:00.000000', '2025-05-15 08:32:24.000000', '2025-05-15 17:36:34.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-481f-4d89-8fb9-23a5705d1917', '2025-05-15 00:00:00.000000', '2025-05-15 08:38:37.000000', '2025-05-15 19:18:24.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-481f-4da9-8d9c-f6bafc1f7b38', '2025-05-15 00:00:00.000000', '2025-05-15 08:44:10.000000', '2025-05-15 18:17:57.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-481f-4dd7-8661-456541adbb63', '2025-05-15 00:00:00.000000', '2025-05-15 08:46:16.000000', '2025-05-15 17:55:58.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-481f-4e01-83dc-38f8e454333d', '2025-05-15 00:00:00.000000', '2025-05-15 08:53:23.000000', '2025-05-15 18:32:54.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-481f-4e29-8ca4-60b417496c41', '2025-05-15 00:00:00.000000', '2025-05-15 08:54:37.000000', '2025-05-15 18:52:51.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-481f-4e4b-8a0a-68ae24d30f56', '2025-05-15 00:00:00.000000', '2025-05-15 09:26:29.000000', '2025-05-15 18:31:31.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-481f-4e70-8368-6049344c0a65', '2025-05-15 00:00:00.000000', '2025-05-15 09:39:43.000000', '2025-05-15 15:42:03.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-481f-4ea1-8fe1-f4fa14e9c0be', '2025-05-16 00:00:00.000000', '2025-05-16 07:13:25.000000', '2025-05-16 17:32:08.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-481f-4f67-89c9-5b0c4a883a00', '2025-05-16 00:00:00.000000', '2025-05-16 07:19:06.000000', '2025-05-16 17:32:39.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-481f-4f9d-84ca-5132808a9bfc', '2025-05-16 00:00:00.000000', '2025-05-16 07:41:38.000000', '2025-05-16 14:47:02.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-481f-4fc5-884a-00735cd009ed', '2025-05-16 00:00:00.000000', '2025-05-16 07:43:12.000000', '2025-05-16 17:37:59.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-481f-4fee-899c-d4dffb884a7b', '2025-05-16 00:00:00.000000', '2025-05-16 07:43:32.000000', '2025-05-16 17:31:17.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4820-4037-8e87-a39b87ac23f8', '2025-05-16 00:00:00.000000', '2025-05-16 07:43:47.000000', '2025-05-16 16:07:14.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4820-4090-8d55-ccba3837e9b5', '2025-05-16 00:00:00.000000', '2025-05-16 07:49:51.000000', '2025-05-16 12:35:30.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4820-40e4-865b-a27877b88613', '2025-05-16 00:00:00.000000', '2025-05-16 07:51:45.000000', '2025-05-16 17:31:48.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4820-4137-8032-ba426fedacd9', '2025-05-16 00:00:00.000000', '2025-05-16 07:53:52.000000', '2025-05-16 15:39:54.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4820-4168-80a8-6dff673a4b02', '2025-05-16 00:00:00.000000', '2025-05-16 07:54:34.000000', '2025-05-16 14:54:22.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4820-4192-82ac-05823dd01bc8', '2025-05-16 00:00:00.000000', '2025-05-16 07:56:47.000000', '2025-05-16 17:32:48.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4820-41af-8dee-4f55da065eef', '2025-05-16 00:00:00.000000', '2025-05-16 07:58:55.000000', '2025-05-16 17:52:14.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4820-41cc-86a4-37058ba7857b', '2025-05-16 00:00:00.000000', '2025-05-16 07:59:42.000000', '2025-05-16 17:39:04.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4820-41ea-8c2f-a0ab43bf4797', '2025-05-16 00:00:00.000000', '2025-05-16 08:01:22.000000', '2025-05-16 17:35:57.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4820-4215-8b78-47dd2cb98d18', '2025-05-16 00:00:00.000000', '2025-05-16 08:02:09.000000', '2025-05-16 16:22:48.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4820-4241-8c97-8abbed0a406c', '2025-05-16 00:00:00.000000', '2025-05-16 08:03:26.000000', '2025-05-16 17:36:22.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4820-4266-89c1-9b25ffd55d2c', '2025-05-16 00:00:00.000000', '2025-05-16 08:04:19.000000', '2025-05-16 17:29:26.000000', 0, 1, '94e0cf7d-c8ea-4f26-a8c5-b974d14f3b70'),
('08dd985a-4820-42df-8539-17850cec25ff', '2025-05-16 00:00:00.000000', '2025-05-16 08:11:45.000000', '2025-05-16 17:46:53.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4820-4315-8cd2-4eab6584fc0a', '2025-05-16 00:00:00.000000', '2025-05-16 08:12:15.000000', '2025-05-16 17:33:06.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-4820-433c-8340-c22bed0c3411', '2025-05-16 00:00:00.000000', '2025-05-16 08:13:11.000000', '2025-05-16 18:02:35.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4820-4399-8be9-0721174925c6', '2025-05-16 00:00:00.000000', '2025-05-16 08:13:51.000000', '2025-05-16 17:45:34.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4820-43ca-81ac-1b47bdad5b28', '2025-05-16 00:00:00.000000', '2025-05-16 08:22:32.000000', '2025-05-16 17:55:22.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4820-43fa-838a-310eb3f2387f', '2025-05-16 00:00:00.000000', '2025-05-16 08:23:16.000000', '2025-05-16 18:00:13.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4820-4423-8889-4d9f894a10be', '2025-05-16 00:00:00.000000', '2025-05-16 08:25:11.000000', '2025-05-16 18:05:44.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4820-444a-8753-9a3a9897bfb7', '2025-05-16 00:00:00.000000', '2025-05-16 08:34:07.000000', '2025-05-16 18:07:29.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4820-448f-854a-15fadcbcb5d7', '2025-05-16 00:00:00.000000', '2025-05-16 08:40:46.000000', '2025-05-16 18:33:33.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4820-44c7-83e3-5900de9f028e', '2025-05-16 00:00:00.000000', '2025-05-16 08:43:25.000000', '2025-05-16 17:20:24.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4820-4524-8a5c-db804055c301', '2025-05-16 00:00:00.000000', '2025-05-16 08:48:32.000000', '2025-05-16 19:14:45.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4820-455d-8aec-c05eed00901a', '2025-05-16 00:00:00.000000', '2025-05-16 08:49:22.000000', '2025-05-16 18:28:02.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4820-4586-8837-67dac84f9572', '2025-05-16 00:00:00.000000', '2025-05-16 08:55:45.000000', '2025-05-16 17:47:23.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4820-45af-8df1-de7e9143d4ae', '2025-05-16 00:00:00.000000', '2025-05-16 08:58:59.000000', '2025-05-16 18:30:00.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4820-45dd-8ee2-35ee0ce534d4', '2025-05-16 00:00:00.000000', '2025-05-16 09:04:17.000000', '2025-05-16 15:41:57.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4820-4614-8680-7209d29a30a5', '2025-05-17 00:00:00.000000', '2025-05-17 11:42:22.000000', NULL, 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4820-464d-8210-4cbc2a2254cb', '2025-05-17 00:00:00.000000', '2025-05-17 11:44:33.000000', '2025-05-17 11:50:15.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4820-4673-8f83-2492a307e3fe', '2025-05-17 00:00:00.000000', '2025-05-17 11:58:58.000000', '2025-05-17 12:27:47.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4820-469d-8fe9-c23505100e2c', '2025-05-18 00:00:00.000000', '2025-05-18 13:32:20.000000', '2025-05-18 13:37:32.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4820-46ea-8ba3-87f42ace16e3', '2025-05-18 00:00:00.000000', '2025-05-18 13:35:26.000000', '2025-05-18 14:12:03.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4820-4730-8c83-e70ad0377895', '2025-05-18 00:00:00.000000', '2025-05-18 13:36:04.000000', NULL, 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4820-4763-891a-348cd3f271da', '2025-05-18 00:00:00.000000', '2025-05-18 13:45:51.000000', '2025-05-18 13:46:56.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4821-4d8a-88e3-7415042ff0f9', '2025-05-19 00:00:00.000000', '2025-05-19 07:34:57.000000', '2025-05-19 14:59:19.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4821-4dff-8c20-94b58d6245d2', '2025-05-19 00:00:00.000000', '2025-05-19 07:40:47.000000', '2025-05-19 16:13:44.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4821-4e31-8a96-c65c726c0447', '2025-05-19 00:00:00.000000', '2025-05-19 07:43:30.000000', '2025-05-19 17:37:34.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4821-4e5e-8d52-de4f31bb9d8e', '2025-05-19 00:00:00.000000', '2025-05-19 07:45:19.000000', '2025-05-19 17:43:08.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-4821-4e85-89dd-6852c5863fc3', '2025-05-19 00:00:00.000000', '2025-05-19 07:46:40.000000', '2025-05-19 17:31:30.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4821-4eb3-8e48-ca525d9bfa24', '2025-05-19 00:00:00.000000', '2025-05-19 07:53:07.000000', '2025-05-19 17:48:24.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4821-4edb-8284-1b875cf1e68b', '2025-05-19 00:00:00.000000', '2025-05-19 07:55:17.000000', '2025-05-19 17:16:35.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4821-4f05-841d-d5ec6c883cd4', '2025-05-19 00:00:00.000000', '2025-05-19 07:58:47.000000', '2025-05-19 15:45:26.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4821-4f31-8d7c-b79265e7bca0', '2025-05-19 00:00:00.000000', '2025-05-19 08:02:52.000000', '2025-05-19 17:52:28.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4821-4f58-85cd-4524a11b9b3d', '2025-05-19 00:00:00.000000', '2025-05-19 08:05:06.000000', '2025-05-19 17:41:16.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4821-4f86-8fbb-28f16a20056a', '2025-05-19 00:00:00.000000', '2025-05-19 08:05:39.000000', '2025-05-19 17:34:13.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4821-4fae-82ed-6ec2f60ab50a', '2025-05-19 00:00:00.000000', '2025-05-19 08:06:01.000000', '2025-05-19 13:50:09.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4821-4fda-8521-f870bfda0487', '2025-05-19 00:00:00.000000', '2025-05-19 08:06:57.000000', '2025-05-19 17:25:55.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4822-4008-8254-c388cbeb16b6', '2025-05-19 00:00:00.000000', '2025-05-19 08:10:17.000000', '2025-05-19 18:01:16.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4822-4035-8897-25f0c3b78be0', '2025-05-19 00:00:00.000000', '2025-05-19 08:14:31.000000', '2025-05-19 16:00:23.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4822-4061-8c0f-341750159652', '2025-05-19 00:00:00.000000', '2025-05-19 08:21:01.000000', '2025-05-19 17:21:18.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4822-4088-8c41-d1f2ba833271', '2025-05-19 00:00:00.000000', '2025-05-19 08:21:11.000000', '2025-05-19 17:08:51.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4822-40b5-84b7-1d54c7cef979', '2025-05-19 00:00:00.000000', '2025-05-19 08:21:40.000000', '2025-05-19 18:07:37.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4822-4105-822f-d3c01345b24e', '2025-05-19 00:00:00.000000', '2025-05-19 08:24:18.000000', '2025-05-19 17:44:49.000000', 0, 1, 'bdf0c99a-eba0-4d55-b511-1174238abfb1'),
('08dd985a-4822-42d9-85e0-be027e42b23b', '2025-05-19 00:00:00.000000', '2025-05-19 08:27:15.000000', '2025-05-19 17:11:06.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4822-4394-8954-19b05f903d54', '2025-05-19 00:00:00.000000', '2025-05-19 08:28:45.000000', '2025-05-19 17:56:33.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4822-4409-8a45-1c7c0aeb57ca', '2025-05-19 00:00:00.000000', '2025-05-19 08:34:41.000000', '2025-05-19 18:10:54.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4822-4479-80e6-a6d44d3e6306', '2025-05-19 00:00:00.000000', '2025-05-19 08:36:00.000000', '2025-05-19 14:06:42.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4822-44f1-836e-d4b529b2ab00', '2025-05-19 00:00:00.000000', '2025-05-19 08:39:17.000000', '2025-05-19 12:53:33.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4822-452b-80ea-6397f9c828a7', '2025-05-19 00:00:00.000000', '2025-05-19 08:45:30.000000', '2025-05-19 17:55:55.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4822-4551-8bbc-794ca22ca74f', '2025-05-19 00:00:00.000000', '2025-05-19 08:48:25.000000', '2025-05-19 18:42:07.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4822-4573-8ec0-df189aac7ac1', '2025-05-19 00:00:00.000000', '2025-05-19 08:48:54.000000', '2025-05-19 18:19:49.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4822-4651-8aad-993f8ff92f8a', '2025-05-19 00:00:00.000000', '2025-05-19 09:05:21.000000', '2025-05-19 18:40:16.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4822-47db-8909-3c116ffb07e5', '2025-05-19 00:00:00.000000', '2025-05-19 09:07:16.000000', '2025-05-19 18:40:30.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4822-4820-8ec7-087dd38864f6', '2025-05-19 00:00:00.000000', '2025-05-19 09:08:47.000000', '2025-05-19 18:18:49.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4822-4842-8566-b874412a0775', '2025-05-19 00:00:00.000000', '2025-05-19 09:51:16.000000', '2025-05-19 17:59:45.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4822-485f-8ffc-2f358a59a18d', '2025-05-19 00:00:00.000000', '2025-05-19 10:10:05.000000', '2025-05-19 17:46:40.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4822-4881-8bea-9a2f5c9fec4c', '2025-05-19 00:00:00.000000', '2025-05-19 10:11:04.000000', '2025-05-19 18:35:43.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-4822-48a0-8066-b360d6ff9d1e', '2025-05-19 00:00:00.000000', '2025-05-19 10:23:39.000000', '2025-05-19 17:50:07.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4822-48bd-86a4-d8ca4492f6b8', '2025-05-19 00:00:00.000000', '2025-05-19 11:31:39.000000', '2025-05-19 17:47:45.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4822-49ca-8772-ff8aad56e691', '2025-05-20 00:00:00.000000', '2025-05-20 07:10:38.000000', '2025-05-20 17:38:29.000000', 0, 1, '7869c58b-ac36-42b2-8222-59c437ea79d5'),
('08dd985a-4822-4a0f-89a2-5301c87f85bc', '2025-05-20 00:00:00.000000', '2025-05-20 07:28:37.000000', '2025-05-20 17:44:58.000000', 0, 1, '9b3e6b01-a969-4cff-af75-4c6b9a3c1d0b'),
('08dd985a-4822-4a3e-88a7-fa9999bbe87b', '2025-05-20 00:00:00.000000', '2025-05-20 07:45:06.000000', '2025-05-20 17:31:49.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4822-4a68-8bda-4bd9ea2d1f0a', '2025-05-20 00:00:00.000000', '2025-05-20 07:47:28.000000', '2025-05-20 16:21:02.000000', 0, 1, '10447acd-8689-473e-a76f-47aaef7a102a'),
('08dd985a-4822-4a8b-874d-0c754b1a0f23', '2025-05-20 00:00:00.000000', '2025-05-20 07:49:16.000000', '2025-05-20 15:51:41.000000', 0, 1, '92cb5002-8953-47fb-8f5e-a8e8240125b9'),
('08dd985a-4822-4ab5-8bab-000274ce4869', '2025-05-20 00:00:00.000000', '2025-05-20 07:52:45.000000', '2025-05-20 17:00:57.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4822-4ae1-81a8-885e7285b71e', '2025-05-20 00:00:00.000000', '2025-05-20 07:52:59.000000', '2025-05-20 17:45:31.000000', 0, 1, '92193f9a-3a42-4049-a572-6a3828e6469f'),
('08dd985a-4822-4b07-8432-8876fc7bde7c', '2025-05-20 00:00:00.000000', '2025-05-20 07:54:20.000000', '2025-05-20 17:07:57.000000', 0, 1, '815152fc-871e-459b-89c6-324ff2c172b3'),
('08dd985a-4822-4b2e-85d9-74dcfbe7fe94', '2025-05-20 00:00:00.000000', '2025-05-20 07:54:42.000000', '2025-05-20 17:28:00.000000', 0, 1, '30753979-125f-42b5-965f-7f28ada41aa9'),
('08dd985a-4822-4b59-887e-e07093d0ee2d', '2025-05-20 00:00:00.000000', '2025-05-20 07:56:00.000000', '2025-05-20 15:34:54.000000', 0, 1, 'ed5202b0-c42a-4548-b4c7-9c9c01ed5004'),
('08dd985a-4822-4b82-8979-adb6108c4f39', '2025-05-20 00:00:00.000000', '2025-05-20 07:57:53.000000', '2025-05-20 15:44:25.000000', 0, 1, 'f727cb71-f9df-41e8-ae10-5a1114399637'),
('08dd985a-4822-4baa-8f34-322706c638ef', '2025-05-20 00:00:00.000000', '2025-05-20 07:59:23.000000', '2025-05-20 17:38:02.000000', 0, 1, 'f3f518ed-d8f4-40b5-9126-0e015c63034b'),
('08dd985a-4822-4bd5-8a2e-09b94eb297a8', '2025-05-20 00:00:00.000000', '2025-05-20 07:59:49.000000', '2025-05-20 17:33:05.000000', 0, 1, 'eb4c5837-ef0b-4fa9-905d-49d33c115932'),
('08dd985a-4822-4bfa-8946-ad4f925f9e80', '2025-05-20 00:00:00.000000', '2025-05-20 08:09:08.000000', '2025-05-20 17:11:37.000000', 0, 1, '9b847d30-ed55-478c-90e9-ec40a9771b22'),
('08dd985a-4822-4c34-84c4-02d01c5b21a3', '2025-05-20 00:00:00.000000', '2025-05-20 08:10:23.000000', '2025-05-20 17:47:46.000000', 0, 1, '48d9453e-44d2-4695-92ca-8e55124cbea6'),
('08dd985a-4822-4c5f-8c5c-ae6f005e9e80', '2025-05-20 00:00:00.000000', '2025-05-20 08:11:15.000000', '2025-05-20 17:44:27.000000', 0, 1, '66ffd80f-30a3-4bd2-ab80-b81501a80de5'),
('08dd985a-4822-4c89-84ce-d971a8c5a7fb', '2025-05-20 00:00:00.000000', '2025-05-20 08:11:37.000000', '2025-05-20 17:03:50.000000', 0, 1, '6dd6fc1c-666f-41bd-9fb1-63fc7b230cf1'),
('08dd985a-4822-4cb7-8bd1-fbdc17303df0', '2025-05-20 00:00:00.000000', '2025-05-20 08:13:10.000000', '2025-05-20 17:43:14.000000', 0, 1, '7db80653-9743-4158-8252-b7f84723d6a2'),
('08dd985a-4822-4cde-8d5b-121de28e116e', '2025-05-20 00:00:00.000000', '2025-05-20 08:14:24.000000', '2025-05-20 17:55:35.000000', 0, 1, '8dc5b897-fc98-4d0e-acca-dcb4ccba9155'),
('08dd985a-4822-4d0a-82fa-426e7b27426f', '2025-05-20 00:00:00.000000', '2025-05-20 08:18:52.000000', '2025-05-20 17:50:45.000000', 0, 1, 'b3f18097-e655-463b-90e3-5306577f4ad4'),
('08dd985a-4822-4d32-8b6f-8281f95f7a15', '2025-05-20 00:00:00.000000', '2025-05-20 08:20:49.000000', '2025-05-20 17:52:30.000000', 0, 1, 'b2f1e0a3-3eb4-44f0-84f8-9cdcf638ba1e'),
('08dd985a-4822-4d5d-8c08-a5b47a684f52', '2025-05-20 00:00:00.000000', '2025-05-20 08:21:14.000000', '2025-05-20 17:59:45.000000', 0, 1, '924a0b26-1171-4360-b417-eddde7fd1b26'),
('08dd985a-4822-4d88-8e03-5e831c3e9433', '2025-05-20 00:00:00.000000', '2025-05-20 08:22:28.000000', '2025-05-20 18:35:23.000000', 0, 1, '5be2983d-1d3a-4937-bc43-79f40266e46e'),
('08dd985a-4822-4db0-82a7-ed5d4e846def', '2025-05-20 00:00:00.000000', '2025-05-20 08:28:18.000000', '2025-05-20 18:20:40.000000', 0, 1, '93f3e318-6673-4d2a-a410-1b87fb16886f'),
('08dd985a-4822-4ddc-8dcd-6daf58aa1977', '2025-05-20 00:00:00.000000', '2025-05-20 08:28:37.000000', '2025-05-20 19:04:55.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4822-4e06-840b-b7df05d03b69', '2025-05-20 00:00:00.000000', '2025-05-20 08:36:44.000000', '2025-05-20 19:30:54.000000', 0, 1, '6b6b2f85-9499-4cb1-abd1-e0a493151d05'),
('08dd985a-4822-4e30-84ce-890817555958', '2025-05-20 00:00:00.000000', '2025-05-20 08:39:08.000000', '2025-05-20 19:10:59.000000', 0, 1, '21690bc5-1661-45b7-abea-b52a150ff2d8'),
('08dd985a-4822-4e5c-80db-a163074431e3', '2025-05-20 00:00:00.000000', '2025-05-20 08:45:22.000000', '2025-05-20 17:08:25.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4822-4e83-8b21-995c400c0ce7', '2025-05-20 00:00:00.000000', '2025-05-20 08:47:52.000000', '2025-05-20 17:15:43.000000', 0, 1, '8b5dc38d-58c0-49aa-8ebb-fc36fa5a628f'),
('08dd985a-4822-4eb5-8128-e003b925bc05', '2025-05-20 00:00:00.000000', '2025-05-20 08:48:23.000000', '2025-05-20 18:21:30.000000', 0, 1, '91de8b04-686a-4471-ad40-0ae40aaccaee'),
('08dd985a-4822-4edf-8071-313765568d5f', '2025-05-20 00:00:00.000000', '2025-05-20 08:53:13.000000', '2025-05-20 18:27:47.000000', 0, 1, '72c7aa50-f2a6-4837-a7f6-efcd17f3b851'),
('08dd985a-4822-4f0c-89b2-91d791fd2c56', '2025-05-20 00:00:00.000000', '2025-05-20 09:03:04.000000', '2025-05-20 19:03:47.000000', 0, 1, '657372c0-4d05-472d-9764-20d29a482318'),
('08dd985a-4822-4f37-8aff-bff6116aa755', '2025-05-20 00:00:00.000000', '2025-05-20 09:11:15.000000', '2025-05-20 17:37:38.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4822-4f5e-80d9-e36c1d2ad866', '2025-05-20 00:00:00.000000', '2025-05-20 11:40:34.000000', '2025-05-20 18:30:29.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a'),
('08dd985a-4822-4f8d-8a25-6bd6029a0598', '2025-05-21 00:00:00.000000', '2025-05-21 07:39:29.000000', '2025-05-21 15:01:56.000000', 0, 1, '61db0527-078c-423e-a297-ff4759e26662'),
('08dd985a-4822-4fb5-895c-831957842a5d', '2025-05-21 00:00:00.000000', '2025-05-21 07:50:08.000000', '2025-05-21 15:25:36.000000', 0, 1, 'be581356-db88-4f33-832d-8a7c08d29bf1'),
('08dd985a-4822-4fdb-8798-a92f70a5c179', '2025-05-21 00:00:00.000000', '2025-05-21 07:50:22.000000', '2025-05-21 12:09:01.000000', 0, 1, '56837676-765e-4c48-b773-cb1aeaccdc49'),
('08dd985a-4822-4ff9-81e2-eb2c55288b45', '2025-05-21 00:00:00.000000', '2025-05-21 07:54:55.000000', '2025-05-21 15:31:56.000000', 0, 1, '1706d2ad-d694-4334-bbc0-ca74a556d4ae'),
('08dd985a-4823-4017-803b-b1104b623129', '2025-05-21 00:00:00.000000', '2025-05-21 08:38:49.000000', '2025-05-21 14:40:18.000000', 0, 1, 'c1cff8e1-e2bb-49b2-ac4f-601b97b9370f'),
('08dd985a-4823-4035-88b6-bb546f5b8ab4', '2025-05-21 00:00:00.000000', '2025-05-21 08:58:24.000000', '2025-05-21 14:09:30.000000', 0, 1, 'eaf94299-18df-4b4f-8064-588bafad951a');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `Id` int(11) NOT NULL,
  `BirthDate` datetime(6) DEFAULT NULL,
  `Gender` tinyint(1) NOT NULL,
  `PermanentAddress` varchar(255) DEFAULT NULL,
  `ContactAddress` varchar(255) DEFAULT NULL,
  `YearsOfWork` int(11) NOT NULL,
  `Nationality` int(11) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `work_times`
--

CREATE TABLE `work_times` (
  `Id` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `StartTimeMorning` time(6) NOT NULL,
  `EndTimeMorning` time(6) NOT NULL,
  `StartTimeAfternoon` time(6) NOT NULL,
  `EndTimeAfternoon` time(6) NOT NULL,
  `AllowedLateMinutes` int(11) NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work_times`
--

INSERT INTO `work_times` (`Id`, `Title`, `StartTimeMorning`, `EndTimeMorning`, `StartTimeAfternoon`, `EndTimeAfternoon`, `AllowedLateMinutes`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `LastModifiedBy`) VALUES
(1, 'Basic', '08:00:00.000000', '12:00:00.000000', '13:30:00.000000', '17:30:00.000000', 60, '0001-01-01 00:00:00.000000', NULL, NULL, NULL),
(2, 'Early', '08:00:00.000000', '12:00:00.000000', '13:00:00.000000', '17:00:00.000000', 60, '0001-01-01 00:00:00.000000', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20250521062906_Init', '8.0.12'),
('20250521112034_Init2', '8.0.12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asp_net_roles`
--
ALTER TABLE `asp_net_roles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- Indexes for table `asp_net_role_claims`
--
ALTER TABLE `asp_net_role_claims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_asp_net_role_claims_RoleId` (`RoleId`);

--
-- Indexes for table `asp_net_users`
--
ALTER TABLE `asp_net_users`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`),
  ADD KEY `IX_asp_net_users_SupervisorId` (`SupervisorId`),
  ADD KEY `IX_asp_net_users_TeamId` (`TeamId`),
  ADD KEY `IX_asp_net_users_WorkTimeId` (`WorkTimeId`);

--
-- Indexes for table `asp_net_user_claims`
--
ALTER TABLE `asp_net_user_claims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_asp_net_user_claims_UserId` (`UserId`);

--
-- Indexes for table `asp_net_user_logins`
--
ALTER TABLE `asp_net_user_logins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_asp_net_user_logins_UserId` (`UserId`);

--
-- Indexes for table `asp_net_user_roles`
--
ALTER TABLE `asp_net_user_roles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_asp_net_user_roles_RoleId` (`RoleId`);

--
-- Indexes for table `asp_net_user_tokens`
--
ALTER TABLE `asp_net_user_tokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_devices_AssignedUserId` (`AssignedUserId`);

--
-- Indexes for table `device_categories`
--
ALTER TABLE `device_categories`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `device_device_category`
--
ALTER TABLE `device_device_category`
  ADD PRIMARY KEY (`DeviceCategoriesId`,`DevicesId`),
  ADD KEY `IX_device_device_category_DevicesId` (`DevicesId`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_notifications_UserId` (`UserId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_projects_ManagerId` (`ManagerId`),
  ADD KEY `IX_projects_TeamId` (`TeamId`);

--
-- Indexes for table `project_user`
--
ALTER TABLE `project_user`
  ADD PRIMARY KEY (`MembersId`,`ProjectsId`),
  ADD KEY `IX_project_user_ProjectsId` (`ProjectsId`);

--
-- Indexes for table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_refresh_tokens_UserId` (`UserId`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_requests_ApprovedId` (`ApprovedId`),
  ADD KEY `IX_requests_TimesheetId` (`TimesheetId`),
  ADD KEY `IX_requests_UserId` (`UserId`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_teams_ManagerId` (`ManagerId`);

--
-- Indexes for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_timesheets_UserId` (`UserId`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IX_user_details_UserId` (`UserId`);

--
-- Indexes for table `work_times`
--
ALTER TABLE `work_times`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asp_net_role_claims`
--
ALTER TABLE `asp_net_role_claims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `asp_net_user_claims`
--
ALTER TABLE `asp_net_user_claims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `device_categories`
--
ALTER TABLE `device_categories`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `work_times`
--
ALTER TABLE `work_times`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asp_net_role_claims`
--
ALTER TABLE `asp_net_role_claims`
  ADD CONSTRAINT `FK_asp_net_role_claims_asp_net_roles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `asp_net_roles` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `asp_net_users`
--
ALTER TABLE `asp_net_users`
  ADD CONSTRAINT `FK_asp_net_users_asp_net_users_SupervisorId` FOREIGN KEY (`SupervisorId`) REFERENCES `asp_net_users` (`Id`),
  ADD CONSTRAINT `FK_asp_net_users_teams_TeamId` FOREIGN KEY (`TeamId`) REFERENCES `teams` (`Id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_asp_net_users_work_times_WorkTimeId` FOREIGN KEY (`WorkTimeId`) REFERENCES `work_times` (`Id`);

--
-- Constraints for table `asp_net_user_claims`
--
ALTER TABLE `asp_net_user_claims`
  ADD CONSTRAINT `FK_asp_net_user_claims_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `asp_net_user_logins`
--
ALTER TABLE `asp_net_user_logins`
  ADD CONSTRAINT `FK_asp_net_user_logins_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `asp_net_user_roles`
--
ALTER TABLE `asp_net_user_roles`
  ADD CONSTRAINT `FK_asp_net_user_roles_asp_net_roles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `asp_net_roles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_asp_net_user_roles_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `asp_net_user_tokens`
--
ALTER TABLE `asp_net_user_tokens`
  ADD CONSTRAINT `FK_asp_net_user_tokens_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `FK_devices_asp_net_users_AssignedUserId` FOREIGN KEY (`AssignedUserId`) REFERENCES `asp_net_users` (`Id`);

--
-- Constraints for table `device_device_category`
--
ALTER TABLE `device_device_category`
  ADD CONSTRAINT `FK_device_device_category_device_categories_DeviceCategoriesId` FOREIGN KEY (`DeviceCategoriesId`) REFERENCES `device_categories` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_device_device_category_devices_DevicesId` FOREIGN KEY (`DevicesId`) REFERENCES `devices` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `FK_notifications_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `FK_projects_asp_net_users_ManagerId` FOREIGN KEY (`ManagerId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_projects_teams_TeamId` FOREIGN KEY (`TeamId`) REFERENCES `teams` (`Id`);

--
-- Constraints for table `project_user`
--
ALTER TABLE `project_user`
  ADD CONSTRAINT `FK_project_user_asp_net_users_MembersId` FOREIGN KEY (`MembersId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_project_user_projects_ProjectsId` FOREIGN KEY (`ProjectsId`) REFERENCES `projects` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD CONSTRAINT `FK_refresh_tokens_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `FK_requests_asp_net_users_ApprovedId` FOREIGN KEY (`ApprovedId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_requests_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_requests_timesheets_TimesheetId` FOREIGN KEY (`TimesheetId`) REFERENCES `timesheets` (`Id`);

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `FK_teams_asp_net_users_ManagerId` FOREIGN KEY (`ManagerId`) REFERENCES `asp_net_users` (`Id`);

--
-- Constraints for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD CONSTRAINT `FK_timesheets_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `user_details`
--
ALTER TABLE `user_details`
  ADD CONSTRAINT `FK_user_details_asp_net_users_UserId` FOREIGN KEY (`UserId`) REFERENCES `asp_net_users` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
