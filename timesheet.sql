-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 20, 2025 at 11:21 AM
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
-- Table structure for table `aspnetroleclaims`
--

CREATE TABLE `aspnetroleclaims` (
  `Id` int(11) NOT NULL,
  `RoleId` char(36) CHARACTER SET ascii NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aspnetroleclaims`
--

INSERT INTO `aspnetroleclaims` (`Id`, `RoleId`, `ClaimType`, `ClaimValue`) VALUES
(1, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.View'),
(2, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.Create'),
(3, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.Edit'),
(4, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.Delete'),
(5, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.Export'),
(6, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Users.Import'),
(7, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Roles.View'),
(8, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Roles.Create'),
(9, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Roles.Edit'),
(10, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Roles.Delete'),
(11, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Teams.View'),
(12, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Teams.Create'),
(13, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Teams.Edit'),
(14, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Teams.Delete'),
(15, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.WorkTimes.View'),
(16, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.WorkTimes.Create'),
(17, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.WorkTimes.Edit'),
(18, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.WorkTimes.Delete'),
(19, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Projects.View'),
(20, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Projects.Create'),
(21, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Projects.Edit'),
(22, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Projects.Delete'),
(23, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Devices.View'),
(24, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Devices.Create'),
(25, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Devices.Edit'),
(26, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Devices.Delete'),
(27, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Timesheets.View'),
(28, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.Timesheets.Export'),
(29, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.System.SendEmail'),
(30, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.System.Report'),
(31, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.BioStar.SyncUsers'),
(32, '08dd8709-7d15-41ba-880d-1742a91939e9', 'Permission', 'Permissions.BioStar.SyncTimesheets');

-- --------------------------------------------------------

--
-- Table structure for table `aspnetroles`
--

CREATE TABLE `aspnetroles` (
  `Id` char(36) CHARACTER SET ascii NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aspnetroles`
--

INSERT INTO `aspnetroles` (`Id`, `Description`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
('08dd8709-7d15-41ba-880d-1742a91939e9', '', 'Administrator', 'ADMINISTRATOR', '436f9287-3d7b-48d7-8b33-ef6837762cb8');

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserclaims`
--

CREATE TABLE `aspnetuserclaims` (
  `Id` int(11) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `ClaimType` longtext,
  `ClaimValue` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserlogins`
--

CREATE TABLE `aspnetuserlogins` (
  `LoginProvider` varchar(255) NOT NULL,
  `ProviderKey` varchar(255) NOT NULL,
  `ProviderDisplayName` longtext,
  `UserId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserroles`
--

CREATE TABLE `aspnetuserroles` (
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `RoleId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aspnetuserroles`
--

INSERT INTO `aspnetuserroles` (`UserId`, `RoleId`) VALUES
('08dd8709-7df7-405d-866d-b3eacf862e08', '08dd8709-7d15-41ba-880d-1742a91939e9');

-- --------------------------------------------------------

--
-- Table structure for table `aspnetusers`
--

CREATE TABLE `aspnetusers` (
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
  `AccessFailedCount` int(11) NOT NULL,
  `BioStarUserId` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aspnetusers`
--

INSERT INTO `aspnetusers` (`Id`, `FullName`, `Image`, `UserPosition`, `IsFirstLogin`, `RemainingLeaveMinutes`, `UserStatus`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `LastModifiedBy`, `IsDeleted`, `WorkTimeId`, `SupervisorId`, `TeamId`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`, `BioStarUserId`) VALUES
('08dd8709-7df7-405d-866d-b3eacf862e08', 'Administrator', '/uploads/users/avatar_20250429103459_222.png', 0, 1, 0, 0, '2025-04-29 10:34:58.757116', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'admin@admin.com', 'ADMIN@ADMIN.COM', 'admin@admin.com', 'ADMIN@ADMIN.COM', 1, 'AQAAAAIAAYagAAAAEFsXtSEzzPGi2GjkxfFtYmGIT+3ETBa9jMrsluSP4NzUHjZ/rlouTKSNYOYOZngaJQ==', 'WUCTXV36HG37EW2DK46E6424SKM7TDJH', '326bbf97-5477-409f-8d73-a095d010207e', NULL, 0, 0, NULL, 1, 0, NULL),
('08dd978f-3c66-4f28-8685-34a1a548f0da', 'Trần Anh Thư', '/uploads/users/avatar_20250520111232_869.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.522615', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEFYDQ8hg6La+1VN+dzA9nttbyLyUcKbgl95Z+jKfCJBc1vY3Wn2W0xWVUzaNEYQXQg==', '23b85e88-3527-46ee-8a0e-b16354feddf3', '79ffeab6-3357-4bed-9471-82198bd7725e', NULL, 0, 0, NULL, 1, 0, '2'),
('08dd978f-3c68-413f-8b73-ca1051c09071', 'Sếp', '/uploads/users/avatar_20250520111232_646.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523408', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_7', 'bioStar_7', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAAwyFgzQ5xWX9BODTSrdKUNq6N22sSWIYclksK+ssqopXbUo/HkgCCrZBhYUcvkFA==', '621dee54-1fe4-4d48-a700-3fdb24086012', '3b127909-ec26-4f5e-ac7f-087f92c1db2a', NULL, 0, 0, NULL, 1, 0, '7'),
('08dd978f-3c68-4210-83d4-408cd3349252', 'Bạch Thị Hương Giang', '/uploads/users/avatar_20250520111233_233.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523420', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_14', 'bioStar_14', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELUBoN4VcdPn/P9UPQQMEVpWWBEmNRZnzpCrJoSis3s+2QZ5Xju24Yy8qdqrrge5qA==', '119d14f4-7111-44e6-b300-346c86d66db3', '12346e9d-f3cd-4beb-89b4-f26275e3cb35', NULL, 0, 0, NULL, 1, 0, '14'),
('08dd978f-3c68-4274-83fb-041fcef75213', 'Quách Thị Vân Anh', '/uploads/users/avatar_20250520111233_569.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523421', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_15', 'bioStar_15', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFGZKeLE1oSuWtMsKXhY4iKf2HPu7iJf2O4tpulWCVQ2WuBVG8Zt2164Wxvk/eY5+w==', '139fc15b-29ab-44c5-aacb-87df6f22cd61', '1c69b30a-c12b-4dd8-b272-4289a69b5909', NULL, 0, 0, NULL, 1, 0, '15'),
('08dd978f-3c68-42ba-869f-21bddd4eb728', 'Nguyễn Minh Thái', '/uploads/users/avatar_20250520111233_832.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523421', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_18', 'bioStar_18', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBdXPq+Q4ZaL5I6HfNkByEyZuDVPAdr5Cxk6GTUbfMxyiGzt7dJpjpklCXfrISAL7A==', '999552bf-60df-4424-bb07-a4724419815e', '7d9aff54-073d-47aa-88e0-5bf51310f815', NULL, 0, 0, NULL, 1, 0, '18'),
('08dd978f-3c68-42f5-8ec6-96c5761d92d2', 'Nguyễn Đức Thuận', '/uploads/users/avatar_20250520111233_019.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523424', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_19', 'bioStar_19', NULL, NULL, 1, 'AQAAAAIAAYagAAAAENxJ8Sq0iiUAg+4WMIMHZ/+lTAKG0SMcOfVxg4lstQVDApoYMDgI+d+ELNvl4C0+Vg==', '62410369-1ec9-4cd7-8cbb-01f4092d5abe', 'd034ad40-8e3b-42a9-8e7a-2a2e3fcce6e0', NULL, 0, 0, NULL, 1, 0, '19'),
('08dd978f-3c68-433b-833c-b181b251982f', 'Trần Văn Long', '/uploads/users/avatar_20250520111233_946.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523425', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_27', 'bioStar_27', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPUrQVOLKhBTpfsToqez9dYGLw9JtEUXCTZB2aNZKsZi9uKigEsi78Oxk0FQNRmiug==', 'cd687706-c0a3-4990-b179-8d435b7b39a8', 'd9ba6edc-aac7-49bd-b57d-fe820ca8de26', NULL, 0, 0, NULL, 1, 0, '27'),
('08dd978f-3c68-4372-861f-2504250e6eae', 'Vũ Huy Bình (Rikkei)', '/uploads/users/avatar_20250520111233_983.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523437', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_31', 'bioStar_31', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIZnQ51Y8xoXLyCSTBjrxuOCE/VyOa6emY/X9tl9fURUEQ0OLJdL8/k3GA/81uzf2g==', '45012beb-1dbf-4e40-980b-7cffa14ce3d3', '046bc69f-467d-448f-a715-3c6209568e09', NULL, 0, 0, NULL, 1, 0, '31'),
('08dd978f-3c68-43a1-8b26-91b1aa4e99c3', 'Vũ Huyền Ngọc', '/uploads/users/avatar_20250520111233_798.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523452', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_32', 'bioStar_32', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPJlKOM9r6F0H60borZ1voNtdliiGjDfTg0WOGfUPKJHF3rxzXRc5kDiOW6KimOqsg==', 'c6e51521-4e92-4dca-8357-fda70b90c3bd', '0d3a678e-d5d3-4bde-96f6-c7358d829a40', NULL, 0, 0, NULL, 1, 0, '32'),
('08dd978f-3c68-43cb-8e93-0f9deb29f9d1', 'Đào Duy Thắng', '/uploads/users/avatar_20250520111233_570.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523454', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_33', 'bioStar_33', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAI+s/GSbBjvW7GKcvQpQkdtuH1kbp1tXpB3Ky9CTN2M+0ljxa5HDSeOB+3tHK39Pw==', '23a895a9-2b72-4aca-ba4d-922eb1a843ab', 'de4a4bf4-b4e7-4d8e-9214-22d3ef3ffcf9', NULL, 0, 0, NULL, 1, 0, '33'),
('08dd978f-3c68-43fd-8437-8f872e5cd9a4', 'Trần Cảnh Dưỡng', '/uploads/users/avatar_20250520111233_880.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523454', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_39', 'bioStar_39', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIrdB01FWLsBJ+Nfk7jRMIluHsvXp6X5tMt90QKlhvxdjxT+RrzPuMh2ojoRK5NnNQ==', '3ee8ac96-594a-4cfb-9c55-e33cbf7a4dd3', '770f981a-db6f-47c5-9979-94616e610d45', NULL, 0, 0, NULL, 1, 0, '39'),
('08dd978f-3c68-442a-88dc-ef9dc09cc70e', 'Vương Tiến Mạnh', '/uploads/users/avatar_20250520111233_773.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523455', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_43', 'bioStar_43', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHNnJZyXwCtmj3gYUes8FI8Awidw8t+E+ndOiZNwiWr4JjUzSrPrqaSfElMKF9CW3g==', '8c9a0ed0-ed49-4551-b7ed-923c2c56f97c', '7084b335-1ecc-481d-bcb0-aaad65bf81f4', NULL, 0, 0, NULL, 1, 0, '43'),
('08dd978f-3c68-4451-8035-c04a4b1683eb', 'Do Tien Dung', '/uploads/users/avatar_20250520111234_714.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523456', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_46', 'bioStar_46', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMH1JeT6cnob4VGjfyH7GSmJhKLSbyi8YKaPAXVBq3jT4lny0/j5E3WmHOjtRhXx4g==', '5b8c09fc-8c2e-4d67-b5d5-19efe75a3dd3', 'e2e435bf-c7b6-4c7b-baa2-80f5b6bd5078', NULL, 0, 0, NULL, 1, 0, '46'),
('08dd978f-3c68-447f-8f95-c71efd38e129', 'Tang Ngoc Van', '/uploads/users/avatar_20250520111234_445.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523458', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_49', 'bioStar_49', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAzOeDXaVMSYtR64gPYHQA4uv1GzwSD4TMyefGFUG0fkWkckJATUqiAHlIkRqWVflQ==', 'b99ec2c4-a4f3-47c4-a260-15941a94b47b', '16861e67-7cd1-496d-b2a6-589f2ae2210c', NULL, 0, 0, NULL, 1, 0, '49'),
('08dd978f-3c68-44a5-8d3a-f01b507cd357', 'Nguyễn Mạnh Phúc', '/uploads/users/avatar_20250520111234_147.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523459', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_51', 'bioStar_51', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPZPR+6IaGKmFlTuH9ow2OVReBEbAeqOJe2YDxGnTL5TaZ+KrvqWJQw2zthYaIaE6A==', 'e78592b6-a48e-44f7-80cd-f4237c21500f', '2cad2887-29fa-4cf9-af23-c9d0a909e119', NULL, 0, 0, NULL, 1, 0, '51'),
('08dd978f-3c68-44ec-8c7c-e6222be500d1', 'Nomura', '/uploads/users/avatar_20250520111234_550.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523459', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_52', 'bioStar_52', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGR2E6hy4kNYCe3/WPWPXSvIuDOYMWUe0id+RJuZHlUDuTOMM+HdvP76A3ocYQ0whQ==', '29be2f3d-d873-441c-91b2-2afb2e74db0f', '5181bf4d-4d67-4fa2-a8c2-4e1efd84538d', NULL, 0, 0, NULL, 1, 0, '52'),
('08dd978f-3c68-4515-8996-084f7f0b0e00', 'Nakamura', '/uploads/users/avatar_20250520111234_403.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523460', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_53', 'bioStar_53', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHcGl7Dn7K41DHyhqfn1vZQohpp5rORZHiBkX7OhQ2aXObMAR20MpuZqSh8ue0D/Ww==', '5a6843b0-2e93-48a1-97b2-a07575e0e589', '22e92bf4-769b-4b14-b67b-c86aa9854619', NULL, 0, 0, NULL, 1, 0, '53'),
('08dd978f-3c68-4540-8087-4cb845ae71e4', 'HASHIMOTO SEIKA', '/uploads/users/avatar_20250520111234_273.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523467', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEJo4GusHKcqDbU/sLj8hu8FJLyNxUvDOp8DScOrcWusWjWXtv7cc6jbC1THWBgroDQ==', 'd8170a06-5370-4f1f-8824-33935b3bb611', '993764c2-d0be-48cc-a3f5-aad2d5811ed1', NULL, 0, 0, NULL, 1, 0, '54'),
('08dd978f-3c68-456c-8b95-1080e4621796', 'Quản Thị Ngọc', '/uploads/users/avatar_20250520111234_125.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523472', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_55', 'bioStar_55', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBLRtfpqb78Svu3RQQOPNWqmqHegBqNusmj29UbEgYXAfRqJWL9FVG6vlk/WhinOfw==', '8a7a1e9d-b760-4f3f-b4e4-e830f4d419a6', '6cbddb32-9fe2-476f-ab17-bf6c590ed094', NULL, 0, 0, NULL, 1, 0, '55'),
('08dd978f-3c68-4593-8d7e-801019aa9d8d', 'KHANG (rikkei)', '/uploads/users/avatar_20250520111234_770.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523473', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_58', 'bioStar_58', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEEq8dMQPdr5ZqAvAlobv6oK8RKa/IJrhBSxPkpoPtXYv6+X9GIR8lqmP0Bji1EOSFw==', '40e3f385-6480-42d8-9031-2e5761c253fe', '3b8cf803-467c-4d43-9bc6-3756b03ca241', NULL, 0, 0, NULL, 1, 0, '58'),
('08dd978f-3c68-45bd-8234-43273e5c5744', 'IMAI', '/uploads/users/avatar_20250520111234_108.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523474', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_59', 'bioStar_59', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEB9DipOJocGyujlDRHYxvY7TfQBq6b4P0PfiLHGq/DRM02m3HZHeLhUmAxf2eP+Iiw==', 'e3adfe01-d141-4326-a0ab-30f56499c5fe', '5f527e40-5cfa-4f29-a68f-c40d93be1bd0', NULL, 0, 0, NULL, 1, 0, '59'),
('08dd978f-3c68-45e2-8f41-42698652ef39', 'Bac Itose', '/uploads/users/avatar_20250520111234_561.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523474', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_61', 'bioStar_61', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEATPkuT7In4G4NERpSaWUN1JTgcCX8JnchQZVeEvkhuPq8upwds+zUpsF43JCC/c6g==', 'bc128341-255b-4a9b-b8cc-f939e4efc162', '589b7630-10d6-4d74-b207-caaf1234dae6', NULL, 0, 0, NULL, 1, 0, '61'),
('08dd978f-3c68-4608-8e64-5c934ec85340', 'Nguyễn Thị Hà', '/uploads/users/avatar_20250520111235_835.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523475', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_63', 'bioStar_63', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELCPm5H7iKJEqt6eaKM93K7UG42Y7QU04gbt4AG1Pqd/lqpn9Zl9AE3hu/vUb8MjSQ==', 'c81785cd-a0aa-4e76-8dc4-114eea5c344c', '25afd5b6-165f-4879-b4b8-e1fa8df69ecf', NULL, 0, 0, NULL, 1, 0, '63'),
('08dd978f-3c68-4636-85b0-4516030513c3', 'Đặng Quang Khang', '/uploads/users/avatar_20250520111235_802.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523476', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_68', 'bioStar_68', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEM5wjf2/wz204botLrTLt3AkF7L0gAx12ykW21Rv/LBUtTqBUg1d6Mgq1ourVJGUAQ==', 'e31fea2f-0158-438c-8d14-07f9cf66bbb0', '75ee05cb-18cb-46f7-98bd-ed6b5afb8d2f', NULL, 0, 0, NULL, 1, 0, '68'),
('08dd978f-3c68-4667-8103-6697443b4c6b', 'Hoàng Văn Dương', '/uploads/users/avatar_20250520111235_060.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523477', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_70', 'bioStar_70', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAf3+4lZKzsEMcC0l+3BowOG5vtQyxZzifbjLRkjTSDJSY0lWi20lrnCoyWouHX1vw==', 'b493fb89-34ad-4c7c-ac3f-b6c71cc5ffc6', '1095c30b-2937-445e-88d5-689ec3048c12', NULL, 0, 0, NULL, 1, 0, '70'),
('08dd978f-3c68-4698-83a3-4a24cce72fb6', 'Đặng Thị Diễm My', '/uploads/users/avatar_20250520111235_424.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523478', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEC9Lxfp3sh3JAOPmIr2ZEFLZrK+I1m7tr5m81py+BwO6koxXI3sxiQkEpY2BS1IiUw==', 'aa471e52-c7e2-42fc-9342-8a488b6bd50a', 'c8e34620-a23a-49fb-bb33-b220a41756b5', NULL, 0, 0, NULL, 1, 0, '73'),
('08dd978f-3c68-46bf-8e9f-c27af65462fa', 'Trần Việt Sỹ', '/uploads/users/avatar_20250520111235_387.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523486', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEIc7FOgYGb5xxHmp40/A2KJ5eQSckG9EswtF5tv2Rg/kHZHoGN5jPsW0ukKNoaCKlA==', '5da8bc95-3fc7-420c-a422-500f14c0738c', 'cabcf764-9d96-4c8f-a60f-2252a60946f5', NULL, 0, 0, NULL, 1, 0, '74'),
('08dd978f-3c68-46f1-81d7-fb74409cedf8', '', '/uploads/users/avatar_20250520111235_679.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523488', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_76', 'bioStar_76', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJ8VzysPmtSSVdpajlhKrra0rAw8EWbpeP88mojoSH11IVNBQRvy6XT57QAxvYPeTw==', 'd6443e11-a9ab-46d4-8bf3-1f5e7c58f1d2', 'e60a6a5b-8409-417b-a7c4-1cb0926ea891', NULL, 0, 0, NULL, 1, 0, '76'),
('08dd978f-3c68-471b-817a-36d7673a8084', 'Gues1', '/uploads/users/avatar_20250520111235_748.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523489', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_88', 'bioStar_88', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEEKhUUbrnp+fI8tT97lc798JQUGbjyybLM4/vd/YV34axA/vZGmyXy9fy6X2V6ZaeA==', '97ddbf08-0dd9-4c1c-8677-31cd06171c0e', '69b27078-c8ea-435c-bb05-73c833204aa2', NULL, 0, 0, NULL, 1, 0, '88'),
('08dd978f-3c68-48f3-817c-5c60364824e8', 'Guees 2', '/uploads/users/avatar_20250520111235_464.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523490', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_81', 'bioStar_81', NULL, NULL, 1, 'AQAAAAIAAYagAAAAED/DQ2zrOsMDYEV7ky+JJSLk/xcAuHr52z8fYyjNkqffgynPxDCRTNF3o+pcjiRXlg==', 'eae3e682-f9d5-4c86-a694-47df5320a960', '95c7dfd1-307a-4e42-b7ff-5de9aa1276b1', NULL, 0, 0, NULL, 1, 0, '81'),
('08dd978f-3c68-4991-8eb7-153518e9841d', 'GUESS 3', '/uploads/users/avatar_20250520111235_501.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523490', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_83', 'bioStar_83', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFbJsiXSoSp45n1AQMORShe7i7Zv/08diKuj+PZHSMSitufk5bKkVgWZsfK9Z3EtgQ==', '514cc8e4-d7b2-4f7f-80cf-7f48fa34e18a', '749a00c4-bbd7-47f6-9a00-7e6cdee8581a', NULL, 0, 0, NULL, 1, 0, '83'),
('08dd978f-3c68-49f7-87f7-8f14e7792eeb', 'guess 4', '/uploads/users/avatar_20250520111235_222.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523491', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_91', 'bioStar_91', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEI4yYyxFuXsSjZeqMNFalOTrpONicQ3iT7eL0cjqgOE2awx+AHg+dEyOi7T18Xk43g==', 'f91c1202-3c49-41d8-adc9-05e516ac19b1', '6c262739-f4a3-4c80-aa15-3e3183dfd73e', NULL, 0, 0, NULL, 1, 0, '91'),
('08dd978f-3c68-4a3c-8100-6822915582e3', 'guess 5', '/uploads/users/avatar_20250520111236_138.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523492', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_92', 'bioStar_92', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBWf2474V0vkmEhYxnd1QAhDZpIYcRN+g+fKvB5HOT1tWFkAVV3ZlRQiKQ723Zh3Tg==', '13d1ab33-faf8-4313-ab24-9c5605fcf8e2', '38cda0a7-87f0-4bfc-980b-06232e3c0b95', NULL, 0, 0, NULL, 1, 0, '92'),
('08dd978f-3c68-4a86-82a0-d41fd2f9980b', 'guess 6', '/uploads/users/avatar_20250520111236_086.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523492', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_93', 'bioStar_93', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEA3enoAN9gNAdLZala7TauJ7+Jib7sQBwHIXNb9xCt17rXAiRmiHW/aqikK8310MAw==', 'e3f5a1c0-5dff-4800-b06d-103a6aecb1fd', '2b3c1609-8694-47ed-acee-67cffd0022bb', NULL, 0, 0, NULL, 1, 0, '93'),
('08dd978f-3c68-4aef-8cf5-d0cb6e7dc0bb', 'guess 7', '/uploads/users/avatar_20250520111236_700.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523493', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_94', 'bioStar_94', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJX0wD5RgUKY2e6aVeXmTZw+OXlx6Z29YBtlBkbZu+7bFWSWqc/XVL89w+WvPnjohQ==', '7e8458bc-927e-49c4-9068-499e6772befb', '52d8b2b2-9aa0-4702-af23-94efc1877e1f', NULL, 0, 0, NULL, 1, 0, '94'),
('08dd978f-3c68-4b44-874c-619dd964af04', 'guess 8', '/uploads/users/avatar_20250520111236_603.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523500', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_95', 'bioStar_95', NULL, NULL, 1, 'AQAAAAIAAYagAAAAED70mDVPI5S5g9jPKiCYIfc2B2JjOUrM/lGTuXSkuTtMe8CM3IcsyLB0jG+nv1jhGA==', '671c797e-f6ca-47ab-a501-ba977aa916dd', 'ec0638c4-188c-4d97-afeb-b05d80edf175', NULL, 0, 0, NULL, 1, 0, '95'),
('08dd978f-3c68-4b99-84b9-49998d83f959', 'Kien (rikkei)', '/uploads/users/avatar_20250520111236_822.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523501', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_100', 'bioStar_100', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFyAjUd89YXGDWiKYUURRZMSGDBn7AVrRTbfoJCKyQltCEG+chHbtl9jrvEn4TFZSw==', 'd74ab0b0-6298-4a4c-a79b-cdcc5ed4420a', 'b6ab9752-bdc6-41a2-91ea-9f4243f93fe3', NULL, 0, 0, NULL, 1, 0, '100'),
('08dd978f-3c68-4bf3-8c81-3d4151f64a83', 'Vi Van Hung', '/uploads/users/avatar_20250520111236_832.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523502', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_101', 'bioStar_101', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGMnoNk7WwQC08eU9k3z2b9xGVm6uGqRtPlgB2CQKqHWFJKuc6VmvAct/9+jabmQfA==', 'f3a9d2b5-9524-43ba-b894-838e9987b660', '1c4a790f-85b2-4aec-827e-6330bfb0c5dc', NULL, 0, 0, NULL, 1, 0, '101'),
('08dd978f-3c68-4c65-815a-3bbf65210434', 'Hai rikkei', '/uploads/users/avatar_20250520111236_147.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523502', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_104', 'bioStar_104', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMHQ1xFAMoIr3zH++LNb4gOmd2ygyaSS8+rWGiwZM0oaveJb+PvRCdkdeDsdQ4hRGg==', '81e84fe6-d280-4fe2-9e9e-e778b15a2176', '7b271dff-80f6-4a6b-8d49-847673ea7c3c', NULL, 0, 0, NULL, 1, 0, '104'),
('08dd978f-3c68-4cb2-821b-566f5e2bdeb2', 'Pham Quang Linh (VMO)', '/uploads/users/avatar_20250520111236_558.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523503', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_112', 'bioStar_112', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEA2a6sARr7rSOp70WbiCqwxJQBkkssY2JCSmoxn1+OY66sWm92BoDoSe/inGwsfuJQ==', 'b0504ae4-2ddc-43e6-acba-d384235e616f', '6f9926e5-72ef-4467-a0de-783447fcc691', NULL, 0, 0, NULL, 1, 0, '112'),
('08dd978f-3c68-4cfe-89e0-ffd79ea8b997', 'Nguyễn Việt Hùng', '/uploads/users/avatar_20250520111236_948.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523504', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAELju61h/DrTxB+TYdalQk3IhXqlkKMZpPHrGBEkOwQomGX7G8GgFdYrhjGMolaWvmg==', 'b2834d23-e6b0-4aa0-8914-c62156cfb29f', '474d1dca-e8da-4f40-b5ee-571741bc4530', NULL, 0, 0, NULL, 1, 0, '113'),
('08dd978f-3c68-4d55-8a2f-dc5a74e8ba07', 'Quynh (VMO)', '/uploads/users/avatar_20250520111236_207.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523505', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_114', 'bioStar_114', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIKEYPehS9cAn+je5xM+VgXfHwwS9txUIR+nlqMlQOhMTFjYm76TPq/o/AJyL67vGw==', 'f0cf2d06-1cf9-442a-ae55-597f5d485558', '20e4aa08-adcf-4681-9d78-207e8b218bf8', NULL, 0, 0, NULL, 1, 0, '114'),
('08dd978f-3c68-4da4-8879-572a5eab12f2', 'Irikura', '/uploads/users/avatar_20250520111236_415.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523506', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_117', 'bioStar_117', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHT8KakHThWpWncHy92QZ/u+5XOY2Atm2417VIlSkqWafMlWtVyZAle88L5kK8ckUw==', '7cf8e619-9106-47a5-9484-7ef9f85dbb53', '16a3826a-dd5c-4a5a-b184-465aef5b4960', NULL, 0, 0, NULL, 1, 0, '117'),
('08dd978f-3c68-4de1-8af6-7d8298a410f8', 'Ngo thanh tung', '/uploads/users/avatar_20250520111237_482.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523506', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_118', 'bioStar_118', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEO84qRnzedtsZfM42J1q4Q0e8dVYN4V8XniCoQay1NAR0fPmRpLxL4eW55JoOxunCQ==', 'eb24c6b5-7a37-4183-8c61-c325b4a7fcac', '42993865-bf06-46e3-b06e-9492525b78c3', NULL, 0, 0, NULL, 1, 0, '118'),
('08dd978f-3c68-4e28-8741-7af36134fab6', 'Trần Thị Phương Thảo', '/uploads/users/avatar_20250520111237_248.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523507', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAENEwoYEbBrglh5DSj8SdUirXdu2wTvQGUrregysKppnyaGzYGYnp24w72IpheDM4SA==', 'e9948b15-2b8b-4529-b5c3-b2d4535bd6d6', 'fd6f8287-c943-475d-84a3-6521ea42265a', NULL, 0, 0, NULL, 1, 0, '200'),
('08dd978f-3c68-4e66-8c1e-12321ba6549f', 'Phạm An Thiện (fabbi)', '/uploads/users/avatar_20250520111237_726.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523514', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_201', 'bioStar_201', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEP30TG98ibSmbSCsdCUNFWg3UEkHe76vse0o8XZz22kcfAbh3o7tnrvawHc4nkTipA==', 'da7809a7-c698-4321-a801-a8a741aede28', '290c47a1-e894-44d3-9bb0-85551145cc22', NULL, 0, 0, NULL, 1, 0, '201'),
('08dd978f-3c68-4eae-8f48-81fba7f784c0', 'Nguyễn Bảo Lộc (fabbi)', '/uploads/users/avatar_20250520111237_828.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523516', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_202', 'bioStar_202', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEF4sCeWnRud2nZ+4x6WnspuozwcWHrO2WBVOq3O9AWx9VRibxEBaZbNCINkQ1lf1Aw==', '7c1e3abc-8874-4730-88f0-e67afcce1208', '9e478fc2-08f5-4ddc-b420-8cc3fc1d0b05', NULL, 0, 0, NULL, 1, 0, '202'),
('08dd978f-3c68-4ef9-8f21-4439e75866ae', 'Đỗ Thị Thúy Ngọc (fabbi)', '/uploads/users/avatar_20250520111237_978.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523518', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_203', 'bioStar_203', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGhY58stRy5iMPLBkLR9Y/k6OUYhJR4grLXtjTt/tG2moeD0fOYI3NgfhTWIQ/QfiA==', '961a0120-20d3-474d-9d06-65544867b1b9', '91d1ba20-483e-4eca-a522-81a799702e4d', NULL, 0, 0, NULL, 1, 0, '203'),
('08dd978f-3c69-42b2-830b-a84fd96231e6', 'Nguyễn Tiến Thành (fabbi)', '/uploads/users/avatar_20250520111237_230.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523519', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_204', 'bioStar_204', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAUqeZta2O7h83MDW/t6b9vhWS6Mmwm5mH9xRMnBuCtwWOmjV1swYBTMbsEg2T7gbg==', '239e5cc9-9dc0-4ed4-a3b4-7c8e484c31fa', 'c405fd83-542d-4601-bf26-40784e0a180f', NULL, 0, 0, NULL, 1, 0, '204'),
('08dd978f-3c69-434b-8bc9-0857a0bc14b3', 'Nguyen Tien Nghia (fabbi)', '/uploads/users/avatar_20250520111237_037.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523520', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_208', 'bioStar_208', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMyndJgMwzJkbNdx3NzkkXo2Vu0KDTBB+tYIgvyL0J5ICsx1TG3XCpoeMtCcwsD6cQ==', '54875d26-00b4-4652-a236-b6ea1eb40528', 'fd05df2c-9e45-4766-b581-949fb7f4ffaa', NULL, 0, 0, NULL, 1, 0, '208'),
('08dd978f-3c69-43a5-8e61-cf55651c528b', 'Hayashi MSR', '/uploads/users/avatar_20250520111238_654.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523520', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_209', 'bioStar_209', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIN+eJuWpYV/HroE2Uc5idcjjiQ9YDb4LsWr01lEhEbUgte+prcQOOSYt0cLK18RUA==', '9c86fb14-f48c-4c1e-80c4-45ceef751f26', 'f8ccd9c1-50f5-41a3-b241-7affce4ef823', NULL, 0, 0, NULL, 1, 0, '209'),
('08dd978f-3c69-43f6-817c-13284d5ecf38', 'Phùng Đức Long (Onsite)', '/uploads/users/avatar_20250520111238_933.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523521', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 1, 'AQAAAAIAAYagAAAAELFJ+VG+AA9408P9GbrOp3F8N/Kls1Z4U+jnKEicNke9FfjydFPl3G2Za5IQUDtDOw==', 'bee83793-a3ce-4393-a7f0-b5ef4c0d480c', '3f0eb465-d5a5-4665-a99c-f8e4b211eb9f', NULL, 0, 0, NULL, 1, 0, '210'),
('08dd978f-3c69-4433-8148-ce98c8f26c16', 'Trieu anh Tuan Onsite', '/uploads/users/avatar_20250520111238_523.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523522', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_211', 'bioStar_211', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEPP+Mvhdy57Wr0HXu1usQPNPDfpHAVQSeS4pytvZ6Ao2dAuy6OhyOOCPqT3fRp0z6w==', 'aaa1cdbc-1405-4395-824e-5f1b4e100376', '229cff32-cc45-40d9-b9bf-8946ae4bbcf2', NULL, 0, 0, NULL, 1, 0, '211'),
('08dd978f-3c69-4482-820f-426bf374327a', 'Trần Văn Tuyên', '/uploads/users/avatar_20250520111238_289.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523523', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_213', 'bioStar_213', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDyZpq1QhdBQmdOK73sBUJAmOczbscSqOyYqOXOYoov/lMeeGRcf3/wfEnFJ0wrVJQ==', 'f918f270-aa4b-4352-948f-0c9b60e04f58', 'ad278288-a207-460e-bc1e-98adb63f43b9', NULL, 0, 0, NULL, 1, 0, '213'),
('08dd978f-3c69-44bc-81df-521ced6375f8', 'Dinh (extreme)', '/uploads/users/avatar_20250520111238_054.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523529', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_214', 'bioStar_214', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFYz7IwBnXN8L9G7rFaXI4/ecutRAxWJEueTnS/VxNhHRHLpi/nXjfFAYuMHe7gM6Q==', 'ff346181-f1c3-4fdf-bca8-ad63629ae3cb', '1a9fcbf6-31c8-47b1-9fd6-8903c07cd0ce', NULL, 0, 0, NULL, 1, 0, '214'),
('08dd978f-3c69-44fd-8b7f-b44e0786ae91', 'Vu Binh Giang', '/uploads/users/avatar_20250520111238_640.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523530', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 1, 'AQAAAAIAAYagAAAAECFtGCy2McsNol7dq9GS2LK07Bi5SXErFuQ7ao8X/wK7gLaxupjmHUu9PjTdn0Bagg==', '08f82ad2-7f60-45e1-b090-67f6095811b6', '7f766763-9290-4116-b17c-9ce6f31f13f7', NULL, 0, 0, NULL, 1, 0, '215'),
('08dd978f-3c69-4534-8ce7-644daa5158ae', 'Card 1', '/uploads/users/avatar_20250520111238_458.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523531', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_120', 'bioStar_120', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEETrjIZPXd9Kvi9Bw4XuXUDInH/QirFWmTnMybtNJiW94BnV1RFVpx4Tzz0Ncgrz2Q==', '61efa38c-5dbf-4f4a-9c72-99503d43fc0d', 'e009ab47-fe94-4d7e-9825-306d2bd48023', NULL, 0, 0, NULL, 1, 0, '120'),
('08dd978f-3c69-4578-8038-36dd13f4c2e2', 'card3', '/uploads/users/avatar_20250520111239_894.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523531', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_122', 'bioStar_122', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECE5YCmJQvs877DPVr1xYhVGmD1b7kWgjZbAHpT/LSqu6CNYPz2zw2luLP2Rlx2gAg==', '4d1e7149-5bb1-4538-9daa-aa3a6c11dca4', 'ce8a0a01-2e99-49fd-9cfd-be45579a0fac', NULL, 0, 0, NULL, 1, 0, '122'),
('08dd978f-3c69-45af-8026-247e5964200a', 'card 2', '/uploads/users/avatar_20250520111239_598.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523532', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_121', 'bioStar_121', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFBCGXoWQwXscin9eAsWdBQo2BfxrwSFRe4A+7LjL7c56SU1dt0RAzJL60SgIuEpoQ==', 'e9d2b5be-48ec-4b76-b550-7d9de7eea5ed', 'e3c865c6-e15e-47c4-8fbd-12375783f369', NULL, 0, 0, NULL, 1, 0, '121'),
('08dd978f-3c69-45f7-8212-d375760c1635', 'card 4', '/uploads/users/avatar_20250520111239_008.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523533', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_123', 'bioStar_123', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHsgP3EU4t+ueH0MD43VmAYLsTqGRl8jGpLXfqlS0xzBgtccW3L2U9qUNlrnEhPFlA==', 'b12012df-15e6-4bb6-a437-a89dea8c85e1', 'ef0c9eed-e41a-4bff-b011-1c76fe0423d8', NULL, 0, 0, NULL, 1, 0, '123'),
('08dd978f-3c69-4633-837a-67d467733ecb', 'card5', '/uploads/users/avatar_20250520111239_473.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523533', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_124', 'bioStar_124', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEByJi1+EZytnVemZYsBzISmqHB85qim5CZduhynRQxMm7DXVrpIfjA3JmxAU/eQETQ==', '7d676ad5-e0ae-42f6-9253-ba6dc9ff375a', '5dcc8e82-d081-42ce-8ac0-66958bb5feff', NULL, 0, 0, NULL, 1, 0, '124'),
('08dd978f-3c69-466f-8f82-52ef19fe29a6', 'card6', '/uploads/users/avatar_20250520111239_353.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523534', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_125', 'bioStar_125', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHhaAaSgNRPwMqQGxVlmjcUFNz/t4KopLunMr83iQ/1mWoCNZzhrPx7MwP+fDWnWsA==', 'd8677949-8bdf-46a3-b792-ccb1f3e0c3ce', '9b80e8b6-6eb7-4181-94e9-36028d76c835', NULL, 0, 0, NULL, 1, 0, '125'),
('08dd978f-3c69-46a7-8351-5704928fe52b', 'card7', '/uploads/users/avatar_20250520111240_914.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523535', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_126', 'bioStar_126', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHnz1f5Vnaa2y9to4OcfvMHTPs5dbeX4089QaTbFb+oFfYsyRFKo2GT+8pOFgeLJmg==', '55193088-fe3d-40d6-a629-5c7396e3e8c1', 'a290c25b-33f0-4388-9ad5-e52ffd978c08', NULL, 0, 0, NULL, 1, 0, '126'),
('08dd978f-3c69-46e4-8cc1-83128c886052', 'card 8', '/uploads/users/avatar_20250520111240_611.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523540', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_127', 'bioStar_127', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKgL7dkDgHFAv5+FQNZymu4pCh6n0dmnhlr5/j0d5YFM2jQu2WPZyFJls0YY5G9A/Q==', '17afcf65-91a7-4abb-90d0-9d8d8698c1d7', '34e991a0-5b01-422b-9a76-52c9e76f3a6e', NULL, 0, 0, NULL, 1, 0, '127'),
('08dd978f-3c69-471b-875e-379e0face207', 'card9', '/uploads/users/avatar_20250520111240_153.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523541', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_128', 'bioStar_128', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFGqad8hco3yATAH0TqTXGM/sI6pXOZt31peCETjWFj7Lg9NEqg6TQNwvOtuIz2tVQ==', '97b43b93-dde1-46ea-b1da-e4c02c85626e', '141c9c21-2812-4017-953f-6d3b44597e0d', NULL, 0, 0, NULL, 1, 0, '128'),
('08dd978f-3c69-4754-89e6-dec49d114d7f', 'card10', '/uploads/users/avatar_20250520111240_298.png', NULL, 1, 0, 0, '2025-05-20 11:12:32.523541', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_129', 'bioStar_129', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEH7HMSULToP5QqXkfFDvE8qfEJl8CVdO8OshwbM2aA+RW/Dht6Y6B1hjavLDcNXw5g==', '80abba62-3e66-458f-9063-2996f379972e', 'd862910e-779a-4575-a1c9-a8d694dd00a8', NULL, 0, 0, NULL, 1, 0, '129');

-- --------------------------------------------------------

--
-- Table structure for table `aspnetusertokens`
--

CREATE TABLE `aspnetusertokens` (
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `LoginProvider` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Value` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
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
-- Table structure for table `devicecategories`
--

CREATE TABLE `devicecategories` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devicedevicecategory`
--

CREATE TABLE `devicedevicecategory` (
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
  `Category` int(11) NOT NULL,
  `IsRead` tinyint(1) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL,
  `Date` datetime(6) NOT NULL DEFAULT '0001-01-01 00:00:00.000000',
  `RelatedEntityId` longtext
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
-- Table structure for table `projectuser`
--

CREATE TABLE `projectuser` (
  `MembersId` char(36) CHARACTER SET ascii NOT NULL,
  `ProjectsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `refreshtokens`
--

CREATE TABLE `refreshtokens` (
  `Id` int(11) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Expires` datetime(6) NOT NULL,
  `RememberMe` tinyint(1) NOT NULL,
  `Created` datetime(6) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `refreshtokens`
--

INSERT INTO `refreshtokens` (`Id`, `Token`, `Expires`, `RememberMe`, `Created`, `UserId`) VALUES
(2, 'mHyR+vERLUHJYtD9h6l3cEa563fcxH3/cCSonaTAm4U=', '2025-05-26 04:50:37.727151', 1, '2025-05-16 09:29:37.861466', '08dd8709-7df7-405d-866d-b3eacf862e08'),
(7, 'STV2W8pYz6e/S3ZnoYwjNDlmS2TSgLWAbpioVxsE+TE=', '2025-05-27 11:12:04.522966', 1, '2025-05-19 06:53:41.837563', '08dd8709-7df7-405d-866d-b3eacf862e08');

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
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timesheets`
--

INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `UserId`, `IsActive`) VALUES
('08dd9790-598f-494c-8bfe-a89666ad5b6c', '2025-05-20 00:00:00.000000', '2025-05-20 18:20:40.000000', NULL, 0, '08dd978f-3c68-4c65-815a-3bbf65210434', 1),
('08dd9790-7778-4f93-824b-2ada54c8f6e5', '2025-05-20 00:00:00.000000', '2025-05-20 18:21:30.000000', NULL, 0, '08dd978f-3c68-4e66-8c1e-12321ba6549f', 1);

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
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
-- Table structure for table `worktimes`
--

CREATE TABLE `worktimes` (
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
-- Dumping data for table `worktimes`
--

INSERT INTO `worktimes` (`Id`, `Title`, `StartTimeMorning`, `EndTimeMorning`, `StartTimeAfternoon`, `EndTimeAfternoon`, `AllowedLateMinutes`, `CreatedAt`, `UpdatedAt`, `CreatedBy`, `LastModifiedBy`) VALUES
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
('20250331074140_Init', '8.0.12'),
('20250401163106_Init2', '8.0.12'),
('20250408110006_Rename timesheet property', '8.0.12'),
('20250410123036_Init3', '8.0.12'),
('20250410144313_Init4', '8.0.12'),
('20250411065558_Init5', '8.0.12'),
('20250417104919_Init7', '8.0.12'),
('20250418084438_Init8', '8.0.12'),
('20250425105645_Init9', '8.0.12'),
('20250428100513_Init10', '8.0.12'),
('20250505171129_Init11', '8.0.12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`);

--
-- Indexes for table `aspnetroles`
--
ALTER TABLE `aspnetroles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- Indexes for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetUserClaims_UserId` (`UserId`);

--
-- Indexes for table `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_AspNetUserLogins_UserId` (`UserId`);

--
-- Indexes for table `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- Indexes for table `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`),
  ADD KEY `IX_AspNetUsers_SupervisorId` (`SupervisorId`),
  ADD KEY `IX_AspNetUsers_TeamId` (`TeamId`),
  ADD KEY `IX_AspNetUsers_WorkTimeId` (`WorkTimeId`);

--
-- Indexes for table `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Device_AssignedUserId` (`AssignedUserId`);

--
-- Indexes for table `devicecategories`
--
ALTER TABLE `devicecategories`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `devicedevicecategory`
--
ALTER TABLE `devicedevicecategory`
  ADD PRIMARY KEY (`DeviceCategoriesId`,`DevicesId`),
  ADD KEY `IX_DeviceDeviceCategory_DevicesId` (`DevicesId`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Notifications_UserId` (`UserId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Projects_ManagerId` (`ManagerId`),
  ADD KEY `IX_Projects_TeamId` (`TeamId`);

--
-- Indexes for table `projectuser`
--
ALTER TABLE `projectuser`
  ADD PRIMARY KEY (`MembersId`,`ProjectsId`),
  ADD KEY `IX_ProjectUser_ProjectsId` (`ProjectsId`);

--
-- Indexes for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_RefreshTokens_UserId` (`UserId`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Requests_ApprovedId` (`ApprovedId`),
  ADD KEY `IX_Requests_TimesheetId` (`TimesheetId`),
  ADD KEY `IX_Requests_UserId` (`UserId`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Teams_ManagerId` (`ManagerId`);

--
-- Indexes for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Timesheets_UserId` (`UserId`);

--
-- Indexes for table `userdetails`
--
ALTER TABLE `userdetails`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IX_UserDetails_UserId` (`UserId`);

--
-- Indexes for table `worktimes`
--
ALTER TABLE `worktimes`
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
-- AUTO_INCREMENT for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `devicecategories`
--
ALTER TABLE `devicecategories`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userdetails`
--
ALTER TABLE `userdetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `worktimes`
--
ALTER TABLE `worktimes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD CONSTRAINT `FK_AspNetUsers_AspNetUsers_SupervisorId` FOREIGN KEY (`SupervisorId`) REFERENCES `aspnetusers` (`Id`),
  ADD CONSTRAINT `FK_AspNetUsers_Teams_TeamId` FOREIGN KEY (`TeamId`) REFERENCES `teams` (`Id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_AspNetUsers_WorkTimes_WorkTimeId` FOREIGN KEY (`WorkTimeId`) REFERENCES `worktimes` (`Id`);

--
-- Constraints for table `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `device`
--
ALTER TABLE `device`
  ADD CONSTRAINT `FK_Device_AspNetUsers_AssignedUserId` FOREIGN KEY (`AssignedUserId`) REFERENCES `aspnetusers` (`Id`);

--
-- Constraints for table `devicedevicecategory`
--
ALTER TABLE `devicedevicecategory`
  ADD CONSTRAINT `FK_DeviceDeviceCategory_DeviceCategories_DeviceCategoriesId` FOREIGN KEY (`DeviceCategoriesId`) REFERENCES `devicecategories` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DeviceDeviceCategory_Device_DevicesId` FOREIGN KEY (`DevicesId`) REFERENCES `device` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `FK_Notifications_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `FK_Projects_AspNetUsers_ManagerId` FOREIGN KEY (`ManagerId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Projects_Teams_TeamId` FOREIGN KEY (`TeamId`) REFERENCES `teams` (`Id`);

--
-- Constraints for table `projectuser`
--
ALTER TABLE `projectuser`
  ADD CONSTRAINT `FK_ProjectUser_AspNetUsers_MembersId` FOREIGN KEY (`MembersId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_ProjectUser_Projects_ProjectsId` FOREIGN KEY (`ProjectsId`) REFERENCES `projects` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD CONSTRAINT `FK_RefreshTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `FK_Requests_AspNetUsers_ApprovedId` FOREIGN KEY (`ApprovedId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Requests_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Requests_Timesheets_TimesheetId` FOREIGN KEY (`TimesheetId`) REFERENCES `timesheets` (`Id`);

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `FK_Teams_AspNetUsers_ManagerId` FOREIGN KEY (`ManagerId`) REFERENCES `aspnetusers` (`Id`);

--
-- Constraints for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD CONSTRAINT `FK_Timesheets_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `userdetails`
--
ALTER TABLE `userdetails`
  ADD CONSTRAINT `FK_UserDetails_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
