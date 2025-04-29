-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2025 at 11:27 AM
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
('08dd8709-7df7-405d-866d-b3eacf862e08', 'Administrator', '/uploads/users/avatar_20250429103459_222.png', 0, 1, 0, 0, '2025-04-29 10:34:58.757116', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'admin@admin.com', 'ADMIN@ADMIN.COM', 'admin@admin.com', 'ADMIN@ADMIN.COM', 1, 'AQAAAAIAAYagAAAAEFsXtSEzzPGi2GjkxfFtYmGIT+3ETBa9jMrsluSP4NzUHjZ/rlouTKSNYOYOZngaJQ==', 'WUCTXV36HG37EW2DK46E6424SKM7TDJH', '8ac9137b-bdce-4d00-ac7f-d4f435489ca5', NULL, 0, 0, NULL, 1, 0, NULL),
('08dd8709-954a-413c-80c0-9d1a435ccf9b', 'Trần Anh Thư', '/uploads/users/avatar_20250429103538_723.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.143987', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_2', 'bioStar_2', NULL, NULL, 1, NULL, '5f417a9f-04de-49e6-9ef6-acda8607ad6b', '9b5bc678-7cf5-4210-9278-6937d7dd83d3', NULL, 0, 0, NULL, 1, 0, '2'),
('08dd8709-954a-4580-8717-cab0a1611e27', 'Sếp', '/uploads/users/avatar_20250429103538_847.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144216', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_7', 'bioStar_7', NULL, NULL, 1, NULL, '8c1b19bd-2ca6-4c54-ae5f-deccdc63e040', 'dbc7d1b2-71f8-4e57-a09b-c2e6d982ea7d', NULL, 0, 0, NULL, 1, 0, '7'),
('08dd8709-954a-45eb-8717-e206bc802c0e', 'Bạch Thị Hương Giang', '/uploads/users/avatar_20250429103538_161.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144237', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_14', 'bioStar_14', NULL, NULL, 1, NULL, '1fade7c8-44df-4851-bdfd-33ee18429e8c', '7bc3a90d-0013-499d-9515-ded4824bc783', NULL, 0, 0, NULL, 1, 0, '14'),
('08dd8709-954a-464e-81ee-700a03563827', 'Quách Thị Vân Anh', '/uploads/users/avatar_20250429103538_261.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144238', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_15', 'bioStar_15', NULL, NULL, 1, NULL, '2d14ffac-b8d9-4b30-bc50-967a17571327', '23159f19-d4c3-40f9-84c7-ee701eaba449', NULL, 0, 0, NULL, 1, 0, '15'),
('08dd8709-954a-46be-8fad-06df8c09b3b0', 'Nguyễn Minh Thái', '/uploads/users/avatar_20250429103538_858.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144241', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_18', 'bioStar_18', NULL, NULL, 1, NULL, 'a6e29f20-70d0-4a77-b101-82bef7f465c5', '82d2663d-8a06-4fe0-a390-a1c054abe9a9', NULL, 0, 0, NULL, 1, 0, '18'),
('08dd8709-954a-46fa-888f-99ca5348965d', 'Nguyễn Đức Thuận', '/uploads/users/avatar_20250429103538_220.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144242', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_19', 'bioStar_19', NULL, NULL, 1, NULL, 'c32b3140-b396-4387-851c-dbc9338fa704', 'b677f780-c4cc-4253-8383-aa8c437a8f2e', NULL, 0, 0, NULL, 1, 0, '19'),
('08dd8709-954a-472a-8712-4c6ab95b0d03', 'Trần Văn Long', '/uploads/users/avatar_20250429103538_239.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144243', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_27', 'bioStar_27', NULL, NULL, 1, NULL, '56b26643-7e6a-4c96-aeee-a4f10519959c', '36c7b2df-122f-4930-82f8-9bced5ee8852', NULL, 0, 0, NULL, 1, 0, '27'),
('08dd8709-954a-475d-81e4-101301e27e19', 'Vũ Huy Bình (Rikkei)', '/uploads/users/avatar_20250429103538_954.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144244', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_31', 'bioStar_31', NULL, NULL, 1, NULL, '62c2a4bd-86d9-4fa6-80e1-b34a2d71150a', '3db517c0-8ebc-4a65-a872-66aaafb7c2b6', NULL, 0, 0, NULL, 1, 0, '31'),
('08dd8709-954a-47a4-8c7e-0ab3434abda8', 'Vũ Huyền Ngọc', '/uploads/users/avatar_20250429103538_338.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144245', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_32', 'bioStar_32', NULL, NULL, 1, NULL, '122f779b-27de-421e-ae9d-3434f959b23a', 'd2672f6b-c770-43d0-b547-867fddbb6680', NULL, 0, 0, NULL, 1, 0, '32'),
('08dd8709-954a-47eb-858f-321882edd575', 'Đào Duy Thắng', '/uploads/users/avatar_20250429103538_040.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144245', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_33', 'bioStar_33', NULL, NULL, 1, NULL, '1972923d-66ee-4769-92d0-15351dffeac4', '8dfb75f1-1326-4f42-9cc5-dce8e013f459', NULL, 0, 0, NULL, 1, 0, '33'),
('08dd8709-954a-4822-880e-6249942e30ca', 'Trần Cảnh Dưỡng', '/uploads/users/avatar_20250429103538_110.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144246', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_39', 'bioStar_39', NULL, NULL, 1, NULL, '72528ef0-17ec-4975-8c8c-7e5f6da671b2', '1feb311d-39bb-4a53-ba30-74c0fc07c78d', NULL, 0, 0, NULL, 1, 0, '39'),
('08dd8709-954a-4855-835d-b00060f56f6e', 'Vương Tiến Mạnh', '/uploads/users/avatar_20250429103538_261.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144254', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_43', 'bioStar_43', NULL, NULL, 1, NULL, 'a332eedb-1d30-4354-99d6-6d144d15b8b5', '748d5c53-6f80-4724-9b37-fd0ef2a036e4', NULL, 0, 0, NULL, 1, 0, '43'),
('08dd8709-954a-4886-8cca-48a32e10a40f', 'Do Tien Dung', '/uploads/users/avatar_20250429103538_013.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144255', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_46', 'bioStar_46', NULL, NULL, 1, NULL, 'ad166232-a621-4599-aca6-df9e50e3530c', '20196a51-5cfd-48f2-8082-c0c7672c9453', NULL, 0, 0, NULL, 1, 0, '46'),
('08dd8709-954a-48bc-8a85-d5fcac952cda', 'Tang Ngoc Van', '/uploads/users/avatar_20250429103538_957.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144256', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_49', 'bioStar_49', NULL, NULL, 1, NULL, '72b4f6df-bf8b-4478-85d1-fbbb9c21c334', 'ebec7516-7172-4bb6-b3d2-bb258f5908dd', NULL, 0, 0, NULL, 1, 0, '49'),
('08dd8709-954a-48f7-8800-78bd828213a5', 'Nguyễn Mạnh Phúc', '/uploads/users/avatar_20250429103538_455.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144257', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_51', 'bioStar_51', NULL, NULL, 1, NULL, '16fcf0e2-2eaf-4ee0-9fc3-0ba36ce3b920', '9207d0e3-a683-4959-9acb-b48a7b896a22', NULL, 0, 0, NULL, 1, 0, '51'),
('08dd8709-954a-492a-8635-65c157d65e0d', 'Nomura', '/uploads/users/avatar_20250429103538_967.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144258', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_52', 'bioStar_52', NULL, NULL, 1, NULL, 'a91205cb-6d5e-4808-bca0-48bcbdaec0ee', '79b8e7ff-e128-44fa-b99d-b9ae955e4fae', NULL, 0, 0, NULL, 1, 0, '52'),
('08dd8709-954a-4964-8555-271eebbf90fc', 'Nakamura', '/uploads/users/avatar_20250429103538_075.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144259', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_53', 'bioStar_53', NULL, NULL, 1, NULL, '02195d7e-9a49-4287-a613-c4150c3549b8', 'a0371c2b-b1b0-46a9-b380-04d1bfe4d2a6', NULL, 0, 0, NULL, 1, 0, '53'),
('08dd8709-954a-4997-82bd-b138cfe5577d', 'HASHIMOTO SEIKA', '/uploads/users/avatar_20250429103538_885.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144260', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 1, NULL, '9f30165b-59f2-4116-8559-79ae025afc57', 'b274cb94-a4b9-4ad0-9ba6-ab61a7e21148', NULL, 0, 0, NULL, 1, 0, '54'),
('08dd8709-954a-49ce-8811-17f40b1c65df', 'Quản Thị Ngọc', '/uploads/users/avatar_20250429103538_866.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144266', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_55', 'bioStar_55', NULL, NULL, 1, NULL, '31fcf743-4d43-4dbf-ba52-9c41cdaee45f', 'dee1999c-2ae9-4956-915a-ea7e27531cc4', NULL, 0, 0, NULL, 1, 0, '55'),
('08dd8709-954a-4a21-8347-2682bcaa62e9', 'KHANG (rikkei)', '/uploads/users/avatar_20250429103538_562.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144267', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_58', 'bioStar_58', NULL, NULL, 1, NULL, '1774b036-d4b6-46ac-87c8-67a46d1fd9aa', '25eed669-e9c2-4ad5-a847-a914a0ba86d6', NULL, 0, 0, NULL, 1, 0, '58'),
('08dd8709-954a-4a68-885c-dcd06fadbe24', 'IMAI', '/uploads/users/avatar_20250429103538_794.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144275', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_59', 'bioStar_59', NULL, NULL, 1, NULL, 'd4bf8f34-dc6f-41a7-91e5-2521ca30c833', '6cbafad0-26e5-49b6-9768-1a0d14d68a37', NULL, 0, 0, NULL, 1, 0, '59'),
('08dd8709-954a-4a9e-8ff9-1262b0f8eb01', 'Bac Itose', '/uploads/users/avatar_20250429103538_817.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144276', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_61', 'bioStar_61', NULL, NULL, 1, NULL, '26c42d70-b191-4206-a933-75804923e08a', '29e4d3c6-17c8-40ed-9588-55ec4397910e', NULL, 0, 0, NULL, 1, 0, '61'),
('08dd8709-954a-4ae0-832a-27fbe1f5ac38', 'Nguyễn Thị Hà', '/uploads/users/avatar_20250429103538_981.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144277', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_63', 'bioStar_63', NULL, NULL, 1, NULL, '081d84ff-92f0-4175-9016-17313c97596f', '7e1881cc-64d6-4350-a71c-e1e7608f3716', NULL, 0, 0, NULL, 1, 0, '63'),
('08dd8709-954a-4b1b-8d94-d0f411a52075', 'Đặng Quang Khang', '/uploads/users/avatar_20250429103538_202.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144278', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_68', 'bioStar_68', NULL, NULL, 1, NULL, '10c03f03-4568-46b8-9891-00d39bef51a3', 'bd95efd9-b23d-449c-849c-467169a988a3', NULL, 0, 0, NULL, 1, 0, '68'),
('08dd8709-954a-4b91-8ea0-9121624181a5', 'Hoàng Văn Dương', '/uploads/users/avatar_20250429103538_932.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144279', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_70', 'bioStar_70', NULL, NULL, 1, NULL, '5f63954e-7aea-4b74-a064-1116f2c9f8cb', 'e7b74418-126f-49d1-955f-fa8920140851', NULL, 0, 0, NULL, 1, 0, '70'),
('08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 'Đặng Thị Diễm My', '/uploads/users/avatar_20250429103538_597.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144280', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 1, NULL, 'ac910682-6b41-44eb-a199-83a03126d996', '18116e83-c9d3-4162-8dfe-acbe72b9308f', NULL, 0, 0, NULL, 1, 0, '73'),
('08dd8709-954a-4c16-8ffb-059f0ea66e2c', 'Trần Việt Sỹ', '/uploads/users/avatar_20250429103538_449.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144282', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 1, NULL, 'b9b48d70-40c8-4499-a3bf-e9f862c5946a', 'b730b215-3e9a-4db5-8974-aa8ca828ba3c', NULL, 0, 0, NULL, 1, 0, '74'),
('08dd8709-954a-4c4e-81db-95664e9e5036', '', '/uploads/users/avatar_20250429103538_882.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144285', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_76', 'bioStar_76', NULL, NULL, 1, NULL, 'a2907356-9c8d-407c-ae76-f4bd1372ad39', 'd1b34cfb-bc37-4278-8432-22ea43b0e1b5', NULL, 0, 0, NULL, 1, 0, '76'),
('08dd8709-954a-4c8b-8063-678b1afa520b', 'Gues1', '/uploads/users/avatar_20250429103538_424.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144286', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_88', 'bioStar_88', NULL, NULL, 1, NULL, 'a327d5d7-ed14-4527-b81d-7e65c8c7d971', '844e10db-fc47-428e-a9cb-596edee9b01f', NULL, 0, 0, NULL, 1, 0, '88'),
('08dd8709-954a-4ccf-8359-a327e9636b7a', 'Guees 2', '/uploads/users/avatar_20250429103538_870.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144292', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_81', 'bioStar_81', NULL, NULL, 1, NULL, '089e70e0-2c4b-44fb-86a2-4edf285a0161', '9f95c80b-ff23-4c98-8c76-29fb659f1238', NULL, 0, 0, NULL, 1, 0, '81'),
('08dd8709-954a-4d0e-8c07-1682b286144d', 'GUESS 3', '/uploads/users/avatar_20250429103538_620.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144295', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_83', 'bioStar_83', NULL, NULL, 1, NULL, '1facd2fd-79c8-48ac-bcd1-4b005eb6d7f8', 'c05e4564-55da-4d6b-9889-88cfae7017d2', NULL, 0, 0, NULL, 1, 0, '83'),
('08dd8709-954a-4d46-849f-1ed613745635', 'guess 4', '/uploads/users/avatar_20250429103538_903.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144296', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_91', 'bioStar_91', NULL, NULL, 1, NULL, '340c8f8a-9c15-43b0-9737-bfa9b9503b93', 'd8d9ab8f-0ff6-4afa-9608-743874e45a45', NULL, 0, 0, NULL, 1, 0, '91'),
('08dd8709-954a-4d87-8a49-f5cd783a08cf', 'guess 5', '/uploads/users/avatar_20250429103538_203.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144298', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_92', 'bioStar_92', NULL, NULL, 1, NULL, 'c21f77fb-8564-4a7a-bb35-9fa88c3be3f7', '1db13296-86dd-4d21-8377-c13238105e8f', NULL, 0, 0, NULL, 1, 0, '92'),
('08dd8709-954a-4db5-83ef-da461e4607b1', 'guess 6', '/uploads/users/avatar_20250429103538_051.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144298', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_93', 'bioStar_93', NULL, NULL, 1, NULL, '3f08e304-2ce0-481d-88e6-07ce8cd4dd01', '64850181-5c8a-4c4b-91dd-e4f5cc47a081', NULL, 0, 0, NULL, 1, 0, '93'),
('08dd8709-954a-4de5-890c-28080a98e31d', 'guess 7', '/uploads/users/avatar_20250429103538_909.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144299', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_94', 'bioStar_94', NULL, NULL, 1, NULL, '67f1c262-6248-43ae-9a4c-c235a03ecbc0', '253ca060-9b8f-48d6-bbad-8cad82f5829c', NULL, 0, 0, NULL, 1, 0, '94'),
('08dd8709-954a-4e11-8426-5be1b6626c9d', 'guess 8', '/uploads/users/avatar_20250429103538_859.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144300', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_95', 'bioStar_95', NULL, NULL, 1, NULL, '43452a66-6bc5-4e7e-b1ea-4cd73aecc52b', 'cb62c5c4-5c80-4a1c-9030-8953337f8a8d', NULL, 0, 0, NULL, 1, 0, '95'),
('08dd8709-954a-4e40-8099-8c33b47ec3e5', 'Kien (rikkei)', '/uploads/users/avatar_20250429103538_305.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144301', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_100', 'bioStar_100', NULL, NULL, 1, NULL, '40f96ce5-12f4-4252-ac29-8f6ec1bdab66', 'db02c9a2-d6ef-4f52-9a3d-6a4822666198', NULL, 0, 0, NULL, 1, 0, '100'),
('08dd8709-954a-4e6b-8df1-07412cfd5a12', 'Vi Van Hung', '/uploads/users/avatar_20250429103538_272.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144301', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_101', 'bioStar_101', NULL, NULL, 1, NULL, '10a5d9a9-a714-4814-8ce4-59fd68839d6f', '806da87f-00b1-4e1f-8869-e1c38e0e25b9', NULL, 0, 0, NULL, 1, 0, '101'),
('08dd8709-954a-4ea2-8821-395741dff0aa', 'Hai rikkei', '/uploads/users/avatar_20250429103538_827.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144302', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_104', 'bioStar_104', NULL, NULL, 1, NULL, 'e0954ea0-d8e3-4eed-8ec8-273f9b560fdb', '12b3f8b4-835b-4928-a12f-1e31f5b4cb02', NULL, 0, 0, NULL, 1, 0, '104'),
('08dd8709-954a-4ee9-87fb-8151f50c30d0', 'Pham Quang Linh (VMO)', '/uploads/users/avatar_20250429103538_982.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144306', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_112', 'bioStar_112', NULL, NULL, 1, NULL, 'b1cdcdd9-2ee6-4054-914f-b0ea4860388f', 'e187dc80-9490-44ae-89d3-75083faca849', NULL, 0, 0, NULL, 1, 0, '112'),
('08dd8709-954a-4f1b-82fa-bdf1c537f984', 'Nguyễn Việt Hùng', '/uploads/users/avatar_20250429103538_534.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144308', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 1, NULL, '0fe5509d-fd7b-44ca-a64b-c92c293d8ec7', 'e4322457-960e-48fc-90f3-3f5ffa18db82', NULL, 0, 0, NULL, 1, 0, '113'),
('08dd8709-954b-4be6-8243-96bf73a645ca', 'Quynh (VMO)', '/uploads/users/avatar_20250429103538_834.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144310', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_114', 'bioStar_114', NULL, NULL, 1, NULL, 'f89d6efc-cade-4140-9886-f8b2d77dedae', '434745c4-e983-4f13-8c67-ab2fd5ebe47d', NULL, 0, 0, NULL, 1, 0, '114'),
('08dd8709-954b-4c8d-801c-fc5168bb3a0c', 'Irikura', '/uploads/users/avatar_20250429103538_986.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144312', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_117', 'bioStar_117', NULL, NULL, 1, NULL, 'cb5565a5-c390-4929-a33d-689d894cb1ac', '3ccaf22e-b7c2-4c54-bb3f-2de10e3ffbfb', NULL, 0, 0, NULL, 1, 0, '117'),
('08dd8709-954b-4ce7-84e6-d25c52bd9079', 'Ngo thanh tung', '/uploads/users/avatar_20250429103538_846.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144313', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_118', 'bioStar_118', NULL, NULL, 1, NULL, 'a204fa8a-7e73-45ee-8a5e-d1ca44d6e94d', '54156319-f1c0-4ae5-9c5a-83e3638e6693', NULL, 0, 0, NULL, 1, 0, '118'),
('08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 'Trần Thị Phương Thảo', '/uploads/users/avatar_20250429103538_221.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144314', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_200', 'bioStar_200', NULL, NULL, 1, NULL, '74b1cde9-c97a-4f07-b365-cd4d907cc0fd', 'd53f68f8-5aa5-4939-afab-4b6dc536f95c', NULL, 0, 0, NULL, 1, 0, '200'),
('08dd8709-954b-4d6c-89de-3249a22af391', 'Phạm An Thiện (fabbi)', '/uploads/users/avatar_20250429103538_234.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144315', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_201', 'bioStar_201', NULL, NULL, 1, NULL, 'ad8250d9-d04b-41ac-b64a-c1fd9b27bbbe', '9271bf1c-08ec-4f73-86d3-335db460df1e', NULL, 0, 0, NULL, 1, 0, '201'),
('08dd8709-954b-4d9f-8c77-a230bc40fd84', 'Nguyễn Bảo Lộc (fabbi)', '/uploads/users/avatar_20250429103538_305.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144316', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_202', 'bioStar_202', NULL, NULL, 1, NULL, 'f5601bbb-b5fa-461d-bdc3-01f9c07dd7d1', 'a02f44b5-d988-4593-96af-e92c0ce55b10', NULL, 0, 0, NULL, 1, 0, '202'),
('08dd8709-954b-4dda-8341-7e29b34d2807', 'Đỗ Thị Thúy Ngọc (fabbi)', '/uploads/users/avatar_20250429103538_103.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144330', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_203', 'bioStar_203', NULL, NULL, 1, NULL, '17f2a32e-8133-4f19-979b-8d865427778b', '2db89646-7b97-4aac-85ee-351c8f7bf3f9', NULL, 0, 0, NULL, 1, 0, '203'),
('08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 'Nguyễn Tiến Thành (fabbi)', '/uploads/users/avatar_20250429103538_643.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144331', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_204', 'bioStar_204', NULL, NULL, 1, NULL, 'e030c705-624d-4b80-95da-05cd512c1a31', 'ef1a3226-b9c2-4f93-aca4-01afc30f3004', NULL, 0, 0, NULL, 1, 0, '204'),
('08dd8709-954b-4e53-8d16-1954af216b34', 'Nguyen Tien Nghia (fabbi)', '/uploads/users/avatar_20250429103538_852.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144332', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_208', 'bioStar_208', NULL, NULL, 1, NULL, '6e669aae-950f-4635-b62e-a38d6392f3a9', 'bd961c69-cc15-43b3-b7bf-5f9df1943f86', NULL, 0, 0, NULL, 1, 0, '208'),
('08dd8709-954b-4e9b-803a-1c4ebe58802f', 'Hayashi MSR', '/uploads/users/avatar_20250429103538_404.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144333', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_209', 'bioStar_209', NULL, NULL, 1, NULL, '3bb7af71-e1d0-412d-bbcb-38686109b648', '67b19880-612b-4ca7-a0eb-dcab977d4739', NULL, 0, 0, NULL, 1, 0, '209'),
('08dd8709-954b-4ed5-8b7a-805705cdb6aa', 'Phùng Đức Long (Onsite)', '/uploads/users/avatar_20250429103538_750.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144335', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 1, NULL, '302ebcaf-f80c-4885-8ed4-4c35b69d6487', '28a1172d-ce18-4936-b8b3-2a9c324d17c0', NULL, 0, 0, NULL, 1, 0, '210'),
('08dd8709-954b-4f12-8b1c-f827092f0c5f', 'Trieu anh Tuan Onsite', '/uploads/users/avatar_20250429103538_390.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144339', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_211', 'bioStar_211', NULL, NULL, 1, NULL, 'd21ee62e-8cde-4c75-8480-3f818befb2a2', '2594a70a-af94-47ce-b677-0d877ce6bc7a', NULL, 0, 0, NULL, 1, 0, '211'),
('08dd8709-954b-4f49-8691-de009f94e50d', 'Đào Đức Tùng (Onsite)', '/uploads/users/avatar_20250429103538_055.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144341', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_212', 'bioStar_212', NULL, NULL, 1, NULL, 'ae475a6a-c09a-4812-a831-c81156f188a9', '465625e8-50dd-4f03-942f-06ef2416f041', NULL, 0, 0, NULL, 1, 0, '212'),
('08dd8709-954b-4f8f-87a9-c3620c180bf8', 'Trần Văn Tuyên', '/uploads/users/avatar_20250429103538_536.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144341', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_213', 'bioStar_213', NULL, NULL, 1, NULL, '8e6ffa8f-4d9c-4309-8c90-befaf2d6b507', '3b41e44b-854c-4930-8dd3-52552bf8553e', NULL, 0, 0, NULL, 1, 0, '213'),
('08dd8709-954b-4fc6-810c-a208b7c2546d', 'Dinh (extreme)', '/uploads/users/avatar_20250429103538_959.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144342', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_214', 'bioStar_214', NULL, NULL, 1, NULL, 'f1d615f5-bbec-4b17-9d48-ffc81d00ffb1', '6a036a71-dffb-486e-99fd-d4f761c86f13', NULL, 0, 0, NULL, 1, 0, '214'),
('08dd8709-954c-4006-8a44-84e66f36b959', 'Vu Binh Giang', '/uploads/users/avatar_20250429103538_149.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144343', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 1, NULL, 'df2aeb6f-a77f-4be6-8962-fbcffe44bad4', '0471b3b9-96d6-4576-9e72-d0fb06abeed5', NULL, 0, 0, NULL, 1, 0, '215'),
('08dd8709-954c-4037-8a84-ede61fe0e0a0', 'Card 1', '/uploads/users/avatar_20250429103538_148.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144352', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_120', 'bioStar_120', NULL, NULL, 1, NULL, 'e9b6d7f6-7ec0-4d79-87c9-0c390615b89d', '6ceceb7b-7996-4b72-a583-bf8be93baf45', NULL, 0, 0, NULL, 1, 0, '120'),
('08dd8709-954c-4072-85b3-a49aaf671b03', 'card3', '/uploads/users/avatar_20250429103538_537.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144352', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_122', 'bioStar_122', NULL, NULL, 1, NULL, 'db1f8ad9-8760-43b3-a1d5-170dca918493', '3bc6c998-ea42-449d-bc50-3dc8efab06b9', NULL, 0, 0, NULL, 1, 0, '122'),
('08dd8709-954c-40a9-8723-1d3eec0e579b', 'card 2', '/uploads/users/avatar_20250429103538_848.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144353', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_121', 'bioStar_121', NULL, NULL, 1, NULL, '98209475-2c20-488a-b4af-2e7313888594', 'e2326b58-bba6-449c-b52b-ea2514dc645d', NULL, 0, 0, NULL, 1, 0, '121'),
('08dd8709-954c-40ec-8a23-334753c87c7a', 'card 4', '/uploads/users/avatar_20250429103538_482.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144355', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_123', 'bioStar_123', NULL, NULL, 1, NULL, '941697ca-c38c-4b40-a665-8ee425a8ce6c', 'c07e092f-7405-4478-8dc3-eb340cce86e2', NULL, 0, 0, NULL, 1, 0, '123'),
('08dd8709-954c-412b-8ec7-f12ab32040bd', 'card5', '/uploads/users/avatar_20250429103538_275.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144356', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_124', 'bioStar_124', NULL, NULL, 1, NULL, '85cd9cb5-70bf-45eb-8998-652f7dee18bc', 'f4ba1122-be95-40cd-813b-d2bc90790850', NULL, 0, 0, NULL, 1, 0, '124'),
('08dd8709-954c-4167-8e3c-960f3052a039', 'card6', '/uploads/users/avatar_20250429103538_242.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144357', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_125', 'bioStar_125', NULL, NULL, 1, NULL, '4944d544-8d76-4136-95d3-ab8315393ab2', '84e462b4-4476-4c20-b1fe-77923ed06eec', NULL, 0, 0, NULL, 1, 0, '125'),
('08dd8709-954c-419c-8e68-7f4c33eb49b7', 'card7', '/uploads/users/avatar_20250429103538_926.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144358', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_126', 'bioStar_126', NULL, NULL, 1, NULL, 'ac4c1797-2052-49af-83be-0ed192b75107', 'f8985c41-537e-4ae3-9b19-480d47e012f3', NULL, 0, 0, NULL, 1, 0, '126'),
('08dd8709-954c-41d6-8abc-a661a0ed0079', 'card 8', '/uploads/users/avatar_20250429103538_006.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144360', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_127', 'bioStar_127', NULL, NULL, 1, NULL, '47ef9c4d-b5e2-4a6e-b4b4-e7f5a6eed4d9', '94b3a693-955b-4703-9029-26bb2ca57a5f', NULL, 0, 0, NULL, 1, 0, '127'),
('08dd8709-954c-420c-8b2c-fac5f5c6cff7', 'card9', '/uploads/users/avatar_20250429103538_875.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144361', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_128', 'bioStar_128', NULL, NULL, 1, NULL, 'aa193829-e595-43a0-a601-6d0418d60820', '82767aee-7995-45aa-9d82-fa06016bd314', NULL, 0, 0, NULL, 1, 0, '128'),
('08dd8709-954c-4249-89ec-5df9d0ea7773', 'card10', '/uploads/users/avatar_20250429103538_978.png', NULL, 1, 0, 2, '2025-04-29 10:35:38.144367', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bioStar_129', 'bioStar_129', NULL, NULL, 1, NULL, '5be59ece-de9a-4677-932e-d108c397a48d', '270fe6b6-bb2e-41bd-9629-88d327e22491', NULL, 0, 0, NULL, 1, 0, '129');

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
  `Type` int(11) NOT NULL,
  `IsRead` tinyint(1) NOT NULL,
  `UserId` char(36) CHARACTER SET ascii NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `UpdatedAt` datetime(6) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `LastModifiedBy` varchar(255) DEFAULT NULL,
  `Date` datetime(6) NOT NULL DEFAULT '0001-01-01 00:00:00.000000'
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
(1, 'oMEcnvn+MeGlnrd1AJEmXv0wYDhqnbzrHvwUNxMtgLs=', '2025-05-06 10:35:32.078160', 1, '2025-04-29 10:35:32.078294', '08dd8709-7df7-405d-866d-b3eacf862e08');

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
('08dd8709-cbcc-4c31-86dd-ad3eb657c520', '2025-04-29 00:00:00.000000', '2025-04-29 08:00:10.000000', '2025-04-29 17:37:08.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd8709-f1e8-4866-88a9-4f3b5039c32c', '2025-04-29 00:00:00.000000', '2025-04-29 08:05:12.000000', '2025-04-29 17:38:12.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-037f-4ab9-8033-156280254610', '2025-04-29 00:00:00.000000', '2025-04-29 08:05:48.000000', '2025-04-29 17:38:42.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c99-456c-83ee-f977bac7a50d', '2025-04-01 00:00:00.000000', '2025-04-01 06:41:02.000000', '2025-04-01 17:36:48.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c99-4b1e-87ec-6e2e47b4aadd', '2025-04-01 00:00:00.000000', '2025-04-01 07:36:49.000000', '2025-04-01 14:56:28.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c99-4bf9-8726-4afd67b4549d', '2025-04-01 00:00:00.000000', '2025-04-01 07:42:58.000000', '2025-04-01 16:12:07.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c99-4c78-8176-7d9e2868d053', '2025-04-01 00:00:00.000000', '2025-04-01 07:45:46.000000', '2025-04-01 17:47:11.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1c99-4d24-8f1f-44e3f922574c', '2025-04-01 00:00:00.000000', '2025-04-01 07:49:59.000000', '2025-04-01 17:30:19.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c99-4de5-8b15-f7947e879a38', '2025-04-01 00:00:00.000000', '2025-04-01 07:51:32.000000', '2025-04-01 17:35:11.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c99-4e85-880a-e997119856a1', '2025-04-01 00:00:00.000000', '2025-04-01 07:52:06.000000', '2025-04-01 19:08:11.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c99-4f10-89bf-28bea39288ec', '2025-04-01 00:00:00.000000', '2025-04-01 07:52:15.000000', '2025-04-01 17:26:22.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c99-4f77-89e9-e2e99e3eaeba', '2025-04-01 00:00:00.000000', '2025-04-01 08:00:14.000000', '2025-04-01 17:43:21.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1c99-4fb4-82c5-539201b2084a', '2025-04-01 00:00:00.000000', '2025-04-01 08:00:44.000000', '2025-04-01 17:12:18.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1c99-4ffa-8b6a-656598fee35d', '2025-04-01 00:00:00.000000', '2025-04-01 08:01:25.000000', '2025-04-01 18:14:54.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9a-4031-89ac-a8e245243e0a', '2025-04-01 00:00:00.000000', '2025-04-01 08:07:23.000000', '2025-04-01 17:54:42.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9a-4090-8289-d39a3ef22cab', '2025-04-01 00:00:00.000000', '2025-04-01 08:08:00.000000', '2025-04-01 17:41:12.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9a-40b5-8c97-2a4356c0addf', '2025-04-01 00:00:00.000000', '2025-04-01 08:08:23.000000', '2025-04-01 17:45:37.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9a-40de-854f-feade4470e18', '2025-04-01 00:00:00.000000', '2025-04-01 08:08:40.000000', '2025-04-01 17:48:27.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9a-4103-81dd-4103c689da27', '2025-04-01 00:00:00.000000', '2025-04-01 08:12:26.000000', '2025-04-01 17:55:19.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9a-4138-85dd-88dd4d08fa85', '2025-04-01 00:00:00.000000', '2025-04-01 08:13:33.000000', '2025-04-01 17:32:31.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9a-4182-89bb-880d972b40b6', '2025-04-01 00:00:00.000000', '2025-04-01 08:15:25.000000', '2025-04-01 17:51:37.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9a-41be-84fd-ff2f40709a04', '2025-04-01 00:00:00.000000', '2025-04-01 08:16:41.000000', '2025-04-01 17:55:05.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9a-41eb-8da9-207f6236ff09', '2025-04-01 00:00:00.000000', '2025-04-01 08:18:45.000000', '2025-04-01 18:54:06.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9a-4210-8d6b-3c0d73b10d96', '2025-04-01 00:00:00.000000', '2025-04-01 08:20:13.000000', '2025-04-01 17:51:12.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9a-426b-800a-e9b01fffa13a', '2025-04-01 00:00:00.000000', '2025-04-01 08:20:55.000000', '2025-04-01 17:56:04.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9a-4296-8a35-5034e27af028', '2025-04-01 00:00:00.000000', '2025-04-01 08:21:53.000000', '2025-04-01 11:22:13.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9a-42c7-8d1a-a1ae91782495', '2025-04-01 00:00:00.000000', '2025-04-01 08:23:25.000000', '2025-04-01 17:49:36.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9a-42fe-85c0-d0a2fed4e251', '2025-04-01 00:00:00.000000', '2025-04-01 08:35:48.000000', '2025-04-01 17:28:30.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1c9a-4336-8d23-d7a4db79e220', '2025-04-01 00:00:00.000000', '2025-04-01 08:45:07.000000', '2025-04-01 18:20:51.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1c9a-4394-8063-409b30075037', '2025-04-01 00:00:00.000000', '2025-04-01 08:47:46.000000', '2025-04-01 18:29:56.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9a-43da-8234-4d957348c89a', '2025-04-01 00:00:00.000000', '2025-04-01 08:53:06.000000', '2025-04-01 18:28:01.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9a-43f7-8050-86a89fd1a1ba', '2025-04-01 00:00:00.000000', '2025-04-01 08:58:28.000000', '2025-04-01 18:41:39.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9a-4426-8101-950c844c619f', '2025-04-01 00:00:00.000000', '2025-04-01 09:03:36.000000', '2025-04-01 18:00:13.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9a-4508-83a5-a72d64a49bfe', '2025-04-01 00:00:00.000000', '2025-04-01 09:08:31.000000', '2025-04-01 18:46:43.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9a-45b9-8368-3c01b2dab1cf', '2025-04-01 00:00:00.000000', '2025-04-01 09:10:38.000000', '2025-04-01 17:47:26.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1c9a-4663-804b-002a515b1bd1', '2025-04-01 00:00:00.000000', '2025-04-01 09:11:59.000000', '2025-04-01 18:14:11.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9a-46dc-8fc8-e6969e8c5fbd', '2025-04-01 00:00:00.000000', '2025-04-01 09:44:17.000000', '2025-04-01 17:13:18.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9a-4753-82b3-e6332781b076', '2025-04-01 00:00:00.000000', '2025-04-01 12:57:13.000000', '2025-04-01 17:11:02.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9a-4866-8c90-1043d4f610c1', '2025-04-01 00:00:00.000000', '2025-04-01 13:11:32.000000', '2025-04-01 15:40:33.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9a-4a26-85c1-42561c02015c', '2025-04-01 00:00:00.000000', '2025-04-01 13:22:19.000000', '2025-04-01 17:40:40.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9a-4b33-89e2-6138ef415768', '2025-04-02 00:00:00.000000', '2025-04-02 07:05:50.000000', '2025-04-02 12:18:25.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9a-4bb4-85e5-bddaf7b91a7e', '2025-04-02 00:00:00.000000', '2025-04-02 07:31:57.000000', '2025-04-02 17:35:16.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9a-4bf6-8313-12517e175e6e', '2025-04-02 00:00:00.000000', '2025-04-02 07:37:49.000000', '2025-04-02 16:06:55.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9a-4c3e-8ad2-eaa02ee0ed81', '2025-04-02 00:00:00.000000', '2025-04-02 07:46:43.000000', '2025-04-02 15:35:32.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1c9a-4c7e-8320-b12e2be3e648', '2025-04-02 00:00:00.000000', '2025-04-02 07:47:50.000000', '2025-04-02 17:33:46.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9a-4cb7-809d-5e338cdd166f', '2025-04-02 00:00:00.000000', '2025-04-02 07:49:17.000000', '2025-04-02 17:34:34.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9a-4cd1-8aea-7528c2663065', '2025-04-02 00:00:00.000000', '2025-04-02 07:55:05.000000', '2025-04-02 17:35:59.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9a-4d26-8e3a-f4a298e499b2', '2025-04-02 00:00:00.000000', '2025-04-02 07:58:12.000000', '2025-04-02 17:39:53.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9a-4de4-820c-3b9ca275ebde', '2025-04-02 00:00:00.000000', '2025-04-02 08:01:40.000000', '2025-04-02 17:39:15.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1c9a-4e24-83d6-fcd00d978244', '2025-04-02 00:00:00.000000', '2025-04-02 08:05:36.000000', '2025-04-02 17:11:59.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9a-4e69-8c3b-cb7b5f59f645', '2025-04-02 00:00:00.000000', '2025-04-02 08:05:47.000000', '2025-04-02 14:51:06.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9a-4e96-8679-4f9b9cebeae5', '2025-04-02 00:00:00.000000', '2025-04-02 08:06:48.000000', '2025-04-02 17:41:33.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9a-4ecf-8e0e-074e3ac9eb5b', '2025-04-02 00:00:00.000000', '2025-04-02 08:07:26.000000', '2025-04-02 17:31:23.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9a-4f0f-8c17-c862c991e6d3', '2025-04-02 00:00:00.000000', '2025-04-02 08:10:16.000000', '2025-04-02 17:53:47.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9a-4f53-8fd0-2acb2d95209e', '2025-04-02 00:00:00.000000', '2025-04-02 08:12:51.000000', '2025-04-02 17:54:21.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9a-4f75-8506-53ecfa0f584e', '2025-04-02 00:00:00.000000', '2025-04-02 08:15:14.000000', '2025-04-02 17:53:44.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9a-4f8d-8f4f-d44bdc5bdc16', '2025-04-02 00:00:00.000000', '2025-04-02 08:15:57.000000', '2025-04-02 17:17:54.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9a-4fb9-8a7d-35c31da89bf7', '2025-04-02 00:00:00.000000', '2025-04-02 08:16:35.000000', '2025-04-02 17:59:42.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9a-4fde-86b2-ad51b8377b80', '2025-04-02 00:00:00.000000', '2025-04-02 08:17:31.000000', '2025-04-02 17:47:02.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9b-400c-8ff0-f7517d8bd0e0', '2025-04-02 00:00:00.000000', '2025-04-02 08:18:07.000000', '2025-04-02 17:53:40.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1c9b-403c-8c77-1cbe51806d63', '2025-04-02 00:00:00.000000', '2025-04-02 08:18:16.000000', '2025-04-02 18:01:23.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9b-405e-817a-77b72d8c33ea', '2025-04-02 00:00:00.000000', '2025-04-02 08:25:18.000000', '2025-04-02 18:50:57.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9b-412e-8a6f-14e4fd4daefc', '2025-04-02 00:00:00.000000', '2025-04-02 08:29:00.000000', '2025-04-02 18:04:40.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9b-44ea-8629-cb3912729944', '2025-04-02 00:00:00.000000', '2025-04-02 08:40:56.000000', '2025-04-02 18:06:33.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9b-45ef-8b17-083258a2b8e5', '2025-04-02 00:00:00.000000', '2025-04-02 08:46:02.000000', '2025-04-02 17:56:24.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9b-46b8-8c25-0dd6a32df489', '2025-04-02 00:00:00.000000', '2025-04-02 08:55:50.000000', '2025-04-02 16:11:55.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9b-4762-81c4-5215ebe6ccd1', '2025-04-02 00:00:00.000000', '2025-04-02 08:57:07.000000', '2025-04-02 18:17:31.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9b-47a5-8696-9df5e4a11059', '2025-04-02 00:00:00.000000', '2025-04-02 09:01:28.000000', '2025-04-02 18:27:50.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9b-47fc-8847-8852cb77d3da', '2025-04-02 00:00:00.000000', '2025-04-02 09:43:56.000000', '2025-04-02 18:01:52.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9b-4901-8eb3-7acfcaa8b184', '2025-04-02 00:00:00.000000', '2025-04-02 10:13:44.000000', '2025-04-02 16:56:10.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1c9b-496d-87eb-d9162d59fc29', '2025-04-02 00:00:00.000000', '2025-04-02 10:32:38.000000', '2025-04-02 18:21:02.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1c9b-49ea-8d55-49dd3c647eeb', '2025-04-02 00:00:00.000000', '2025-04-02 11:18:37.000000', '2025-04-02 18:11:06.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9b-4a2c-86c4-45f34ab7c8d3', '2025-04-02 00:00:00.000000', '2025-04-02 11:43:35.000000', '2025-04-02 17:06:54.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9b-4a82-8881-f9e1ee5b806a', '2025-04-02 00:00:00.000000', '2025-04-02 12:20:04.000000', '2025-04-02 18:36:43.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9b-4ae9-8691-2f48325fea48', '2025-04-02 00:00:00.000000', '2025-04-02 12:30:02.000000', '2025-04-02 15:23:58.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c9b-4bc0-87ca-36eb37018deb', '2025-04-02 00:00:00.000000', '2025-04-02 12:35:50.000000', '2025-04-02 18:35:46.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1c9b-4c46-8b8a-0bf29754b097', '2025-04-02 00:00:00.000000', '2025-04-02 12:52:54.000000', '2025-04-02 14:42:50.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9c-46a9-8321-84f0c9f53c6c', '2025-04-02 00:00:00.000000', '2025-04-02 13:43:19.000000', '2025-04-02 18:00:44.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9c-4786-8d88-d423b38ab50a', '2025-04-03 00:00:00.000000', '2025-04-03 07:28:49.000000', '2025-04-03 17:36:03.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9c-47d0-8017-d4aafa1f81bf', '2025-04-03 00:00:00.000000', '2025-04-03 07:44:55.000000', '2025-04-03 17:34:13.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9c-47f4-82f7-696b23f5ba50', '2025-04-03 00:00:00.000000', '2025-04-03 07:46:38.000000', '2025-04-03 16:12:02.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9c-4814-8915-6e67f6187a79', '2025-04-03 00:00:00.000000', '2025-04-03 07:51:37.000000', '2025-04-03 17:34:39.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9c-4830-80c4-399353d2371f', '2025-04-03 00:00:00.000000', '2025-04-03 07:55:26.000000', '2025-04-03 18:11:03.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c9c-484f-8acb-7641dae79caa', '2025-04-03 00:00:00.000000', '2025-04-03 07:56:27.000000', '2025-04-03 17:52:18.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9c-486b-8b6a-13c7ccf8ea92', '2025-04-03 00:00:00.000000', '2025-04-03 07:56:52.000000', '2025-04-03 17:20:42.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1c9c-4882-8146-f6ded1a7e651', '2025-04-03 00:00:00.000000', '2025-04-03 07:57:31.000000', '2025-04-03 16:48:58.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9c-489a-8fe4-fc3a3e5119a1', '2025-04-03 00:00:00.000000', '2025-04-03 07:58:11.000000', '2025-04-03 18:27:23.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9c-48b9-891e-1d78461379ad', '2025-04-03 00:00:00.000000', '2025-04-03 08:00:22.000000', '2025-04-03 16:38:41.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9c-48da-8381-76ffbf6398f8', '2025-04-03 00:00:00.000000', '2025-04-03 08:08:22.000000', '2025-04-03 17:44:08.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9c-48fb-8449-9b3b65e05858', '2025-04-03 00:00:00.000000', '2025-04-03 08:12:20.000000', '2025-04-03 18:00:05.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9c-4922-8172-9e69f1f41f31', '2025-04-03 00:00:00.000000', '2025-04-03 08:16:53.000000', '2025-04-03 17:52:00.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1c9c-4948-83b4-586406f4574c', '2025-04-03 00:00:00.000000', '2025-04-03 08:17:51.000000', '2025-04-03 17:58:42.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9c-497c-890e-88013752d9dc', '2025-04-03 00:00:00.000000', '2025-04-03 08:18:44.000000', '2025-04-03 17:57:50.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9c-49b0-82a1-9e358fd6cd87', '2025-04-03 00:00:00.000000', '2025-04-03 08:19:00.000000', '2025-04-03 17:39:46.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9c-49db-87f9-c88d60e25060', '2025-04-03 00:00:00.000000', '2025-04-03 08:21:33.000000', '2025-04-03 18:06:17.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9c-49f9-8e01-bde5a6ac3c4a', '2025-04-03 00:00:00.000000', '2025-04-03 08:24:54.000000', '2025-04-03 17:58:27.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9c-4a25-8004-8c34449d2ba7', '2025-04-03 00:00:00.000000', '2025-04-03 08:29:04.000000', '2025-04-03 17:28:11.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9c-4a48-8e80-9cab1806a7f0', '2025-04-03 00:00:00.000000', '2025-04-03 08:29:47.000000', '2025-04-03 18:18:26.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1c9c-4a75-864d-14b698994550', '2025-04-03 00:00:00.000000', '2025-04-03 08:31:12.000000', '2025-04-03 17:46:11.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9c-4aa5-8879-39c653914b83', '2025-04-03 00:00:00.000000', '2025-04-03 08:39:26.000000', '2025-04-03 18:12:20.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9c-4ac7-8415-936ced34094e', '2025-04-03 00:00:00.000000', '2025-04-03 08:45:11.000000', '2025-04-03 19:02:22.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9c-4ae2-8039-5656150b71f4', '2025-04-03 00:00:00.000000', '2025-04-03 08:45:15.000000', '2025-04-03 18:20:13.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9c-4b04-8332-f04c5d56c7b1', '2025-04-03 00:00:00.000000', '2025-04-03 08:46:06.000000', '2025-04-03 17:22:34.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9c-4b24-8d67-e7926b9da550', '2025-04-03 00:00:00.000000', '2025-04-03 08:48:44.000000', '2025-04-03 18:30:46.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9c-4b42-8d57-01e12f2b5e6a', '2025-04-03 00:00:00.000000', '2025-04-03 08:52:02.000000', '2025-04-03 18:28:54.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9c-4bed-833a-d3fcaaea1d98', '2025-04-03 00:00:00.000000', '2025-04-03 08:52:53.000000', '2025-04-03 18:30:55.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9c-4c32-8bf6-86e452cd6525', '2025-04-03 00:00:00.000000', '2025-04-03 08:53:39.000000', '2025-04-03 18:04:03.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9c-4caf-83fa-54133f7182d4', '2025-04-03 00:00:00.000000', '2025-04-03 08:53:54.000000', '2025-04-03 11:37:32.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9c-4cf2-8459-a75a206e9e9b', '2025-04-03 00:00:00.000000', '2025-04-03 08:55:46.000000', '2025-04-03 18:01:29.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9c-4d4e-8932-3f5d628c510d', '2025-04-03 00:00:00.000000', '2025-04-03 09:03:28.000000', '2025-04-03 16:53:04.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9c-4d75-88c8-a151d03cf00c', '2025-04-03 00:00:00.000000', '2025-04-03 09:18:21.000000', '2025-04-03 17:31:50.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9c-4d95-81cf-7489fa0343fc', '2025-04-03 00:00:00.000000', '2025-04-03 09:33:26.000000', '2025-04-03 17:03:18.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9c-4db0-8c0d-939085b2a17e', '2025-04-03 00:00:00.000000', '2025-04-03 10:37:49.000000', '2025-04-03 18:29:09.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9c-4dc7-85f0-0588d2a2e4ae', '2025-04-04 00:00:00.000000', '2025-04-04 06:58:28.000000', '2025-04-04 14:56:52.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9c-4de6-817d-1a70a9732546', '2025-04-04 00:00:00.000000', '2025-04-04 07:32:27.000000', '2025-04-04 14:04:38.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9c-4e08-887d-82ec6f818558', '2025-04-04 00:00:00.000000', '2025-04-04 07:40:57.000000', '2025-04-04 15:02:07.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9c-4e52-8efe-47c6c4d6b1f0', '2025-04-04 00:00:00.000000', '2025-04-04 07:45:23.000000', '2025-04-04 16:43:19.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9c-4e73-8479-5e6815d7df63', '2025-04-04 00:00:00.000000', '2025-04-04 07:49:57.000000', '2025-04-04 16:27:47.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9c-4e8a-8ce8-1d2e2d763d8d', '2025-04-04 00:00:00.000000', '2025-04-04 07:50:12.000000', '2025-04-04 13:38:11.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9c-4ead-865d-7c1fc4eaa2a2', '2025-04-04 00:00:00.000000', '2025-04-04 07:52:21.000000', '2025-04-04 15:19:48.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c9c-4ed5-8e16-bd2cace11740', '2025-04-04 00:00:00.000000', '2025-04-04 07:53:20.000000', '2025-04-04 15:34:16.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9c-4f15-8b5d-323698e3c5e9', '2025-04-04 00:00:00.000000', '2025-04-04 07:55:51.000000', '2025-04-04 14:58:55.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9c-4f3c-8043-d3bcb4b2f3fb', '2025-04-04 00:00:00.000000', '2025-04-04 07:58:19.000000', '2025-04-04 15:33:29.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9c-4f59-8faa-8b12f0d1da2b', '2025-04-04 00:00:00.000000', '2025-04-04 07:58:53.000000', '2025-04-04 12:09:06.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1c9c-4f73-8d5e-b3c56a5d6ba3', '2025-04-04 00:00:00.000000', '2025-04-04 08:01:17.000000', '2025-04-04 13:41:49.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9c-4fa8-8e3d-6adc90d51096', '2025-04-04 00:00:00.000000', '2025-04-04 08:01:50.000000', '2025-04-04 17:37:01.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9c-4fcf-8495-ff814dd0d4b7', '2025-04-04 00:00:00.000000', '2025-04-04 08:08:32.000000', '2025-04-04 12:12:01.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1c9c-4fec-80ee-24ce5f1b418b', '2025-04-04 00:00:00.000000', '2025-04-04 08:09:40.000000', '2025-04-04 18:07:03.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9d-4004-8230-2e59b2e6fbe7', '2025-04-04 00:00:00.000000', '2025-04-04 08:11:17.000000', '2025-04-04 15:27:43.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9d-4022-8684-866b0077606a', '2025-04-04 00:00:00.000000', '2025-04-04 08:12:15.000000', '2025-04-04 15:32:14.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9d-4044-8e4c-429bac8b9365', '2025-04-04 00:00:00.000000', '2025-04-04 08:13:06.000000', '2025-04-04 18:27:39.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9d-4069-8738-a323a856ec75', '2025-04-04 00:00:00.000000', '2025-04-04 08:14:58.000000', '2025-04-04 16:24:04.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9d-4083-854e-117cdcdc3bc0', '2025-04-04 00:00:00.000000', '2025-04-04 08:15:25.000000', '2025-04-04 18:06:40.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9d-4099-86c8-c656bd73b963', '2025-04-04 00:00:00.000000', '2025-04-04 08:23:30.000000', '2025-04-04 17:57:00.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9d-40c6-8d66-071c2f45d210', '2025-04-04 00:00:00.000000', '2025-04-04 08:26:03.000000', '2025-04-04 17:58:33.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9d-40f8-8dea-dd9143a654da', '2025-04-04 00:00:00.000000', '2025-04-04 08:27:15.000000', '2025-04-04 18:41:46.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9d-412b-89dc-6dac0df9b8e6', '2025-04-04 00:00:00.000000', '2025-04-04 08:32:58.000000', '2025-04-04 15:36:44.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9d-4149-85ff-4af254084f65', '2025-04-04 00:00:00.000000', '2025-04-04 08:36:29.000000', '2025-04-04 18:17:05.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9d-416b-8816-364a13145d77', '2025-04-04 00:00:00.000000', '2025-04-04 08:37:06.000000', '2025-04-04 18:16:03.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9d-4198-830c-70376a91b6e5', '2025-04-04 00:00:00.000000', '2025-04-04 08:41:09.000000', '2025-04-04 15:25:09.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1c9d-41e6-80b8-6ce7aa81530a', '2025-04-04 00:00:00.000000', '2025-04-04 08:47:28.000000', '2025-04-04 18:22:16.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9d-4213-8812-a8d3ee5f5e46', '2025-04-04 00:00:00.000000', '2025-04-04 08:48:10.000000', '2025-04-04 18:34:05.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9d-4230-8e81-d1028fdf5276', '2025-04-04 00:00:00.000000', '2025-04-04 08:54:57.000000', '2025-04-04 18:03:20.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9d-4250-8e5e-635ea91e9de3', '2025-04-04 00:00:00.000000', '2025-04-04 08:56:43.000000', '2025-04-04 18:29:16.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9d-4267-8926-798237777b64', '2025-04-04 00:00:00.000000', '2025-04-04 08:57:16.000000', '2025-04-04 20:36:28.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9d-4278-8447-ef5bbe4f85de', '2025-04-04 00:00:00.000000', '2025-04-04 09:05:21.000000', '2025-04-04 18:36:32.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1c9d-4298-84dc-93ea13734206', '2025-04-04 00:00:00.000000', '2025-04-04 09:05:35.000000', '2025-04-04 18:40:58.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9d-42bf-8bfb-fccd31bcd59d', '2025-04-04 00:00:00.000000', '2025-04-04 12:36:45.000000', NULL, 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9d-42e0-8573-55032e9794a8', '2025-04-08 00:00:00.000000', '2025-04-08 06:56:27.000000', '2025-04-08 16:27:39.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9d-42f6-8a7d-1f45ae68eace', '2025-04-08 00:00:00.000000', '2025-04-08 06:58:57.000000', '2025-04-08 16:40:46.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9d-430b-8b67-991c8d74c3f1', '2025-04-08 00:00:00.000000', '2025-04-08 07:40:26.000000', '2025-04-08 15:02:31.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c9d-433a-8279-a5d5783bdde6', '2025-04-08 00:00:00.000000', '2025-04-08 07:46:14.000000', '2025-04-08 17:40:14.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9d-4366-8b79-e331dfcdd5eb', '2025-04-08 00:00:00.000000', '2025-04-08 07:49:43.000000', '2025-04-08 17:24:28.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9d-4382-89d4-12c4a36e2548', '2025-04-08 00:00:00.000000', '2025-04-08 07:50:30.000000', '2025-04-08 17:33:45.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9d-43a2-85ee-3e080f84ed45', '2025-04-08 00:00:00.000000', '2025-04-08 07:52:20.000000', '2025-04-08 15:25:05.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9d-43c3-8906-7133722556e3', '2025-04-08 00:00:00.000000', '2025-04-08 07:53:44.000000', '2025-04-08 17:45:58.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1c9d-43de-82e4-48d10da90663', '2025-04-08 00:00:00.000000', '2025-04-08 07:54:39.000000', '2025-04-08 15:32:58.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9d-43f3-89ff-a7e242b82055', '2025-04-08 00:00:00.000000', '2025-04-08 07:56:12.000000', '2025-04-08 17:38:16.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9d-4411-89de-e0e9ba7df754', '2025-04-08 00:00:00.000000', '2025-04-08 07:59:04.000000', '2025-04-08 16:57:56.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9d-442a-8be4-2ea881ab0393', '2025-04-08 00:00:00.000000', '2025-04-08 08:00:23.000000', '2025-04-08 15:20:30.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9d-4444-835f-22e5910741cc', '2025-04-08 00:00:00.000000', '2025-04-08 08:04:46.000000', '2025-04-08 17:43:54.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9d-4462-8f88-781f51f6fa2d', '2025-04-08 00:00:00.000000', '2025-04-08 08:10:43.000000', '2025-04-08 17:49:46.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1c9d-447d-8496-961db88dfe83', '2025-04-08 00:00:00.000000', '2025-04-08 08:12:01.000000', '2025-04-08 17:55:27.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9d-4497-86fb-440788fd898a', '2025-04-08 00:00:00.000000', '2025-04-08 08:14:39.000000', '2025-04-08 17:51:16.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9d-44d2-899d-619144e927ee', '2025-04-08 00:00:00.000000', '2025-04-08 08:19:20.000000', '2025-04-08 17:53:20.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9d-44f1-8269-9c3d1383b0fc', '2025-04-08 00:00:00.000000', '2025-04-08 08:21:18.000000', '2025-04-08 17:26:49.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9d-4519-8cab-4bdca47eb8ff', '2025-04-08 00:00:00.000000', '2025-04-08 08:23:07.000000', '2025-04-08 18:18:04.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9d-453a-8d10-2c8d35c59509', '2025-04-08 00:00:00.000000', '2025-04-08 08:23:52.000000', '2025-04-08 17:00:24.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9d-4558-823b-e70bc388d93b', '2025-04-08 00:00:00.000000', '2025-04-08 08:33:34.000000', '2025-04-08 18:27:28.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9d-45b1-8b03-5f641df0d5e6', '2025-04-08 00:00:00.000000', '2025-04-08 08:34:57.000000', '2025-04-08 18:07:51.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9d-45de-8bdd-d41819d07c96', '2025-04-08 00:00:00.000000', '2025-04-08 08:43:52.000000', '2025-04-08 18:03:08.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9d-460d-8806-215d612bde94', '2025-04-08 00:00:00.000000', '2025-04-08 08:44:54.000000', '2025-04-08 16:53:51.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9d-4636-861a-02033c828713', '2025-04-08 00:00:00.000000', '2025-04-08 08:46:53.000000', '2025-04-08 18:07:26.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9d-465b-8fc4-f30233a55708', '2025-04-08 00:00:00.000000', '2025-04-08 08:55:57.000000', '2025-04-08 18:29:37.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9d-467d-863e-678fe709fc7e', '2025-04-08 00:00:00.000000', '2025-04-08 08:56:19.000000', '2025-04-08 18:51:42.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9d-469d-89eb-7af09bfc324b', '2025-04-08 00:00:00.000000', '2025-04-08 08:56:19.000000', '2025-04-08 18:08:32.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9d-46c2-87df-f165898e488a', '2025-04-08 00:00:00.000000', '2025-04-08 09:05:07.000000', '2025-04-08 19:39:08.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9d-46d8-834f-8c49dde1e8f9', '2025-04-08 00:00:00.000000', '2025-04-08 09:05:50.000000', '2025-04-08 18:41:30.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9d-46e5-8c13-b66a1165ab0e', '2025-04-08 00:00:00.000000', '2025-04-08 09:09:46.000000', '2025-04-08 17:26:18.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9d-46f3-8aee-3d69bd8937ff', '2025-04-08 00:00:00.000000', '2025-04-08 09:31:23.000000', '2025-04-08 18:35:05.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1c9d-4712-81d1-4e5fa3cea253', '2025-04-08 00:00:00.000000', '2025-04-08 09:41:38.000000', '2025-04-08 18:19:04.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9d-4731-8be9-bf71b4046e66', '2025-04-08 00:00:00.000000', '2025-04-08 10:13:49.000000', '2025-04-08 17:57:14.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9d-4749-8fd8-60eaddfa367e', '2025-04-09 00:00:00.000000', '2025-04-09 07:13:27.000000', '2025-04-09 17:34:58.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9d-4762-84f1-d3b14358fc88', '2025-04-09 00:00:00.000000', '2025-04-09 07:33:54.000000', '2025-04-09 14:14:12.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9d-4792-803f-f0b2e326fd92', '2025-04-09 00:00:00.000000', '2025-04-09 07:45:59.000000', '2025-04-09 17:33:56.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9d-483b-8945-7030e0e8ad4a', '2025-04-09 00:00:00.000000', '2025-04-09 07:47:10.000000', '2025-04-09 16:19:53.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9d-48c8-84a4-5448daca1e4c', '2025-04-09 00:00:00.000000', '2025-04-09 07:49:33.000000', '2025-04-09 17:30:39.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9d-49ae-82f6-aa4a8838ec81', '2025-04-09 00:00:00.000000', '2025-04-09 07:53:01.000000', '2025-04-09 14:38:03.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1c9d-4a26-89eb-f947cea628fc', '2025-04-09 00:00:00.000000', '2025-04-09 07:59:09.000000', '2025-04-09 18:40:00.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1c9d-4de3-87c0-dc54ab9f44ca', '2025-04-09 00:00:00.000000', '2025-04-09 07:59:45.000000', '2025-04-09 15:15:03.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9d-4e8d-87ba-78bd5e260c36', '2025-04-09 00:00:00.000000', '2025-04-09 08:00:16.000000', '2025-04-09 16:51:44.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9d-4f22-81b6-c14f1cdc5d3e', '2025-04-09 00:00:00.000000', '2025-04-09 08:02:24.000000', '2025-04-09 17:33:31.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9d-4f63-8ec3-e75148e2362a', '2025-04-09 00:00:00.000000', '2025-04-09 08:07:22.000000', '2025-04-09 17:10:07.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9d-4fe9-82f2-42cf01fcd61a', '2025-04-09 00:00:00.000000', '2025-04-09 08:07:58.000000', '2025-04-09 17:41:50.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9e-401f-86e0-d6104ef3c81e', '2025-04-09 00:00:00.000000', '2025-04-09 08:09:15.000000', '2025-04-09 17:42:24.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9e-405c-830a-6e1f66f62d37', '2025-04-09 00:00:00.000000', '2025-04-09 08:10:33.000000', '2025-04-09 17:41:27.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9e-40ba-8d79-2e41992883ba', '2025-04-09 00:00:00.000000', '2025-04-09 08:11:10.000000', '2025-04-09 13:28:44.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9e-40f8-811b-4aee8023f14c', '2025-04-09 00:00:00.000000', '2025-04-09 08:11:53.000000', '2025-04-09 17:50:45.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9e-415c-8472-dd8636819c01', '2025-04-09 00:00:00.000000', '2025-04-09 08:12:41.000000', '2025-04-09 19:42:46.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9e-41db-885e-f0dd8e86a99c', '2025-04-09 00:00:00.000000', '2025-04-09 08:14:25.000000', '2025-04-09 17:46:56.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9e-4231-8534-2fcc6d5f6957', '2025-04-09 00:00:00.000000', '2025-04-09 08:21:13.000000', '2025-04-09 13:09:10.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9e-4af0-8638-cf5576ed360a', '2025-04-09 00:00:00.000000', '2025-04-09 08:22:22.000000', '2025-04-09 17:54:38.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9e-4b48-86ac-452fc88c80ed', '2025-04-09 00:00:00.000000', '2025-04-09 08:22:28.000000', '2025-04-09 17:56:07.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9e-4c06-8858-3f540a41b158', '2025-04-09 00:00:00.000000', '2025-04-09 08:24:08.000000', '2025-04-09 17:56:38.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9e-4c64-83a6-68d5993e9f12', '2025-04-09 00:00:00.000000', '2025-04-09 08:29:45.000000', '2025-04-09 17:55:27.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9e-4cbc-854a-64e41c69718f', '2025-04-09 00:00:00.000000', '2025-04-09 08:38:32.000000', '2025-04-09 17:43:39.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9e-4d9a-80e5-1508634040a5', '2025-04-09 00:00:00.000000', '2025-04-09 08:41:51.000000', '2025-04-09 17:10:44.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1c9e-4e50-8b0b-0b51148e7a01', '2025-04-09 00:00:00.000000', '2025-04-09 08:42:31.000000', '2025-04-09 17:17:02.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9e-4eb2-8945-290bdece1ca4', '2025-04-09 00:00:00.000000', '2025-04-09 08:44:53.000000', '2025-04-09 16:52:52.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9e-4eee-8b3b-f2977eb8c4e6', '2025-04-09 00:00:00.000000', '2025-04-09 08:51:28.000000', '2025-04-09 17:59:04.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9e-4f2f-8e1c-879c8b75917d', '2025-04-09 00:00:00.000000', '2025-04-09 08:52:30.000000', '2025-04-09 16:38:07.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1c9e-4f50-8dae-1a532f36e082', '2025-04-09 00:00:00.000000', '2025-04-09 08:58:54.000000', '2025-04-09 18:33:10.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9e-4f69-8a1d-350a5cd41f47', '2025-04-09 00:00:00.000000', '2025-04-09 08:59:38.000000', '2025-04-09 19:11:03.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9e-4f9b-82e3-a75cd0f26ce7', '2025-04-09 00:00:00.000000', '2025-04-09 09:07:28.000000', '2025-04-09 18:25:02.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9e-4fdc-8f29-e1ea50a12b52', '2025-04-09 00:00:00.000000', '2025-04-09 09:26:32.000000', '2025-04-09 18:05:33.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9f-402e-882e-ddac1768787b', '2025-04-09 00:00:00.000000', '2025-04-09 10:18:43.000000', '2025-04-09 16:15:51.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9f-4056-80d9-65c4e417ad4b', '2025-04-09 00:00:00.000000', '2025-04-09 10:23:45.000000', '2025-04-09 17:28:59.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9f-4087-83ae-0e32f0fb8197', '2025-04-09 00:00:00.000000', '2025-04-09 10:44:53.000000', '2025-04-09 17:18:33.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1c9f-40d4-848d-ecf79024513b', '2025-04-10 00:00:00.000000', '2025-04-10 07:19:04.000000', '2025-04-10 17:05:11.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1c9f-40f1-87dd-90c605519140', '2025-04-10 00:00:00.000000', '2025-04-10 07:35:55.000000', '2025-04-10 10:39:10.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1c9f-4111-8aad-a0ea6201cd32', '2025-04-10 00:00:00.000000', '2025-04-10 07:46:26.000000', '2025-04-10 17:34:05.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1c9f-4155-86b2-3bb13258af58', '2025-04-10 00:00:00.000000', '2025-04-10 07:47:08.000000', '2025-04-10 13:12:55.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1c9f-419d-8937-0f9d78440b4a', '2025-04-10 00:00:00.000000', '2025-04-10 07:57:56.000000', '2025-04-10 17:33:05.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1c9f-41c5-8ec0-584b081e03bb', '2025-04-10 00:00:00.000000', '2025-04-10 08:00:08.000000', '2025-04-10 13:46:53.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1c9f-41ea-8345-96469f8311ff', '2025-04-10 00:00:00.000000', '2025-04-10 08:01:23.000000', '2025-04-10 16:45:27.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1c9f-4250-8ed5-4580824ace4c', '2025-04-10 00:00:00.000000', '2025-04-10 08:03:01.000000', '2025-04-10 17:36:19.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1c9f-42d3-841a-8962279b7f4f', '2025-04-10 00:00:00.000000', '2025-04-10 08:03:30.000000', '2025-04-10 17:38:42.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1c9f-4364-8dd3-4a9644de9111', '2025-04-10 00:00:00.000000', '2025-04-10 08:05:52.000000', '2025-04-10 17:27:06.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1c9f-440f-8b81-0d25a08ae321', '2025-04-10 00:00:00.000000', '2025-04-10 08:05:55.000000', '2025-04-10 17:42:51.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1c9f-4476-8313-5ae8db6c6073', '2025-04-10 00:00:00.000000', '2025-04-10 08:06:31.000000', '2025-04-10 17:35:11.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1c9f-456f-8766-8fe38058eea9', '2025-04-10 00:00:00.000000', '2025-04-10 08:08:57.000000', '2025-04-10 17:56:00.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1c9f-45f5-82e7-f619207f6fc0', '2025-04-10 00:00:00.000000', '2025-04-10 08:09:35.000000', '2025-04-10 17:31:01.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1c9f-4637-8ff9-15e96fe53fbe', '2025-04-10 00:00:00.000000', '2025-04-10 08:13:37.000000', '2025-04-10 17:46:37.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1c9f-46a0-8f17-251f4194ba39', '2025-04-10 00:00:00.000000', '2025-04-10 08:14:12.000000', '2025-04-10 17:46:15.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1c9f-46e2-8334-b6193fb36fa0', '2025-04-10 00:00:00.000000', '2025-04-10 08:15:12.000000', '2025-04-10 17:21:18.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1c9f-4728-8bb8-9822cf4bbc90', '2025-04-10 00:00:00.000000', '2025-04-10 08:19:01.000000', '2025-04-10 17:54:23.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1c9f-4776-8268-b06f845354c0', '2025-04-10 00:00:00.000000', '2025-04-10 08:20:42.000000', '2025-04-10 17:24:41.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1c9f-47b9-8bba-bf76538fe258', '2025-04-10 00:00:00.000000', '2025-04-10 08:21:18.000000', '2025-04-10 17:55:38.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1c9f-47d6-8889-2e2fc7dab5c6', '2025-04-10 00:00:00.000000', '2025-04-10 08:23:31.000000', '2025-04-10 18:22:08.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1c9f-480b-8c80-6d7f51046c62', '2025-04-10 00:00:00.000000', '2025-04-10 08:24:10.000000', '2025-04-10 12:06:14.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1c9f-4834-8b54-1d7de62c10bf', '2025-04-10 00:00:00.000000', '2025-04-10 08:25:30.000000', '2025-04-10 19:05:45.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1c9f-4862-833a-d333ddd81687', '2025-04-10 00:00:00.000000', '2025-04-10 08:28:24.000000', '2025-04-10 19:58:55.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1c9f-489b-825a-710faa4d70a5', '2025-04-10 00:00:00.000000', '2025-04-10 08:28:55.000000', '2025-04-10 18:01:14.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1c9f-48c2-80c0-76b37b09fcf0', '2025-04-10 00:00:00.000000', '2025-04-10 08:34:30.000000', '2025-04-10 18:09:13.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1c9f-48f3-8426-49c8d5a7fe31', '2025-04-10 00:00:00.000000', '2025-04-10 08:44:46.000000', '2025-04-10 13:39:16.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1c9f-493e-8289-42589478cdcd', '2025-04-10 00:00:00.000000', '2025-04-10 08:45:57.000000', '2025-04-10 18:41:38.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1c9f-49a9-8d28-6e41ebe4f068', '2025-04-10 00:00:00.000000', '2025-04-10 08:48:20.000000', '2025-04-10 17:53:06.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1c9f-4a93-88e4-0c8182b63201', '2025-04-10 00:00:00.000000', '2025-04-10 08:51:18.000000', '2025-04-10 18:11:30.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1c9f-4af4-8ce5-b2ccac630bbc', '2025-04-10 00:00:00.000000', '2025-04-10 08:54:38.000000', '2025-04-10 15:26:55.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1c9f-4d8a-8419-3a712f01bf52', '2025-04-10 00:00:00.000000', '2025-04-10 08:58:19.000000', '2025-04-10 17:30:01.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1c9f-4ffc-8427-cbd2992bdb6d', '2025-04-10 00:00:00.000000', '2025-04-10 09:04:44.000000', '2025-04-10 18:35:05.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca0-406e-8faa-0cc07688d80a', '2025-04-10 00:00:00.000000', '2025-04-10 09:48:29.000000', '2025-04-10 17:40:51.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca0-40eb-8cdd-08ffbe68d78f', '2025-04-10 00:00:00.000000', '2025-04-10 10:49:12.000000', '2025-04-10 17:30:23.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca0-41d6-8c9e-e70ad9d2a829', '2025-04-10 00:00:00.000000', '2025-04-10 16:44:39.000000', '2025-04-10 18:17:22.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca0-4297-8a59-b8fea0b91cd0', '2025-04-11 00:00:00.000000', '2025-04-11 07:05:51.000000', '2025-04-11 14:25:21.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca0-4644-8c52-24bd2600bbac', '2025-04-11 00:00:00.000000', '2025-04-11 07:30:16.000000', '2025-04-11 18:10:35.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca0-4784-80be-57e966963039', '2025-04-11 00:00:00.000000', '2025-04-11 07:44:55.000000', '2025-04-11 16:40:17.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca0-47e2-8e5f-ede7a3b72a70', '2025-04-11 00:00:00.000000', '2025-04-11 07:46:28.000000', '2025-04-11 15:16:34.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca0-485f-8fa0-efc7167225f2', '2025-04-11 00:00:00.000000', '2025-04-11 07:51:14.000000', '2025-04-11 16:22:54.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca0-48c5-8440-2e35100a7580', '2025-04-11 00:00:00.000000', '2025-04-11 07:54:10.000000', '2025-04-11 16:13:37.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca0-4957-83ba-eddc2a605f7f', '2025-04-11 00:00:00.000000', '2025-04-11 07:56:03.000000', '2025-04-11 17:48:23.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca0-49b9-8b21-73962600025c', '2025-04-11 00:00:00.000000', '2025-04-11 07:58:44.000000', '2025-04-11 16:00:59.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca0-4a5f-8bf0-495a7e52192a', '2025-04-11 00:00:00.000000', '2025-04-11 07:59:11.000000', '2025-04-11 12:06:17.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca0-4f53-8b65-8b9a6877ddb3', '2025-04-11 00:00:00.000000', '2025-04-11 07:59:36.000000', '2025-04-11 15:10:52.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca1-44e8-83a8-051d3a02a240', '2025-04-11 00:00:00.000000', '2025-04-11 08:02:40.000000', '2025-04-11 17:39:28.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca1-46bc-8ad8-4154682b2137', '2025-04-11 00:00:00.000000', '2025-04-11 08:04:24.000000', '2025-04-11 17:38:12.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca1-4794-8a6d-cae6658ca705', '2025-04-11 00:00:00.000000', '2025-04-11 08:05:23.000000', '2025-04-11 14:38:49.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca1-4842-8244-3cb545102689', '2025-04-11 00:00:00.000000', '2025-04-11 08:05:49.000000', '2025-04-11 15:20:47.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca1-4888-82ff-9b93fdce621f', '2025-04-11 00:00:00.000000', '2025-04-11 08:07:07.000000', '2025-04-11 17:42:53.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca1-4916-8006-69b51cfc8c19', '2025-04-11 00:00:00.000000', '2025-04-11 08:08:13.000000', '2025-04-11 16:31:52.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca1-499d-8f60-26ef5b707429', '2025-04-11 00:00:00.000000', '2025-04-11 08:10:43.000000', '2025-04-11 17:53:00.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca1-4a3d-8086-524376c16416', '2025-04-11 00:00:00.000000', '2025-04-11 08:11:24.000000', '2025-04-11 17:44:03.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca1-4ac9-88f1-2b6c6914839d', '2025-04-11 00:00:00.000000', '2025-04-11 08:15:43.000000', '2025-04-11 17:49:06.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca1-4afe-84c9-ff7a420da639', '2025-04-11 00:00:00.000000', '2025-04-11 08:19:12.000000', '2025-04-11 18:22:13.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca1-4b59-840e-71743b727ad7', '2025-04-11 00:00:00.000000', '2025-04-11 08:19:28.000000', '2025-04-11 17:52:17.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca1-4bfa-8c18-f088e66f2497', '2025-04-11 00:00:00.000000', '2025-04-11 08:20:27.000000', '2025-04-11 17:53:59.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca1-4c6d-8b17-60afcff3f7af', '2025-04-11 00:00:00.000000', '2025-04-11 08:21:37.000000', '2025-04-11 17:54:37.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca1-4ccc-8d2c-cdb6844723dd', '2025-04-11 00:00:00.000000', '2025-04-11 08:25:52.000000', '2025-04-11 17:57:45.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca1-4cf0-864c-c34f32aeacb4', '2025-04-11 00:00:00.000000', '2025-04-11 08:34:09.000000', '2025-04-11 18:12:48.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca1-4d22-8c51-440d0ef4acce', '2025-04-11 00:00:00.000000', '2025-04-11 08:35:18.000000', '2025-04-11 18:09:35.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca1-4d56-893c-08b381b67bcb', '2025-04-11 00:00:00.000000', '2025-04-11 08:37:14.000000', '2025-04-11 17:24:13.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca1-4da4-87eb-250e4fd87601', '2025-04-11 00:00:00.000000', '2025-04-11 08:39:08.000000', '2025-04-11 13:37:58.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca1-4dc7-8f11-b1013618672a', '2025-04-11 00:00:00.000000', '2025-04-11 08:41:07.000000', '2025-04-11 16:13:06.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1);
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `UserId`, `IsActive`) VALUES
('08dd870a-1ca1-4e02-8c27-cb336b49e531', '2025-04-11 00:00:00.000000', '2025-04-11 08:45:21.000000', '2025-04-11 18:33:56.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca1-4e28-8001-bed83c728962', '2025-04-11 00:00:00.000000', '2025-04-11 08:46:48.000000', '2025-04-11 18:14:23.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca1-4e51-889c-f7949a78f457', '2025-04-11 00:00:00.000000', '2025-04-11 08:52:51.000000', '2025-04-11 18:28:10.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca1-4e9b-86f3-0f027e342293', '2025-04-11 00:00:00.000000', '2025-04-11 09:11:35.000000', '2025-04-11 16:02:05.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca1-4ebb-89e9-c50fb99cced3', '2025-04-11 00:00:00.000000', '2025-04-11 09:31:23.000000', '2025-04-11 17:24:27.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca1-4eeb-838e-5720cf13de2f', '2025-04-11 00:00:00.000000', '2025-04-11 11:27:17.000000', '2025-04-11 14:50:06.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca1-4f18-82ff-d0a397c8fa66', '2025-04-11 00:00:00.000000', '2025-04-11 11:55:06.000000', '2025-04-11 15:18:41.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca1-4f4d-8c65-0ab0d323948c', '2025-04-11 00:00:00.000000', '2025-04-11 13:29:26.000000', NULL, 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca1-4f84-86d2-419d438c64a7', '2025-04-12 00:00:00.000000', '2025-04-12 06:27:13.000000', '2025-04-12 07:25:31.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca1-4fad-8fe8-3bf66b8dd1e9', '2025-04-12 00:00:00.000000', '2025-04-12 08:27:58.000000', '2025-04-12 18:29:57.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca1-4fe2-835c-72b91b824fcb', '2025-04-14 00:00:00.000000', '2025-04-14 07:04:02.000000', '2025-04-14 15:21:04.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca2-400e-857c-7a4502d43948', '2025-04-14 00:00:00.000000', '2025-04-14 07:39:15.000000', '2025-04-14 17:15:32.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca2-4045-819e-f9a361e355a4', '2025-04-14 00:00:00.000000', '2025-04-14 07:40:38.000000', '2025-04-14 17:33:53.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca2-4074-856c-9418145cdf0c', '2025-04-14 00:00:00.000000', '2025-04-14 07:44:55.000000', '2025-04-14 17:36:24.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca2-409c-8c46-2c9064201cfd', '2025-04-14 00:00:00.000000', '2025-04-14 07:47:19.000000', '2025-04-14 17:42:42.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca2-40df-8a35-6722867aa84d', '2025-04-14 00:00:00.000000', '2025-04-14 07:51:15.000000', '2025-04-14 16:09:11.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca2-40fd-804f-698de714ca7f', '2025-04-14 00:00:00.000000', '2025-04-14 07:54:07.000000', '2025-04-14 16:58:35.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca2-411a-8786-e113d2fa32b9', '2025-04-14 00:00:00.000000', '2025-04-14 07:55:45.000000', '2025-04-14 17:32:18.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca2-4147-830d-998481498e9a', '2025-04-14 00:00:00.000000', '2025-04-14 07:57:51.000000', '2025-04-14 17:19:40.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca2-4179-8a11-30084e69d64d', '2025-04-14 00:00:00.000000', '2025-04-14 07:59:38.000000', '2025-04-14 14:38:59.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca2-41b3-8491-04d42cbca2b7', '2025-04-14 00:00:00.000000', '2025-04-14 08:00:25.000000', '2025-04-14 17:34:15.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca2-41e0-8c0a-dbef154ca8a1', '2025-04-14 00:00:00.000000', '2025-04-14 08:01:39.000000', '2025-04-14 17:10:05.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca2-421d-82c7-2c6e1e9648e7', '2025-04-14 00:00:00.000000', '2025-04-14 08:01:50.000000', '2025-04-14 17:46:31.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca2-4255-8e69-0c1fb3e427a4', '2025-04-14 00:00:00.000000', '2025-04-14 08:03:31.000000', '2025-04-14 13:32:29.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca2-4290-806a-99c99557167d', '2025-04-14 00:00:00.000000', '2025-04-14 08:03:54.000000', '2025-04-14 17:37:27.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca2-42ad-8e09-6b90f178473b', '2025-04-14 00:00:00.000000', '2025-04-14 08:05:02.000000', '2025-04-14 18:03:13.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca2-42ef-8793-d3dd573846b3', '2025-04-14 00:00:00.000000', '2025-04-14 08:05:37.000000', '2025-04-14 18:36:05.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca2-43d1-830b-8db37a800ead', '2025-04-14 00:00:00.000000', '2025-04-14 08:06:27.000000', '2025-04-14 17:39:51.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca2-4402-8d20-645c6dbddc96', '2025-04-14 00:00:00.000000', '2025-04-14 08:07:37.000000', '2025-04-14 17:35:01.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca2-446d-80bb-cbe48ec9e2bb', '2025-04-14 00:00:00.000000', '2025-04-14 08:11:25.000000', '2025-04-14 17:44:21.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca2-44ed-8e20-f8ab4e56f8e4', '2025-04-14 00:00:00.000000', '2025-04-14 08:16:24.000000', '2025-04-14 16:54:39.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca2-4531-8354-0a86bddbbe27', '2025-04-14 00:00:00.000000', '2025-04-14 08:18:46.000000', '2025-04-14 17:53:09.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca2-457d-8457-7c84781bbf6a', '2025-04-14 00:00:00.000000', '2025-04-14 08:19:25.000000', '2025-04-14 17:55:01.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca2-45c7-8345-cb973e715260', '2025-04-14 00:00:00.000000', '2025-04-14 08:19:51.000000', '2025-04-14 12:04:10.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca2-460c-8891-0f2090edbd0e', '2025-04-14 00:00:00.000000', '2025-04-14 08:20:43.000000', '2025-04-14 17:43:37.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca2-4668-88c8-7d28d4477707', '2025-04-14 00:00:00.000000', '2025-04-14 08:22:59.000000', '2025-04-14 17:54:13.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca2-46b7-86f0-315696a3df86', '2025-04-14 00:00:00.000000', '2025-04-14 08:24:33.000000', '2025-04-14 18:10:43.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca2-4740-8858-539718d95143', '2025-04-14 00:00:00.000000', '2025-04-14 08:27:48.000000', '2025-04-14 18:39:46.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca2-49ed-831e-fa7553eb4eb6', '2025-04-14 00:00:00.000000', '2025-04-14 08:32:34.000000', '2025-04-14 17:33:08.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca2-4a39-8a59-9aec338db416', '2025-04-14 00:00:00.000000', '2025-04-14 08:52:35.000000', '2025-04-14 18:17:11.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca2-4a77-8576-ea2397f23469', '2025-04-14 00:00:00.000000', '2025-04-14 08:52:56.000000', '2025-04-14 17:46:56.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca2-4a9e-831a-cb58087a4464', '2025-04-14 00:00:00.000000', '2025-04-14 08:54:50.000000', '2025-04-14 17:12:27.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca2-4ad2-86c4-04f9671af5e6', '2025-04-14 00:00:00.000000', '2025-04-14 08:56:33.000000', '2025-04-14 18:34:52.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca2-4b1c-815e-6b04ac6b2982', '2025-04-14 00:00:00.000000', '2025-04-14 08:57:03.000000', '2025-04-14 19:25:45.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca2-4b6b-82dc-8de2e2743db9', '2025-04-14 00:00:00.000000', '2025-04-14 08:58:32.000000', '2025-04-14 15:40:45.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca2-4d9e-88a6-2ee5e614f8b4', '2025-04-14 00:00:00.000000', '2025-04-14 09:47:57.000000', '2025-04-14 16:59:43.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca2-4eed-8e0c-f9a215a69d3b', '2025-04-14 00:00:00.000000', '2025-04-14 09:54:44.000000', '2025-04-14 16:48:25.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca3-4043-8708-05208819d0bf', '2025-04-15 00:00:00.000000', '2025-04-15 06:36:20.000000', '2025-04-15 16:32:20.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca3-40e9-86dc-37605b22be89', '2025-04-15 00:00:00.000000', '2025-04-15 07:17:47.000000', '2025-04-15 17:35:30.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca3-412f-8c31-d86ec447fb44', '2025-04-15 00:00:00.000000', '2025-04-15 07:40:36.000000', '2025-04-15 17:33:24.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca3-4160-86e8-d359edc2a783', '2025-04-15 00:00:00.000000', '2025-04-15 07:47:18.000000', '2025-04-15 17:35:47.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca3-4185-8218-bc61fa4d2c42', '2025-04-15 00:00:00.000000', '2025-04-15 07:52:02.000000', '2025-04-15 15:16:14.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca3-41a6-8717-890c6e7031c5', '2025-04-15 00:00:00.000000', '2025-04-15 07:53:09.000000', '2025-04-15 17:07:12.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca3-41c2-85e7-182f2cf1d604', '2025-04-15 00:00:00.000000', '2025-04-15 07:53:46.000000', '2025-04-15 17:44:04.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca3-41d9-8ecb-14869d6560fb', '2025-04-15 00:00:00.000000', '2025-04-15 07:55:12.000000', '2025-04-15 17:37:45.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca3-41ef-87eb-fcae0c534554', '2025-04-15 00:00:00.000000', '2025-04-15 07:58:05.000000', '2025-04-15 16:31:43.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca3-420f-81be-3335104c6642', '2025-04-15 00:00:00.000000', '2025-04-15 08:02:16.000000', '2025-04-15 17:45:00.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca3-422e-8812-3fa1adf26a83', '2025-04-15 00:00:00.000000', '2025-04-15 08:02:50.000000', '2025-04-15 17:37:30.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca3-42ae-8941-fa5a57788737', '2025-04-15 00:00:00.000000', '2025-04-15 08:03:11.000000', '2025-04-15 17:57:43.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca3-4343-8135-5c8de110c5da', '2025-04-15 00:00:00.000000', '2025-04-15 08:06:35.000000', '2025-04-15 17:42:38.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca3-4396-8e36-6fcc4e02d81a', '2025-04-15 00:00:00.000000', '2025-04-15 08:10:45.000000', '2025-04-15 18:06:01.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca3-45f4-8156-4ab42f13dc27', '2025-04-15 00:00:00.000000', '2025-04-15 08:12:01.000000', '2025-04-15 14:04:35.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca3-46d3-806f-6c8f622112a3', '2025-04-15 00:00:00.000000', '2025-04-15 08:12:46.000000', '2025-04-15 18:11:20.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca3-487f-8a6f-f62b5b0252fd', '2025-04-15 00:00:00.000000', '2025-04-15 08:14:54.000000', '2025-04-15 09:38:04.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca3-4a42-886c-56fca76bb19f', '2025-04-15 00:00:00.000000', '2025-04-15 08:15:00.000000', '2025-04-15 17:48:08.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca3-4adc-82a4-ddf3da2b5a0d', '2025-04-15 00:00:00.000000', '2025-04-15 08:18:17.000000', '2025-04-15 17:51:10.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca3-4b25-894c-323183d93592', '2025-04-15 00:00:00.000000', '2025-04-15 08:21:47.000000', '2025-04-15 17:39:56.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca3-4b44-8193-9ef27d0a9443', '2025-04-15 00:00:00.000000', '2025-04-15 08:22:03.000000', '2025-04-15 17:57:13.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca3-4ba3-8817-ee2264ee00b6', '2025-04-15 00:00:00.000000', '2025-04-15 08:28:18.000000', '2025-04-15 16:57:59.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca3-4c08-80c7-a4b845428911', '2025-04-15 00:00:00.000000', '2025-04-15 08:35:26.000000', '2025-04-15 18:01:34.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca3-4c76-80a6-67164577df16', '2025-04-15 00:00:00.000000', '2025-04-15 08:38:04.000000', '2025-04-15 18:26:15.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca3-4c99-806a-12d1fff1a122', '2025-04-15 00:00:00.000000', '2025-04-15 08:44:00.000000', '2025-04-15 18:25:12.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca3-4cb6-87c1-b03f5bb64ead', '2025-04-15 00:00:00.000000', '2025-04-15 08:46:11.000000', '2025-04-15 18:22:43.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca3-4ceb-8979-7755b325bc00', '2025-04-15 00:00:00.000000', '2025-04-15 08:48:56.000000', '2025-04-15 18:34:41.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca3-4d26-8e51-63d4ef5bf761', '2025-04-15 00:00:00.000000', '2025-04-15 08:54:05.000000', '2025-04-15 18:28:49.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca3-4d56-866a-6aced772b0e3', '2025-04-15 00:00:00.000000', '2025-04-15 08:55:29.000000', '2025-04-15 18:10:20.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca3-4d77-88b7-bda2ad4a1c1c', '2025-04-15 00:00:00.000000', '2025-04-15 08:57:11.000000', '2025-04-15 20:05:01.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca3-4d8d-8b00-765e4dfb75aa', '2025-04-15 00:00:00.000000', '2025-04-15 08:59:06.000000', '2025-04-15 14:09:41.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca3-4da0-834c-8108ea50d904', '2025-04-15 00:00:00.000000', '2025-04-15 09:00:35.000000', '2025-04-15 17:33:06.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca3-4db3-86b3-1f8c07345a96', '2025-04-15 00:00:00.000000', '2025-04-15 09:15:42.000000', '2025-04-15 14:01:32.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca3-4dc7-84d5-d1c71a370c7f', '2025-04-15 00:00:00.000000', '2025-04-15 09:19:09.000000', '2025-04-15 12:32:14.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca3-4ddc-8c06-ec2d1222d84d', '2025-04-15 00:00:00.000000', '2025-04-15 10:07:42.000000', '2025-04-15 15:18:39.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca3-4e3e-845e-434ce282d1bf', '2025-04-15 00:00:00.000000', '2025-04-15 10:19:27.000000', '2025-04-15 17:45:33.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca3-4e60-8c05-3df8640fe7b4', '2025-04-15 00:00:00.000000', '2025-04-15 10:35:05.000000', '2025-04-15 18:08:22.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca3-4e79-8b1a-ffb70fb9b99e', '2025-04-15 00:00:00.000000', '2025-04-15 10:54:25.000000', '2025-04-15 17:36:35.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca3-4e95-810a-def21cd87ffe', '2025-04-16 00:00:00.000000', '2025-04-16 07:06:48.000000', '2025-04-16 15:40:42.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca3-4edd-8f02-99acf9ba8bed', '2025-04-16 00:00:00.000000', '2025-04-16 07:31:04.000000', '2025-04-16 17:36:06.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca3-4f12-8390-127fb7bc716f', '2025-04-16 00:00:00.000000', '2025-04-16 07:34:39.000000', '2025-04-16 16:18:35.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca3-4f4d-83d0-fcbadba3bf68', '2025-04-16 00:00:00.000000', '2025-04-16 07:35:41.000000', '2025-04-16 17:38:40.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca3-4f7b-8042-c5dde7b0e61c', '2025-04-16 00:00:00.000000', '2025-04-16 07:48:58.000000', '2025-04-16 17:34:03.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca3-4f99-8ece-30a6abdd359b', '2025-04-16 00:00:00.000000', '2025-04-16 07:50:33.000000', '2025-04-16 17:56:23.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca3-4fbc-8ebf-42e487c73903', '2025-04-16 00:00:00.000000', '2025-04-16 07:52:48.000000', '2025-04-16 16:05:11.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca3-4fd5-838a-262d5b737645', '2025-04-16 00:00:00.000000', '2025-04-16 07:57:42.000000', '2025-04-16 15:54:19.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca3-4ff5-881e-93048a38065f', '2025-04-16 00:00:00.000000', '2025-04-16 07:59:22.000000', '2025-04-16 17:39:04.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca4-4014-8804-f4c4e5b13c69', '2025-04-16 00:00:00.000000', '2025-04-16 08:03:01.000000', '2025-04-16 16:30:07.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca4-4036-83db-2064e84cf932', '2025-04-16 00:00:00.000000', '2025-04-16 08:03:41.000000', '2025-04-16 17:37:55.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca4-4057-80b0-708af2577338', '2025-04-16 00:00:00.000000', '2025-04-16 08:04:39.000000', '2025-04-16 17:09:36.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca4-4076-8a80-4409b42593e9', '2025-04-16 00:00:00.000000', '2025-04-16 08:05:58.000000', '2025-04-16 17:49:46.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca4-409a-81b0-f0711f7689f6', '2025-04-16 00:00:00.000000', '2025-04-16 08:08:58.000000', '2025-04-16 17:28:58.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca4-40b5-834a-01fcda0ea8d0', '2025-04-16 00:00:00.000000', '2025-04-16 08:11:46.000000', '2025-04-16 16:59:45.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca4-40ea-869b-d5db297ee9f3', '2025-04-16 00:00:00.000000', '2025-04-16 08:13:40.000000', '2025-04-16 16:32:11.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca4-410b-8572-940cce403757', '2025-04-16 00:00:00.000000', '2025-04-16 08:16:00.000000', '2025-04-16 16:09:20.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca4-412c-8f30-7c5dc28193b6', '2025-04-16 00:00:00.000000', '2025-04-16 08:16:57.000000', '2025-04-16 17:51:04.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca4-414e-81ff-8cc8e29c771c', '2025-04-16 00:00:00.000000', '2025-04-16 08:19:17.000000', '2025-04-16 17:54:22.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca4-416a-8efb-d2d2758cf116', '2025-04-16 00:00:00.000000', '2025-04-16 08:20:45.000000', '2025-04-16 17:51:37.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca4-418b-85a8-e5280f405ddf', '2025-04-16 00:00:00.000000', '2025-04-16 08:21:59.000000', '2025-04-16 17:57:56.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca4-41c4-8d46-198eb07f4749', '2025-04-16 00:00:00.000000', '2025-04-16 08:22:17.000000', '2025-04-16 15:49:25.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca4-4203-8da8-b7cb3cf5947e', '2025-04-16 00:00:00.000000', '2025-04-16 08:26:38.000000', '2025-04-16 18:39:13.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca4-4226-8a47-e06f14ad6599', '2025-04-16 00:00:00.000000', '2025-04-16 08:36:08.000000', '2025-04-16 17:28:06.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca4-4254-81e8-e94f83dec3b8', '2025-04-16 00:00:00.000000', '2025-04-16 08:40:31.000000', '2025-04-16 18:38:43.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca4-429b-814a-99d0840f5f58', '2025-04-16 00:00:00.000000', '2025-04-16 08:43:59.000000', '2025-04-16 17:55:54.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca4-42bc-8da2-cd74c6790938', '2025-04-16 00:00:00.000000', '2025-04-16 08:44:36.000000', '2025-04-16 18:31:12.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca4-42f2-89ef-935ceb0bafee', '2025-04-16 00:00:00.000000', '2025-04-16 08:52:50.000000', '2025-04-16 16:17:54.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca4-4328-8809-079af2110700', '2025-04-16 00:00:00.000000', '2025-04-16 08:53:01.000000', '2025-04-16 18:28:35.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca4-4349-84f3-a73dd93684bc', '2025-04-16 00:00:00.000000', '2025-04-16 08:54:02.000000', '2025-04-16 17:31:14.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca4-435e-8d1a-38303bb69f81', '2025-04-16 00:00:00.000000', '2025-04-16 09:02:16.000000', '2025-04-16 17:04:42.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca4-4376-82a1-a3641366ed16', '2025-04-16 00:00:00.000000', '2025-04-16 09:03:35.000000', '2025-04-16 15:51:45.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca4-4397-88ca-a45b1be6c173', '2025-04-16 00:00:00.000000', '2025-04-16 09:07:41.000000', '2025-04-16 18:28:58.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca4-43cf-8e90-3c1ceef2465a', '2025-04-16 00:00:00.000000', '2025-04-16 11:01:58.000000', '2025-04-16 17:48:31.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca4-43f0-81ff-6c87ac0ce9f7', '2025-04-16 00:00:00.000000', '2025-04-16 11:07:34.000000', '2025-04-16 16:45:29.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca4-440e-8bb8-e73f3516a80e', '2025-04-16 00:00:00.000000', '2025-04-16 13:27:48.000000', '2025-04-16 17:06:24.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca4-442f-87eb-725890c49398', '2025-04-17 00:00:00.000000', '2025-04-17 07:16:01.000000', '2025-04-17 17:01:10.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca4-4448-89d4-67e9fedf64d5', '2025-04-17 00:00:00.000000', '2025-04-17 07:29:16.000000', '2025-04-17 17:43:34.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca4-445f-8ff3-a3d5b1dfd725', '2025-04-17 00:00:00.000000', '2025-04-17 07:31:29.000000', '2025-04-17 15:10:40.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca4-4480-8907-a1e5b419195f', '2025-04-17 00:00:00.000000', '2025-04-17 07:37:59.000000', '2025-04-17 16:33:22.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca4-44a1-8d1d-f89489113969', '2025-04-17 00:00:00.000000', '2025-04-17 07:50:21.000000', '2025-04-17 17:34:18.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca4-44c0-887b-3ba5a37a60b2', '2025-04-17 00:00:00.000000', '2025-04-17 07:55:08.000000', '2025-04-17 11:59:38.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca4-44df-87b5-71fc626f252a', '2025-04-17 00:00:00.000000', '2025-04-17 07:56:25.000000', '2025-04-17 17:10:41.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca4-4503-8724-9fb54b09fdcd', '2025-04-17 00:00:00.000000', '2025-04-17 07:56:51.000000', '2025-04-17 17:35:52.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca4-4532-8227-181a2166db31', '2025-04-17 00:00:00.000000', '2025-04-17 07:57:26.000000', '2025-04-17 17:36:45.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca4-455b-86b5-cb76dd4ec32f', '2025-04-17 00:00:00.000000', '2025-04-17 07:58:00.000000', '2025-04-17 17:33:59.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca4-4586-89e3-d8c7adcd9431', '2025-04-17 00:00:00.000000', '2025-04-17 08:00:41.000000', '2025-04-17 17:26:45.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca4-45a7-831e-46372ac42078', '2025-04-17 00:00:00.000000', '2025-04-17 08:02:27.000000', '2025-04-17 17:11:40.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca4-45bf-867e-d87f4be21472', '2025-04-17 00:00:00.000000', '2025-04-17 08:04:06.000000', '2025-04-17 17:40:52.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca4-45e6-8431-b292c6e0552f', '2025-04-17 00:00:00.000000', '2025-04-17 08:04:25.000000', '2025-04-17 17:42:06.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca4-461b-8f13-a8e36abab35e', '2025-04-17 00:00:00.000000', '2025-04-17 08:05:38.000000', '2025-04-17 17:38:45.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca4-4638-8c29-d08fb44435a2', '2025-04-17 00:00:00.000000', '2025-04-17 08:08:38.000000', '2025-04-17 17:43:07.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca4-4651-89a3-22bf4d11f565', '2025-04-17 00:00:00.000000', '2025-04-17 08:09:49.000000', '2025-04-17 16:51:24.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca4-4662-8c25-8ffe51694860', '2025-04-17 00:00:00.000000', '2025-04-17 08:14:13.000000', '2025-04-17 15:29:20.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca4-468d-81ac-c9ee76a2c220', '2025-04-17 00:00:00.000000', '2025-04-17 08:15:12.000000', '2025-04-17 17:42:29.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca4-46b2-8b78-9d4a68273af7', '2025-04-17 00:00:00.000000', '2025-04-17 08:15:26.000000', '2025-04-17 18:26:33.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca4-46d1-8fab-0ffbe29b8b55', '2025-04-17 00:00:00.000000', '2025-04-17 08:18:17.000000', '2025-04-17 15:47:54.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca4-4715-838e-93d340ee7e74', '2025-04-17 00:00:00.000000', '2025-04-17 08:20:27.000000', '2025-04-17 17:31:35.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca4-473d-8e02-110e2e0fd540', '2025-04-17 00:00:00.000000', '2025-04-17 08:21:51.000000', '2025-04-17 16:39:24.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca4-4758-81a6-e7851b189fd0', '2025-04-17 00:00:00.000000', '2025-04-17 08:22:10.000000', '2025-04-17 18:32:33.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca4-476e-80b4-a0c0efdb6d07', '2025-04-17 00:00:00.000000', '2025-04-17 08:22:35.000000', '2025-04-17 17:58:05.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca4-4783-8a07-c58449364ad5', '2025-04-17 00:00:00.000000', '2025-04-17 08:36:48.000000', '2025-04-17 18:38:54.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca4-4870-8010-59223a1feb48', '2025-04-17 00:00:00.000000', '2025-04-17 08:38:24.000000', '2025-04-17 18:17:04.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca4-489c-856f-a2c95bd162df', '2025-04-17 00:00:00.000000', '2025-04-17 08:44:15.000000', '2025-04-17 18:25:59.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca4-48bb-8910-8258df89725b', '2025-04-17 00:00:00.000000', '2025-04-17 08:49:44.000000', '2025-04-17 18:03:59.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca4-496a-8409-e9fde47b2bf6', '2025-04-17 00:00:00.000000', '2025-04-17 08:51:23.000000', '2025-04-17 16:43:19.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca4-4991-8aa6-302d959ceee2', '2025-04-17 00:00:00.000000', '2025-04-17 08:55:31.000000', '2025-04-17 19:16:48.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca4-49b3-8dd0-ecdd6bc9d241', '2025-04-17 00:00:00.000000', '2025-04-17 09:04:41.000000', '2025-04-17 17:15:35.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca4-4a11-88d0-87413df207c9', '2025-04-17 00:00:00.000000', '2025-04-17 09:08:36.000000', '2025-04-17 17:25:01.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca4-4a5e-8e15-04c2167656e1', '2025-04-17 00:00:00.000000', '2025-04-17 09:10:42.000000', '2025-04-17 16:22:22.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca4-4afe-80e2-32b0a8a0a18a', '2025-04-17 00:00:00.000000', '2025-04-17 09:24:14.000000', '2025-04-17 19:09:39.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca4-4b32-8a12-da7a5bb6318a', '2025-04-17 00:00:00.000000', '2025-04-17 09:31:11.000000', '2025-04-17 18:01:32.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca4-4b56-81d0-8b80f7fd73e1', '2025-04-17 00:00:00.000000', '2025-04-17 10:36:53.000000', '2025-04-17 19:10:25.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca4-4b95-8e78-1b8d6972cccf', '2025-04-17 00:00:00.000000', '2025-04-17 11:10:45.000000', '2025-04-17 17:09:59.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca4-4c09-8827-777e2c295fad', '2025-04-18 00:00:00.000000', '2025-04-18 06:50:24.000000', '2025-04-18 17:01:11.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca4-4c43-8a8d-fbf243f9522d', '2025-04-18 00:00:00.000000', '2025-04-18 07:34:42.000000', '2025-04-18 14:53:08.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca4-4c8e-8d3b-3cb528554a27', '2025-04-18 00:00:00.000000', '2025-04-18 07:38:09.000000', '2025-04-18 16:57:56.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca4-4cce-87c4-c47dccead802', '2025-04-18 00:00:00.000000', '2025-04-18 07:49:54.000000', '2025-04-18 16:17:05.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca4-4cf5-8fad-34cde4b82ee3', '2025-04-18 00:00:00.000000', '2025-04-18 07:55:52.000000', '2025-04-18 10:34:45.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca4-4d18-88bc-184f035e5e2b', '2025-04-18 00:00:00.000000', '2025-04-18 07:58:16.000000', '2025-04-18 16:04:43.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca4-4d3c-8b45-b147ccc3ad54', '2025-04-18 00:00:00.000000', '2025-04-18 07:59:27.000000', '2025-04-18 15:13:35.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca4-4d58-897c-4d3f881a8fde', '2025-04-18 00:00:00.000000', '2025-04-18 08:00:11.000000', '2025-04-18 17:02:58.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca4-4d76-8b96-a7f05e96e667', '2025-04-18 00:00:00.000000', '2025-04-18 08:01:29.000000', '2025-04-18 14:45:03.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca4-4d95-8426-54655744561e', '2025-04-18 00:00:00.000000', '2025-04-18 08:04:08.000000', '2025-04-18 15:26:50.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca4-4dab-8ea0-6d5b7b873e90', '2025-04-18 00:00:00.000000', '2025-04-18 08:04:55.000000', '2025-04-18 16:38:30.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca4-4dc9-83cb-46d0c8045f9c', '2025-04-18 00:00:00.000000', '2025-04-18 08:05:12.000000', '2025-04-18 17:44:45.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca4-4de5-8fc9-7b72da2112c2', '2025-04-18 00:00:00.000000', '2025-04-18 08:05:31.000000', '2025-04-18 15:09:51.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca4-4df6-871a-cfb017a457c7', '2025-04-18 00:00:00.000000', '2025-04-18 08:08:55.000000', '2025-04-18 15:35:37.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca4-4e16-8e25-66e58b5c77f6', '2025-04-18 00:00:00.000000', '2025-04-18 08:09:25.000000', '2025-04-18 15:36:22.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca4-4e48-8c1c-0317802f9094', '2025-04-18 00:00:00.000000', '2025-04-18 08:12:02.000000', '2025-04-18 15:31:37.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca4-4e66-8727-3dfb088fb70a', '2025-04-18 00:00:00.000000', '2025-04-18 08:12:21.000000', '2025-04-18 08:17:25.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca4-4e7e-8014-544a69b9f16a', '2025-04-18 00:00:00.000000', '2025-04-18 08:13:51.000000', '2025-04-18 17:49:39.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca4-4ea6-893d-49fb63dc61ac', '2025-04-18 00:00:00.000000', '2025-04-18 08:14:15.000000', '2025-04-18 16:02:13.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca4-4ec7-861b-6db472dc88e0', '2025-04-18 00:00:00.000000', '2025-04-18 08:16:57.000000', '2025-04-18 15:43:34.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca4-4ee6-8cb6-3478d3d5410a', '2025-04-18 00:00:00.000000', '2025-04-18 08:20:17.000000', '2025-04-18 16:31:04.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca4-4f07-89ee-6d68309cfaf3', '2025-04-18 00:00:00.000000', '2025-04-18 08:21:04.000000', '2025-04-18 17:00:43.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca4-4f36-823d-e3b27cd087a9', '2025-04-18 00:00:00.000000', '2025-04-18 08:21:22.000000', '2025-04-18 15:50:23.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca4-4f50-86db-70187b3c946c', '2025-04-18 00:00:00.000000', '2025-04-18 08:21:48.000000', '2025-04-18 18:20:46.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca4-4f70-853c-d9e9f917fe18', '2025-04-18 00:00:00.000000', '2025-04-18 08:32:25.000000', '2025-04-18 16:18:04.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca4-4f8e-8043-f2ccb5ffef79', '2025-04-18 00:00:00.000000', '2025-04-18 08:32:41.000000', '2025-04-18 16:24:58.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca4-4fa5-8972-c847d6f794d3', '2025-04-18 00:00:00.000000', '2025-04-18 08:37:12.000000', '2025-04-18 15:45:07.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca4-4fc1-820a-cb68d7f79a28', '2025-04-18 00:00:00.000000', '2025-04-18 08:38:12.000000', '2025-04-18 17:39:55.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca4-4fe0-808d-a2714f495949', '2025-04-18 00:00:00.000000', '2025-04-18 08:40:00.000000', '2025-04-18 16:56:49.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca4-4ffd-8c86-841c65219a4d', '2025-04-18 00:00:00.000000', '2025-04-18 08:40:56.000000', '2025-04-18 18:15:37.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca5-401b-8ae7-8d04c377b3bf', '2025-04-18 00:00:00.000000', '2025-04-18 08:44:16.000000', '2025-04-18 18:25:18.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca5-4039-8db8-02127b0d4e61', '2025-04-18 00:00:00.000000', '2025-04-18 08:50:08.000000', '2025-04-18 17:02:02.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca5-404f-8937-dc7f6c1ac19a', '2025-04-18 00:00:00.000000', '2025-04-18 09:05:09.000000', '2025-04-18 19:03:51.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca5-406c-817a-81dc0d9551e1', '2025-04-18 00:00:00.000000', '2025-04-18 10:07:39.000000', '2025-04-18 16:33:24.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca5-4092-862f-c0940959a3a8', '2025-04-18 00:00:00.000000', '2025-04-18 10:28:23.000000', '2025-04-18 16:26:52.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca5-40b5-8e89-c94fb97f2c17', '2025-04-18 00:00:00.000000', '2025-04-18 10:37:49.000000', '2025-04-18 14:55:31.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca5-40da-84be-85bb3035e5d4', '2025-04-18 00:00:00.000000', '2025-04-18 14:01:05.000000', '2025-04-18 18:07:51.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca5-4119-8077-0f21eeb2b056', '2025-04-19 00:00:00.000000', '2025-04-19 08:24:41.000000', '2025-04-19 09:10:23.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca5-4138-8b73-04b3332f4d63', '2025-04-21 00:00:00.000000', '2025-04-21 07:07:15.000000', '2025-04-21 17:35:14.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca5-416b-8fdf-a8cd4ed1dcf4', '2025-04-21 00:00:00.000000', '2025-04-21 07:23:13.000000', '2025-04-21 17:34:44.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca5-4185-8ad0-e97881daf191', '2025-04-21 00:00:00.000000', '2025-04-21 07:36:30.000000', NULL, 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca5-41bf-8d3e-43638e680f0f', '2025-04-21 00:00:00.000000', '2025-04-21 07:42:08.000000', '2025-04-21 17:32:00.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca5-41e5-8f47-bba4959f1818', '2025-04-21 00:00:00.000000', '2025-04-21 07:43:48.000000', '2025-04-21 12:31:57.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca5-41fc-8267-2d4145022e1d', '2025-04-21 00:00:00.000000', '2025-04-21 07:48:24.000000', '2025-04-21 15:23:23.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca5-4221-8bac-ef405cc29874', '2025-04-21 00:00:00.000000', '2025-04-21 07:49:45.000000', '2025-04-21 17:09:37.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca5-4240-8b15-d475b5df79c9', '2025-04-21 00:00:00.000000', '2025-04-21 07:57:01.000000', '2025-04-21 14:25:31.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca5-4261-81a2-d762387e43dd', '2025-04-21 00:00:00.000000', '2025-04-21 07:58:48.000000', '2025-04-21 17:23:49.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca5-427b-8b3f-41b9f2df59cf', '2025-04-21 00:00:00.000000', '2025-04-21 08:06:12.000000', '2025-04-21 17:14:13.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca5-4295-81ea-b1e6511e9c01', '2025-04-21 00:00:00.000000', '2025-04-21 08:08:33.000000', '2025-04-21 17:32:57.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca5-42b5-8b6b-5b6d2b624b3f', '2025-04-21 00:00:00.000000', '2025-04-21 08:10:00.000000', '2025-04-21 17:49:13.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca5-42d9-861b-556088129fb3', '2025-04-21 00:00:00.000000', '2025-04-21 08:12:09.000000', '2025-04-21 17:48:37.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca5-42ef-8db0-6ed1f0913dcc', '2025-04-21 00:00:00.000000', '2025-04-21 08:13:09.000000', '2025-04-21 17:49:56.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca5-430c-8c27-1f6d8ab1dd05', '2025-04-21 00:00:00.000000', '2025-04-21 08:14:15.000000', '2025-04-21 17:08:09.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca5-4326-8063-3e6a43396e65', '2025-04-21 00:00:00.000000', '2025-04-21 08:19:03.000000', '2025-04-21 17:52:30.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca5-433d-87d4-e9a19637cad9', '2025-04-21 00:00:00.000000', '2025-04-21 08:20:41.000000', '2025-04-21 17:52:43.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca5-435b-8d0e-f24d1cdc5912', '2025-04-21 00:00:00.000000', '2025-04-21 08:21:14.000000', '2025-04-21 18:43:41.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca5-4379-87e2-8c1f4f9d48a6', '2025-04-21 00:00:00.000000', '2025-04-21 08:21:46.000000', '2025-04-21 17:57:08.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca5-438c-8b1f-f6084139f4c5', '2025-04-21 00:00:00.000000', '2025-04-21 08:22:14.000000', '2025-04-21 18:05:43.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca5-43ac-8794-392c0686af56', '2025-04-21 00:00:00.000000', '2025-04-21 08:23:09.000000', '2025-04-21 18:03:11.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca5-43c6-83e3-e0e80548275f', '2025-04-21 00:00:00.000000', '2025-04-21 08:28:31.000000', '2025-04-21 18:01:50.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca5-43d4-8973-4feb6fbb8a17', '2025-04-21 00:00:00.000000', '2025-04-21 08:29:56.000000', '2025-04-21 17:33:55.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca5-440e-848f-7e856bd308de', '2025-04-21 00:00:00.000000', '2025-04-21 08:30:20.000000', '2025-04-21 17:14:42.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca5-4518-8902-0b45e3788084', '2025-04-21 00:00:00.000000', '2025-04-21 08:30:49.000000', '2025-04-21 17:34:12.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca5-466c-8dc5-a7235bec8dce', '2025-04-21 00:00:00.000000', '2025-04-21 08:35:43.000000', '2025-04-21 17:47:40.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca5-4732-8ca9-f21b8a2be82d', '2025-04-21 00:00:00.000000', '2025-04-21 08:39:49.000000', '2025-04-21 17:49:34.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca5-475c-85e8-7bfb1a0c6ab5', '2025-04-21 00:00:00.000000', '2025-04-21 08:45:19.000000', '2025-04-21 18:52:10.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca5-478a-8ec4-94ebe9090a96', '2025-04-21 00:00:00.000000', '2025-04-21 08:48:49.000000', '2025-04-21 18:25:56.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca5-47ab-8cfd-1bfe0045e61c', '2025-04-21 00:00:00.000000', '2025-04-21 08:49:37.000000', '2025-04-21 17:28:29.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca5-47ec-879f-40b69f30ed86', '2025-04-21 00:00:00.000000', '2025-04-21 08:55:34.000000', '2025-04-21 18:27:50.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca5-4806-8c6c-6bc6d958c063', '2025-04-21 00:00:00.000000', '2025-04-21 08:57:16.000000', '2025-04-21 18:32:04.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca5-481b-8f05-80ee16849bb7', '2025-04-21 00:00:00.000000', '2025-04-21 09:05:14.000000', '2025-04-21 18:36:59.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca5-4830-862c-90b3489e4a2b', '2025-04-21 00:00:00.000000', '2025-04-21 09:05:53.000000', '2025-04-21 12:54:26.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca5-4846-8554-d35ce60ac679', '2025-04-21 00:00:00.000000', '2025-04-21 09:22:56.000000', '2025-04-21 18:38:36.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca5-486a-8230-48ff5c8ee174', '2025-04-21 00:00:00.000000', '2025-04-21 09:34:24.000000', '2025-04-21 17:47:23.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca5-48c4-8676-1be66b6241d8', '2025-04-21 00:00:00.000000', '2025-04-21 12:01:59.000000', '2025-04-21 17:46:25.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca5-48e0-8176-8cc389976260', '2025-04-21 00:00:00.000000', '2025-04-21 13:10:51.000000', '2025-04-21 18:26:46.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca5-48f6-8431-4428306f45c0', '2025-04-22 00:00:00.000000', '2025-04-22 07:13:28.000000', '2025-04-22 14:53:08.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca5-490b-8df9-5a49e23d1037', '2025-04-22 00:00:00.000000', '2025-04-22 07:27:39.000000', '2025-04-22 17:39:40.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca5-4920-8891-782493e247ba', '2025-04-22 00:00:00.000000', '2025-04-22 07:41:10.000000', '2025-04-22 16:33:55.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca5-494d-82de-312e49d432e2', '2025-04-22 00:00:00.000000', '2025-04-22 07:47:11.000000', '2025-04-22 16:34:40.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca5-497a-8474-a1124068371a', '2025-04-22 00:00:00.000000', '2025-04-22 07:51:32.000000', '2025-04-22 16:43:56.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca5-4993-806b-d196ca92d4d0', '2025-04-22 00:00:00.000000', '2025-04-22 07:52:42.000000', '2025-04-22 17:24:59.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca5-49b7-8218-a82333afba14', '2025-04-22 00:00:00.000000', '2025-04-22 07:55:24.000000', '2025-04-22 18:17:11.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca5-49dc-8419-9d9d18401186', '2025-04-22 00:00:00.000000', '2025-04-22 07:59:36.000000', '2025-04-22 17:42:23.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca5-4a04-8a70-6d65d8287538', '2025-04-22 00:00:00.000000', '2025-04-22 08:03:53.000000', '2025-04-22 17:47:12.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca5-4a50-8694-07f3dba052bd', '2025-04-22 00:00:00.000000', '2025-04-22 08:04:51.000000', '2025-04-22 15:38:29.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca5-4a83-87bb-17609da3e2c9', '2025-04-22 00:00:00.000000', '2025-04-22 08:08:16.000000', '2025-04-22 16:23:56.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca5-4abd-8fe4-3371f23a377d', '2025-04-22 00:00:00.000000', '2025-04-22 08:08:57.000000', '2025-04-22 17:41:09.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca5-4b0e-83cb-f9f886272f23', '2025-04-22 00:00:00.000000', '2025-04-22 08:10:33.000000', '2025-04-22 15:48:22.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca5-4b36-8e65-d73347b95b23', '2025-04-22 00:00:00.000000', '2025-04-22 08:11:12.000000', '2025-04-22 17:56:45.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca5-4b6c-86f6-c9a8eb265948', '2025-04-22 00:00:00.000000', '2025-04-22 08:11:44.000000', '2025-04-22 17:44:03.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca5-4bbc-8ebb-4308c3d9cb16', '2025-04-22 00:00:00.000000', '2025-04-22 08:13:08.000000', '2025-04-22 17:07:49.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca5-4c4d-8565-82c97ee453be', '2025-04-22 00:00:00.000000', '2025-04-22 08:14:25.000000', '2025-04-22 16:59:30.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca5-4ead-873b-f3e20cbffdab', '2025-04-22 00:00:00.000000', '2025-04-22 08:16:34.000000', '2025-04-22 17:50:42.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca5-4f58-8d07-0d41baf8401a', '2025-04-22 00:00:00.000000', '2025-04-22 08:17:37.000000', '2025-04-22 15:52:00.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca6-4351-8ba7-81fc1cceedaf', '2025-04-22 00:00:00.000000', '2025-04-22 08:18:39.000000', '2025-04-22 18:03:49.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca6-4419-8f0d-978308d2d843', '2025-04-22 00:00:00.000000', '2025-04-22 08:19:52.000000', '2025-04-22 17:51:07.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca6-446c-8f1f-17eae2c0aa48', '2025-04-22 00:00:00.000000', '2025-04-22 08:21:11.000000', '2025-04-22 17:54:51.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca6-44b4-86b6-a8480c12cb8f', '2025-04-22 00:00:00.000000', '2025-04-22 08:21:18.000000', '2025-04-22 16:08:15.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca6-455d-84ad-3546c89aa075', '2025-04-22 00:00:00.000000', '2025-04-22 08:29:42.000000', '2025-04-22 15:40:28.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca6-45a4-8563-65e0bead4533', '2025-04-22 00:00:00.000000', '2025-04-22 08:30:53.000000', '2025-04-22 16:54:37.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca6-45d2-8596-98919a85d5a4', '2025-04-22 00:00:00.000000', '2025-04-22 08:32:02.000000', '2025-04-22 17:03:26.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca6-45fb-83ee-6b8b5fa5adc7', '2025-04-22 00:00:00.000000', '2025-04-22 08:32:47.000000', '2025-04-22 18:14:32.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca6-4619-83d5-9c77cd5b5246', '2025-04-22 00:00:00.000000', '2025-04-22 08:46:38.000000', '2025-04-22 18:43:40.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca6-462e-809f-c11570c8e8d7', '2025-04-22 00:00:00.000000', '2025-04-22 08:51:07.000000', '2025-04-22 18:34:41.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca6-4657-8cf8-c50725608e8a', '2025-04-22 00:00:00.000000', '2025-04-22 08:53:21.000000', '2025-04-22 18:28:24.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca6-46ad-8f91-4ed6a7fc1307', '2025-04-22 00:00:00.000000', '2025-04-22 08:55:42.000000', '2025-04-22 17:58:14.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca6-470a-8d05-3fb66641a2fc', '2025-04-22 00:00:00.000000', '2025-04-22 09:10:06.000000', '2025-04-22 16:54:57.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca6-4734-88b6-60aef4672d37', '2025-04-22 00:00:00.000000', '2025-04-22 09:20:23.000000', '2025-04-22 18:14:12.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca6-474e-88be-4e34ba66bde0', '2025-04-22 00:00:00.000000', '2025-04-22 09:29:48.000000', '2025-04-22 15:23:09.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca6-4768-84a9-c71068f27631', '2025-04-22 00:00:00.000000', '2025-04-22 10:09:36.000000', '2025-04-22 17:37:51.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca6-4799-82ac-73f8b09a4f9e', '2025-04-22 00:00:00.000000', '2025-04-22 10:31:08.000000', '2025-04-22 18:42:45.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca6-47b9-8b0f-11c7ad1f7e65', '2025-04-22 00:00:00.000000', '2025-04-22 12:06:23.000000', '2025-04-22 18:26:22.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca6-47d0-830d-6ee6b9ec21ff', '2025-04-22 00:00:00.000000', '2025-04-22 13:09:40.000000', '2025-04-22 17:02:05.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca6-4840-88b0-c5785186b74d', '2025-04-23 00:00:00.000000', '2025-04-23 07:01:45.000000', '2025-04-23 15:32:53.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca6-487c-80c7-55408d5da06a', '2025-04-23 00:00:00.000000', '2025-04-23 07:34:48.000000', '2025-04-23 17:38:05.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca6-48d9-889d-b0c378b1d080', '2025-04-23 00:00:00.000000', '2025-04-23 07:39:22.000000', '2025-04-23 12:43:57.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca6-4912-817b-0f084b6e2c74', '2025-04-23 00:00:00.000000', '2025-04-23 07:46:16.000000', '2025-04-23 17:33:52.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca6-493a-8f41-d2e43cd7ae42', '2025-04-23 00:00:00.000000', '2025-04-23 07:46:56.000000', '2025-04-23 17:40:22.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca6-495c-83c9-06ce2a3820d6', '2025-04-23 00:00:00.000000', '2025-04-23 07:48:10.000000', '2025-04-23 15:40:47.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca6-4981-8067-42c818c921c3', '2025-04-23 00:00:00.000000', '2025-04-23 07:49:33.000000', '2025-04-23 17:07:18.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca6-499a-820a-fa54f37c2407', '2025-04-23 00:00:00.000000', '2025-04-23 07:50:24.000000', '2025-04-23 18:31:53.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca6-49b7-8914-8dcdbc45a8bc', '2025-04-23 00:00:00.000000', '2025-04-23 07:55:12.000000', '2025-04-23 18:04:19.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca6-49d2-82a1-0656e469f0aa', '2025-04-23 00:00:00.000000', '2025-04-23 07:56:30.000000', '2025-04-23 17:46:14.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1);
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `UserId`, `IsActive`) VALUES
('08dd870a-1ca6-49f3-89db-9d757ce00bb1', '2025-04-23 00:00:00.000000', '2025-04-23 07:59:27.000000', '2025-04-23 17:07:00.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca6-4a15-8074-9623c0842cb9', '2025-04-23 00:00:00.000000', '2025-04-23 08:00:42.000000', '2025-04-23 17:41:07.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca6-4a32-8735-4fb5cabac66d', '2025-04-23 00:00:00.000000', '2025-04-23 08:03:01.000000', '2025-04-23 14:45:34.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca6-4a45-8b22-801f7350afda', '2025-04-23 00:00:00.000000', '2025-04-23 08:07:16.000000', '2025-04-23 17:41:54.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca6-4a65-8c9f-9c762f4c0f33', '2025-04-23 00:00:00.000000', '2025-04-23 08:09:23.000000', '2025-04-23 16:15:05.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca6-4a82-83bc-43bd6f83dd98', '2025-04-23 00:00:00.000000', '2025-04-23 08:10:01.000000', '2025-04-23 10:25:50.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca6-4a97-87ea-bb5e225fb2da', '2025-04-23 00:00:00.000000', '2025-04-23 08:11:26.000000', '2025-04-23 17:48:06.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca6-4ab6-878c-f0701b5eec6d', '2025-04-23 00:00:00.000000', '2025-04-23 08:12:39.000000', '2025-04-23 18:11:45.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca6-4ad3-8bd7-4e055c09204d', '2025-04-23 00:00:00.000000', '2025-04-23 08:15:58.000000', '2025-04-23 17:50:31.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca6-4aee-8164-c13332b86eb5', '2025-04-23 00:00:00.000000', '2025-04-23 08:16:35.000000', '2025-04-23 17:49:54.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca6-4b0c-81a3-ca5df2ec519e', '2025-04-23 00:00:00.000000', '2025-04-23 08:17:22.000000', '2025-04-23 17:32:28.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca6-4b2b-8ef7-f18ce1ec95fe', '2025-04-23 00:00:00.000000', '2025-04-23 08:17:30.000000', '2025-04-23 17:50:43.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca6-4b42-8c7f-038b80c9c158', '2025-04-23 00:00:00.000000', '2025-04-23 08:19:59.000000', '2025-04-23 13:08:22.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca6-4b59-8c2d-518a050595a0', '2025-04-23 00:00:00.000000', '2025-04-23 08:22:17.000000', '2025-04-23 17:54:03.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca6-4b93-8fe8-390ce089aafa', '2025-04-23 00:00:00.000000', '2025-04-23 08:26:19.000000', '2025-04-23 17:44:50.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca6-4bd0-8d5e-667c7c514320', '2025-04-23 00:00:00.000000', '2025-04-23 08:31:15.000000', '2025-04-23 16:10:38.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca6-4c17-83ae-2e0417a6f295', '2025-04-23 00:00:00.000000', '2025-04-23 08:31:32.000000', '2025-04-23 18:23:35.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca6-4c38-89e1-9175ba778544', '2025-04-23 00:00:00.000000', '2025-04-23 08:36:29.000000', '2025-04-23 18:21:44.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca6-4c6b-8b51-81d00c6e400f', '2025-04-23 00:00:00.000000', '2025-04-23 08:39:35.000000', '2025-04-23 17:11:52.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca6-4c8e-8999-b7472ce13789', '2025-04-23 00:00:00.000000', '2025-04-23 08:46:45.000000', '2025-04-23 18:24:39.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca6-4caf-87e6-e8856f4bd37e', '2025-04-23 00:00:00.000000', '2025-04-23 08:56:08.000000', '2025-04-23 18:28:23.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca6-4ccd-8642-c711e993668b', '2025-04-23 00:00:00.000000', '2025-04-23 09:05:18.000000', '2025-04-23 18:02:08.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca6-4ceb-817b-9b6d2fe2c8f1', '2025-04-23 00:00:00.000000', '2025-04-23 09:07:54.000000', '2025-04-23 13:28:12.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca6-4d0c-8fc6-67a2870f901f', '2025-04-23 00:00:00.000000', '2025-04-23 09:09:34.000000', '2025-04-23 16:26:26.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca6-4d2c-83cf-672bae1cda0b', '2025-04-23 00:00:00.000000', '2025-04-23 09:42:11.000000', '2025-04-23 18:36:04.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca6-4d43-8cf5-1778a4f16c05', '2025-04-23 00:00:00.000000', '2025-04-23 10:09:27.000000', '2025-04-23 17:48:48.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca6-4d61-8a79-9084c3958542', '2025-04-23 00:00:00.000000', '2025-04-23 12:40:37.000000', '2025-04-23 18:40:47.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca6-4d7a-8054-d28342210be3', '2025-04-24 00:00:00.000000', '2025-04-24 07:01:41.000000', '2025-04-24 17:35:21.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca6-4d93-8253-c94ab778630c', '2025-04-24 00:00:00.000000', '2025-04-24 07:17:58.000000', '2025-04-24 15:13:40.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca6-4dad-871e-bab219cf3eed', '2025-04-24 00:00:00.000000', '2025-04-24 07:45:29.000000', '2025-04-24 18:07:03.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca6-4dca-893c-154b0e0ef47d', '2025-04-24 00:00:00.000000', '2025-04-24 07:48:07.000000', '2025-04-24 18:12:37.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca6-4def-8ec5-d9fd8371f20e', '2025-04-24 00:00:00.000000', '2025-04-24 07:49:59.000000', '2025-04-24 15:49:57.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca6-4e13-85fc-b72669d4c097', '2025-04-24 00:00:00.000000', '2025-04-24 07:50:48.000000', '2025-04-24 17:45:51.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca6-4e30-85ab-8a3188952744', '2025-04-24 00:00:00.000000', '2025-04-24 07:52:08.000000', '2025-04-24 11:47:14.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca6-4e4a-8bf7-d19fe38b63dd', '2025-04-24 00:00:00.000000', '2025-04-24 07:58:46.000000', '2025-04-24 17:53:23.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca6-4e5b-8782-fd08102a2e10', '2025-04-24 00:00:00.000000', '2025-04-24 07:59:50.000000', '2025-04-24 17:32:39.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca6-4e69-88d2-16046797132c', '2025-04-24 00:00:00.000000', '2025-04-24 08:00:37.000000', '2025-04-24 17:57:25.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca6-4e89-8564-d841af90d0b4', '2025-04-24 00:00:00.000000', '2025-04-24 08:01:25.000000', '2025-04-24 17:37:49.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca6-4ea7-8b4d-89b80176da25', '2025-04-24 00:00:00.000000', '2025-04-24 08:03:10.000000', '2025-04-24 15:20:54.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca6-4ebf-889a-a97d4fd6a3e4', '2025-04-24 00:00:00.000000', '2025-04-24 08:07:01.000000', '2025-04-24 17:15:18.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca6-4ed5-8e7e-41981c35e6af', '2025-04-24 00:00:00.000000', '2025-04-24 08:09:21.000000', '2025-04-24 17:55:19.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca6-4f03-882c-46512fa02bb7', '2025-04-24 00:00:00.000000', '2025-04-24 08:10:06.000000', '2025-04-24 17:41:23.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca6-4f38-84f8-dbbe15f912bd', '2025-04-24 00:00:00.000000', '2025-04-24 08:10:48.000000', '2025-04-24 17:26:25.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca6-4fd5-8b7f-6655a691ea4b', '2025-04-24 00:00:00.000000', '2025-04-24 08:12:11.000000', '2025-04-24 17:45:19.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca7-4012-81e6-2a60e2226560', '2025-04-24 00:00:00.000000', '2025-04-24 08:13:44.000000', '2025-04-24 17:47:25.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca7-4046-83ff-6b2d5137814b', '2025-04-24 00:00:00.000000', '2025-04-24 08:14:27.000000', '2025-04-24 18:08:17.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca7-4076-8200-18726ba0fdbb', '2025-04-24 00:00:00.000000', '2025-04-24 08:15:30.000000', '2025-04-24 17:47:58.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca7-4094-8a9b-461aaf7f400d', '2025-04-24 00:00:00.000000', '2025-04-24 08:18:07.000000', '2025-04-24 17:50:38.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca7-40c7-8281-1414e6f102af', '2025-04-24 00:00:00.000000', '2025-04-24 08:18:58.000000', '2025-04-24 17:56:03.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca7-413a-8e75-631a1e27255e', '2025-04-24 00:00:00.000000', '2025-04-24 08:22:59.000000', '2025-04-24 17:54:58.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca7-4159-8e55-3d3ef359efd1', '2025-04-24 00:00:00.000000', '2025-04-24 08:24:39.000000', '2025-04-24 17:59:41.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca7-41dc-8aad-71952e0bf38d', '2025-04-24 00:00:00.000000', '2025-04-24 08:27:29.000000', '2025-04-24 18:52:36.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca7-4202-806d-dac467995676', '2025-04-24 00:00:00.000000', '2025-04-24 08:32:40.000000', '2025-04-24 17:29:10.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca7-4224-8340-e30905626e6a', '2025-04-24 00:00:00.000000', '2025-04-24 08:38:03.000000', '2025-04-24 17:38:07.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca7-4243-8bed-5232a2a63ee9', '2025-04-24 00:00:00.000000', '2025-04-24 08:46:35.000000', '2025-04-24 18:06:40.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca7-4263-83a7-9f6bc6da1258', '2025-04-24 00:00:00.000000', '2025-04-24 08:47:28.000000', '2025-04-24 17:46:27.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca7-4284-8e8b-9c3128925a2c', '2025-04-24 00:00:00.000000', '2025-04-24 08:57:51.000000', '2025-04-24 18:34:19.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca7-429d-8926-a1fac817f12e', '2025-04-24 00:00:00.000000', '2025-04-24 09:06:23.000000', '2025-04-24 17:33:08.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca7-42cc-8894-3b815d9561cf', '2025-04-24 00:00:00.000000', '2025-04-24 09:06:29.000000', '2025-04-24 17:02:24.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca7-430e-8403-1665e24b1ce2', '2025-04-24 00:00:00.000000', '2025-04-24 09:07:39.000000', '2025-04-24 18:39:34.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca7-4333-8025-3ae68382764a', '2025-04-24 00:00:00.000000', '2025-04-24 10:31:09.000000', '2025-04-24 18:08:23.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca7-4352-8c29-dc2df6daf65b', '2025-04-24 00:00:00.000000', '2025-04-24 11:17:27.000000', '2025-04-24 18:22:58.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca7-436a-84b2-5e64b1d88494', '2025-04-24 00:00:00.000000', '2025-04-24 12:53:31.000000', '2025-04-24 17:58:06.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca7-4382-831b-df1af805d616', '2025-04-24 00:00:00.000000', '2025-04-24 14:52:51.000000', '2025-04-24 15:06:07.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca7-43a8-81dd-8f96b301f086', '2025-04-24 00:00:00.000000', '2025-04-24 17:41:51.000000', NULL, 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca7-43c7-8028-3e82d1b0f063', '2025-04-25 00:00:00.000000', '2025-04-25 07:35:36.000000', '2025-04-25 17:42:31.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca7-43ef-8419-85a87ec41b9f', '2025-04-25 00:00:00.000000', '2025-04-25 07:41:35.000000', '2025-04-25 11:55:31.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd870a-1ca7-4410-81a0-9197163a0deb', '2025-04-25 00:00:00.000000', '2025-04-25 07:45:43.000000', '2025-04-25 17:03:09.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca7-4436-8522-6c30ba12d1e1', '2025-04-25 00:00:00.000000', '2025-04-25 07:53:40.000000', '2025-04-25 16:33:10.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca7-4457-8886-56e178a64f95', '2025-04-25 00:00:00.000000', '2025-04-25 07:53:44.000000', '2025-04-25 17:01:26.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca7-4474-80d6-c65699c2937f', '2025-04-25 00:00:00.000000', '2025-04-25 07:57:26.000000', '2025-04-25 16:20:09.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca7-4498-8462-d718efa55fe3', '2025-04-25 00:00:00.000000', '2025-04-25 07:58:09.000000', '2025-04-25 15:50:37.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca7-44d4-8e8d-732a4c60eadb', '2025-04-25 00:00:00.000000', '2025-04-25 08:07:34.000000', '2025-04-25 09:32:49.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca7-4504-8860-c7ce02ca099d', '2025-04-25 00:00:00.000000', '2025-04-25 08:10:51.000000', '2025-04-25 17:44:40.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca7-4523-84f6-590f8042e86c', '2025-04-25 00:00:00.000000', '2025-04-25 08:11:47.000000', '2025-04-25 16:40:43.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca7-4555-8cb0-8bf64723eaa4', '2025-04-25 00:00:00.000000', '2025-04-25 08:12:49.000000', '2025-04-25 15:48:00.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca7-45d2-8367-c8270656a3b8', '2025-04-25 00:00:00.000000', '2025-04-25 08:14:04.000000', '2025-04-25 17:46:04.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca7-45f0-89ad-12799aea65a0', '2025-04-25 00:00:00.000000', '2025-04-25 08:14:28.000000', '2025-04-25 17:47:43.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca7-4606-8b27-ffd90138d3f0', '2025-04-25 00:00:00.000000', '2025-04-25 08:15:17.000000', '2025-04-25 18:46:21.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca7-4618-8bb5-d085f1a61daf', '2025-04-25 00:00:00.000000', '2025-04-25 08:17:36.000000', '2025-04-25 16:16:29.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca7-4647-8a86-0473404671fb', '2025-04-25 00:00:00.000000', '2025-04-25 08:20:54.000000', '2025-04-25 16:13:41.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca7-4746-8454-1258dbd7c3ca', '2025-04-25 00:00:00.000000', '2025-04-25 08:23:54.000000', '2025-04-25 15:46:44.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca7-476b-8c5a-a3c9db966b48', '2025-04-25 00:00:00.000000', '2025-04-25 08:24:20.000000', '2025-04-25 18:01:24.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca7-4780-8dde-a3cfdbbd2e28', '2025-04-25 00:00:00.000000', '2025-04-25 08:25:42.000000', '2025-04-25 18:02:57.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca7-47e4-8843-0d463ef6711b', '2025-04-25 00:00:00.000000', '2025-04-25 08:27:11.000000', '2025-04-25 17:51:39.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca7-4821-8863-5a41382263fb', '2025-04-25 00:00:00.000000', '2025-04-25 08:27:32.000000', '2025-04-25 18:05:03.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca7-4840-8bd2-950dd3246c92', '2025-04-25 00:00:00.000000', '2025-04-25 08:28:54.000000', '2025-04-25 16:33:29.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca7-488a-84c4-e5a127a8ebee', '2025-04-25 00:00:00.000000', '2025-04-25 08:31:05.000000', '2025-04-25 16:39:28.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca7-48c0-859e-13d094b72756', '2025-04-25 00:00:00.000000', '2025-04-25 08:32:38.000000', '2025-04-25 18:05:22.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca7-48f1-848b-203a691b2a76', '2025-04-25 00:00:00.000000', '2025-04-25 08:38:25.000000', '2025-04-25 17:02:15.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca7-490b-8dae-f5a9747680d0', '2025-04-25 00:00:00.000000', '2025-04-25 08:39:03.000000', '2025-04-25 16:51:57.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca7-4929-86ae-f4cae320f315', '2025-04-25 00:00:00.000000', '2025-04-25 08:40:16.000000', '2025-04-25 18:25:46.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca7-4957-87b4-90eb84a7b8ef', '2025-04-25 00:00:00.000000', '2025-04-25 08:45:27.000000', '2025-04-25 15:33:44.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca7-4981-8986-61e150605d4c', '2025-04-25 00:00:00.000000', '2025-04-25 08:46:53.000000', '2025-04-25 17:46:58.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca7-49c8-8ac2-d6b5adc1bfa3', '2025-04-25 00:00:00.000000', '2025-04-25 08:54:11.000000', '2025-04-25 16:52:42.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca7-49f9-8885-e08eeaccdb3d', '2025-04-25 00:00:00.000000', '2025-04-25 08:56:30.000000', '2025-04-25 18:30:53.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca7-4a1b-88f7-33e2473c3585', '2025-04-25 00:00:00.000000', '2025-04-25 08:58:25.000000', '2025-04-25 15:28:28.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca7-4a3f-860d-5448ff1797e6', '2025-04-25 00:00:00.000000', '2025-04-25 09:01:29.000000', '2025-04-25 17:02:00.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca7-4a62-8aa9-04dfa5027fe9', '2025-04-25 00:00:00.000000', '2025-04-25 09:03:55.000000', '2025-04-25 18:37:11.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca7-4a7e-86cc-26106e3855ff', '2025-04-25 00:00:00.000000', '2025-04-25 09:08:03.000000', '2025-04-25 18:41:22.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca7-4a97-818b-6b27390f6ae9', '2025-04-25 00:00:00.000000', '2025-04-25 09:48:57.000000', '2025-04-25 18:40:48.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca7-4aac-8169-747be2acbbe7', '2025-04-25 00:00:00.000000', '2025-04-25 09:58:04.000000', '2025-04-25 18:16:21.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca7-4ac4-8545-e9284d63aa85', '2025-04-25 00:00:00.000000', '2025-04-25 11:04:53.000000', '2025-04-25 17:45:08.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca7-4b03-86f0-30e687f3b2ca', '2025-04-26 00:00:00.000000', '2025-04-26 07:36:07.000000', '2025-04-26 16:16:54.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca7-4b80-8cd0-2132222a03f0', '2025-04-26 00:00:00.000000', '2025-04-26 07:40:22.000000', '2025-04-26 17:57:38.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca7-4bf2-8bb0-f633b3c6f9af', '2025-04-26 00:00:00.000000', '2025-04-26 08:00:03.000000', '2025-04-26 15:26:14.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca7-4c3a-8f78-77a57b9789d6', '2025-04-26 00:00:00.000000', '2025-04-26 08:07:09.000000', '2025-04-26 12:09:31.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca7-4c7a-8cc9-f7af7f81cb35', '2025-04-26 00:00:00.000000', '2025-04-26 08:12:54.000000', '2025-04-26 17:51:27.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd870a-1ca7-4cdc-80fb-27aae6de596d', '2025-04-26 00:00:00.000000', '2025-04-26 08:17:03.000000', '2025-04-26 16:44:04.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca8-40c4-83f4-1a0c31e61ebd', '2025-04-26 00:00:00.000000', '2025-04-26 08:21:39.000000', '2025-04-26 16:42:29.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd870a-1ca8-410c-83ce-287f28ce3ead', '2025-04-26 00:00:00.000000', '2025-04-26 08:25:56.000000', '2025-04-26 18:01:28.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca8-4129-8a9d-11a4466a9c0e', '2025-04-26 00:00:00.000000', '2025-04-26 08:30:42.000000', '2025-04-26 17:22:25.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca8-4165-87b8-1d82407fc3bc', '2025-04-26 00:00:00.000000', '2025-04-26 08:41:14.000000', '2025-04-26 18:17:04.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca8-418c-880f-e538acf3091f', '2025-04-26 00:00:00.000000', '2025-04-26 08:41:49.000000', '2025-04-26 16:27:08.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca8-41a2-8bad-72447df9833f', '2025-04-26 00:00:00.000000', '2025-04-26 08:45:33.000000', '2025-04-26 14:09:29.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca8-41cc-8b77-03e03bdc2fca', '2025-04-26 00:00:00.000000', '2025-04-26 08:49:34.000000', '2025-04-26 15:20:01.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca8-4250-8b21-33a33a23bb93', '2025-04-26 00:00:00.000000', '2025-04-26 09:02:56.000000', '2025-04-26 18:39:19.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca8-42a6-89d1-36eed0fc9e50', '2025-04-26 00:00:00.000000', '2025-04-26 09:14:30.000000', '2025-04-26 16:32:32.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca8-42de-82b1-1c1a38539ea7', '2025-04-26 00:00:00.000000', '2025-04-26 09:24:22.000000', '2025-04-26 17:05:51.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca8-42fc-80bb-144c8ca83504', '2025-04-26 00:00:00.000000', '2025-04-26 09:30:52.000000', '2025-04-26 13:51:42.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca8-4311-8ef9-8f934b727810', '2025-04-26 00:00:00.000000', '2025-04-26 09:37:32.000000', '2025-04-26 17:56:24.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca8-4328-8ebd-62ddab594589', '2025-04-26 00:00:00.000000', '2025-04-26 09:45:11.000000', '2025-04-26 16:37:14.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca8-4355-85a1-e4920ac2bbec', '2025-04-26 00:00:00.000000', '2025-04-26 09:53:32.000000', '2025-04-26 18:37:20.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca8-43b4-8204-ad1585dd69c9', '2025-04-26 00:00:00.000000', '2025-04-26 09:57:56.000000', NULL, 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca8-4403-84a2-ab585e82781b', '2025-04-26 00:00:00.000000', '2025-04-26 09:59:42.000000', '2025-04-26 18:33:54.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca8-4423-8a8e-a9c3c6e6d817', '2025-04-26 00:00:00.000000', '2025-04-26 10:04:58.000000', '2025-04-26 13:58:12.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca8-4450-8ed9-66f97d75f256', '2025-04-26 00:00:00.000000', '2025-04-26 10:06:05.000000', '2025-04-26 12:31:21.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca8-44be-8e47-134e776f4baa', '2025-04-26 00:00:00.000000', '2025-04-26 10:44:31.000000', '2025-04-26 17:53:26.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca8-4863-851e-9cbf8b2235d0', '2025-04-26 00:00:00.000000', '2025-04-26 10:45:05.000000', '2025-04-26 17:05:04.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca8-4af2-8372-bfc7256a27f8', '2025-04-26 00:00:00.000000', '2025-04-26 16:26:16.000000', '2025-04-26 16:35:32.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca8-4c53-893d-49d57d4ee049', '2025-04-27 00:00:00.000000', '2025-04-27 07:57:33.000000', '2025-04-27 18:06:46.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca8-4cc1-8a62-b67103918c5e', '2025-04-28 00:00:00.000000', '2025-04-28 07:37:02.000000', '2025-04-28 17:34:04.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca8-4d2b-8834-ba6b05a83494', '2025-04-28 00:00:00.000000', '2025-04-28 07:37:56.000000', '2025-04-28 18:27:19.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca8-4d74-8fe1-76cb51730993', '2025-04-28 00:00:00.000000', '2025-04-28 07:48:00.000000', '2025-04-28 13:39:34.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca8-4ddb-814b-721ae61a76d0', '2025-04-28 00:00:00.000000', '2025-04-28 07:49:02.000000', '2025-04-28 17:31:51.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca8-4e4e-8dac-4808358db148', '2025-04-28 00:00:00.000000', '2025-04-28 07:51:42.000000', '2025-04-28 17:38:28.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca8-4e84-871e-94e118ab6cd0', '2025-04-28 00:00:00.000000', '2025-04-28 07:52:29.000000', '2025-04-28 16:15:25.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca8-4eb6-8e0f-b1ff02bc6405', '2025-04-28 00:00:00.000000', '2025-04-28 07:55:21.000000', '2025-04-28 17:54:24.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca8-4eda-81d8-c4a9100f7576', '2025-04-28 00:00:00.000000', '2025-04-28 07:57:00.000000', '2025-04-28 17:37:33.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd870a-1ca8-4f15-81e8-8d72ce10866b', '2025-04-28 00:00:00.000000', '2025-04-28 08:00:36.000000', '2025-04-28 13:59:01.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca8-4f52-8422-0221dabace38', '2025-04-28 00:00:00.000000', '2025-04-28 08:01:55.000000', '2025-04-28 16:37:40.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd870a-1ca8-4f74-84da-c1f825d47e6b', '2025-04-28 00:00:00.000000', '2025-04-28 08:04:20.000000', '2025-04-28 17:38:52.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca8-4f8c-8cac-50c3090d78a7', '2025-04-28 00:00:00.000000', '2025-04-28 08:07:52.000000', '2025-04-28 17:53:53.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca8-4fa6-8de1-ac325be34f5a', '2025-04-28 00:00:00.000000', '2025-04-28 08:10:33.000000', '2025-04-28 18:06:05.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca9-4006-8e71-f813e79604d3', '2025-04-28 00:00:00.000000', '2025-04-28 08:16:54.000000', '2025-04-28 17:54:49.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca9-404f-86a1-4f9e37275a31', '2025-04-28 00:00:00.000000', '2025-04-28 08:18:05.000000', '2025-04-28 17:16:58.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca9-407a-876d-b91c8fd5b860', '2025-04-28 00:00:00.000000', '2025-04-28 08:19:24.000000', '2025-04-28 17:53:06.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca9-409f-8d7b-07331dec9fa5', '2025-04-28 00:00:00.000000', '2025-04-28 08:20:38.000000', '2025-04-28 14:55:22.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca9-40df-82df-194b28c1ac7b', '2025-04-28 00:00:00.000000', '2025-04-28 08:24:23.000000', '2025-04-28 17:58:08.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca9-411d-8de9-33ec6a669a22', '2025-04-28 00:00:00.000000', '2025-04-28 08:26:52.000000', '2025-04-28 18:00:51.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd870a-1ca9-413f-893e-6aed25bf5083', '2025-04-28 00:00:00.000000', '2025-04-28 08:32:28.000000', '2025-04-28 18:16:23.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca9-415d-84ca-74455954d540', '2025-04-28 00:00:00.000000', '2025-04-28 08:35:50.000000', '2025-04-28 17:49:14.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca9-417c-8aad-e1d1a762be18', '2025-04-28 00:00:00.000000', '2025-04-28 08:38:47.000000', '2025-04-28 14:00:34.000000', 0, '08dd8709-954b-4c8d-801c-fc5168bb3a0c', 1),
('08dd870a-1ca9-4192-8b7e-5016d6dda985', '2025-04-28 00:00:00.000000', '2025-04-28 08:46:46.000000', '2025-04-28 18:37:57.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca9-41b1-8ff9-7dcf9834dd15', '2025-04-28 00:00:00.000000', '2025-04-28 08:47:18.000000', '2025-04-28 17:28:35.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca9-41d1-83db-915978974d1d', '2025-04-28 00:00:00.000000', '2025-04-28 08:51:21.000000', '2025-04-28 16:34:53.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca9-41e6-84a7-39e3a25128d1', '2025-04-28 00:00:00.000000', '2025-04-28 08:52:47.000000', '2025-04-28 18:29:35.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca9-4206-88c0-419a049c6412', '2025-04-28 00:00:00.000000', '2025-04-28 08:56:54.000000', '2025-04-28 18:42:50.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca9-422d-8c1b-47d1f17dd081', '2025-04-28 00:00:00.000000', '2025-04-28 08:58:06.000000', '2025-04-28 18:07:53.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca9-4254-82e6-10b6a8df512f', '2025-04-28 00:00:00.000000', '2025-04-28 09:03:24.000000', '2025-04-28 15:30:36.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd870a-1ca9-4266-8ea8-a419ecc1dfbe', '2025-04-28 00:00:00.000000', '2025-04-28 09:05:36.000000', '2025-04-28 18:49:54.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca9-4294-8474-cbb332c5b4ac', '2025-04-28 00:00:00.000000', '2025-04-28 09:45:02.000000', '2025-04-28 18:34:36.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca9-42b3-833e-731fdfb8e8e0', '2025-04-28 00:00:00.000000', '2025-04-28 09:59:04.000000', '2025-04-28 16:33:04.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca9-42e2-8ee5-e263f0225f27', '2025-04-28 00:00:00.000000', '2025-04-28 11:12:31.000000', '2025-04-28 18:39:03.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca9-430e-843a-b00882b0965f', '2025-04-28 00:00:00.000000', '2025-04-28 12:26:10.000000', '2025-04-28 16:20:57.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca9-4325-8295-a37c8e8b09bd', '2025-04-28 00:00:00.000000', '2025-04-28 13:42:56.000000', '2025-04-28 17:50:56.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd870a-1ca9-4336-86e7-94f01fe0e623', '2025-04-29 00:00:00.000000', '2025-04-29 07:37:05.000000', '2025-04-29 15:30:27.000000', 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd870a-1ca9-4366-8c42-0bd155650312', '2025-04-29 00:00:00.000000', '2025-04-29 07:39:34.000000', '2025-04-29 17:21:03.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd870a-1ca9-438e-82c3-09c233d3fe85', '2025-04-29 00:00:00.000000', '2025-04-29 07:43:27.000000', '2025-04-29 17:34:33.000000', 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd870a-1ca9-43a5-8353-4c3ee88bc398', '2025-04-29 00:00:00.000000', '2025-04-29 07:48:46.000000', '2025-04-29 17:34:10.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd870a-1ca9-4416-8ec4-1a667c9b9ec5', '2025-04-29 00:00:00.000000', '2025-04-29 07:52:06.000000', NULL, 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd870a-1ca9-4444-8502-edaba9484d06', '2025-04-29 00:00:00.000000', '2025-04-29 07:53:33.000000', '2025-04-29 12:44:39.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd870a-1ca9-4467-8d91-402a91151548', '2025-04-29 00:00:00.000000', '2025-04-29 07:55:49.000000', '2025-04-29 17:13:02.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd870a-1ca9-449a-8c22-44c9264f8cac', '2025-04-29 00:00:00.000000', '2025-04-29 08:04:49.000000', '2025-04-29 13:28:14.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd870a-1ca9-44e7-8031-0e72ee495c6e', '2025-04-29 00:00:00.000000', '2025-04-29 17:43:57.000000', '2025-04-29 17:03:22.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd870a-1ca9-4524-8087-a4509bc0ccaf', '2025-04-29 00:00:00.000000', '2025-04-29 17:43:23.000000', '2025-04-29 16:40:46.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd870a-1ca9-4559-8582-361dfdf1b72d', '2025-04-29 00:00:00.000000', '2025-04-29 08:09:53.000000', '2025-04-29 12:15:04.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd870a-1ca9-4571-8db6-6365f5208395', '2025-04-29 00:00:00.000000', '2025-04-29 08:14:50.000000', '2025-04-29 14:26:43.000000', 0, '08dd8709-954b-4f49-8691-de009f94e50d', 1),
('08dd870a-1ca9-45c0-8940-8fc3aa85556b', '2025-04-29 00:00:00.000000', '2025-04-29 08:16:45.000000', '2025-04-29 15:42:32.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd870a-1ca9-4625-86f4-2c106c2b612c', '2025-04-29 00:00:00.000000', '2025-04-29 08:17:29.000000', '2025-04-29 12:05:19.000000', 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd870a-1ca9-464e-880b-e9de49a39a48', '2025-04-29 00:00:00.000000', '2025-04-29 08:20:57.000000', '2025-04-29 16:36:28.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd870a-1ca9-466a-80f6-b2b36e91a04c', '2025-04-29 00:00:00.000000', '2025-04-29 08:21:37.000000', '2025-04-29 15:11:46.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd870a-1ca9-469c-8dd6-e2d3fce369c4', '2025-04-29 00:00:00.000000', '2025-04-29 08:22:24.000000', '2025-04-29 14:50:29.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd870a-1ca9-46d7-8469-cab0ff9cd06f', '2025-04-29 00:00:00.000000', '2025-04-29 08:28:32.000000', '2025-04-29 13:31:32.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd870a-1ca9-4733-8621-e959cfc18f0d', '2025-04-29 00:00:00.000000', '2025-04-29 08:45:45.000000', '2025-04-29 13:40:18.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd870a-1ca9-4773-80f4-341126c132c2', '2025-04-29 00:00:00.000000', '2025-04-29 08:47:36.000000', '2025-04-29 15:11:22.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd870a-1ca9-47a6-897b-179ad2ddf091', '2025-04-29 00:00:00.000000', '2025-04-29 08:48:06.000000', '2025-04-29 17:31:46.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd870a-1ca9-47e2-8eab-77700efa6e28', '2025-04-29 00:00:00.000000', '2025-04-29 08:53:13.000000', '2025-04-29 14:00:48.000000', 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd870a-1ca9-4808-8b4f-acb9ff69f74d', '2025-04-29 00:00:00.000000', '2025-04-29 17:41:51.000000', '2025-04-29 16:53:26.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd870a-1ca9-482b-8b82-359c74d4f829', '2025-04-29 00:00:00.000000', '2025-04-29 17:39:33.000000', '2025-04-29 16:56:28.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd870a-1ca9-485f-8ed6-3e2d1eca268b', '2025-04-29 00:00:00.000000', '2025-04-29 09:03:12.000000', '2025-04-29 14:54:31.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd870a-1ca9-4891-862d-176891b48a7c', '2025-04-29 00:00:00.000000', '2025-04-29 17:39:54.000000', '2025-04-29 15:47:46.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd870a-1ca9-48d2-832c-7a9d13d94a45', '2025-04-29 00:00:00.000000', '2025-04-29 09:09:53.000000', '2025-04-29 17:02:31.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd870a-1ca9-48f3-8ac0-5cf82ddcd10f', '2025-04-29 00:00:00.000000', '2025-04-29 09:22:11.000000', '2025-04-29 15:14:17.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd870a-1ca9-491e-89dc-4b8613f10664', '2025-04-29 00:00:00.000000', '2025-04-29 11:43:04.000000', '2025-04-29 17:14:32.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd870a-1ca9-4946-8d05-5a15972c6f4c', '2025-04-29 00:00:00.000000', '2025-04-29 17:40:58.000000', '2025-04-29 14:09:46.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1);

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
  `Id` int(11) NOT NULL,
  `BirthDate` datetime(6) NOT NULL,
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
('20250428100513_Init10', '8.0.12');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- AUTO_INCREMENT for table `userdetails`
--
ALTER TABLE `userdetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

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
