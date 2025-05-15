-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 15, 2025 at 11:19 AM
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
('08dd8709-7df7-405d-866d-b3eacf862e08', 'Administrator', '/uploads/users/avatar_20250429103459_222.png', 0, 1, 0, 0, '2025-04-29 10:34:58.757116', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'admin@admin.com', 'ADMIN@ADMIN.COM', 'admin@admin.com', 'ADMIN@ADMIN.COM', 1, 'AQAAAAIAAYagAAAAEFsXtSEzzPGi2GjkxfFtYmGIT+3ETBa9jMrsluSP4NzUHjZ/rlouTKSNYOYOZngaJQ==', 'WUCTXV36HG37EW2DK46E6424SKM7TDJH', 'd43c951f-e7e5-4e93-b2e2-6f565aef6dbb', NULL, 0, 0, NULL, 1, 0, NULL),
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
(1, 'UsEsDZ5Enc7pTPH7XAujXUpjw7qTwzTluP9B3Uv5vvc=', '2025-05-22 09:54:39.626776', 1, '2025-05-08 11:03:56.869923', '08dd8709-7df7-405d-866d-b3eacf862e08');

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
('08dd92c0-f5b3-4d44-8f69-6c93e9802d83', '2025-05-14 00:00:00.000000', '2025-05-14 15:26:05.000000', '2025-05-14 17:37:41.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd92c1-2ae1-4ed8-8ddb-662f2c36ab13', '2025-05-14 00:00:00.000000', '2025-05-14 15:27:34.000000', '2025-05-14 17:32:35.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd92c1-9550-42f2-89d2-ed620f1c517d', '2025-05-14 00:00:00.000000', '2025-05-14 15:30:24.000000', NULL, 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd92c1-e999-416c-89ce-f782ceab3696', '2025-05-14 00:00:00.000000', '2025-05-14 15:32:46.000000', '2025-05-14 17:45:29.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd92c1-f512-4de6-8120-d1d94c586eeb', '2025-05-14 00:00:00.000000', '2025-05-14 15:33:05.000000', '2025-05-14 15:59:10.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd92c2-ff04-405f-84d3-04e712b25329', '2025-05-14 00:00:00.000000', '2025-05-14 15:40:39.000000', '2025-05-14 17:33:32.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd92c3-dc2c-4ebb-8b0d-ec4fef229222', '2025-05-14 00:00:00.000000', '2025-05-14 15:46:50.000000', '2025-05-14 17:50:49.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd92c4-8b8a-4d87-8967-a9dfdb22ff5f', '2025-05-14 00:00:00.000000', '2025-05-14 15:51:45.000000', '2025-05-14 18:09:53.000000', 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd92c4-b550-4569-85a0-3fa311a932e4', '2025-05-14 00:00:00.000000', '2025-05-14 15:52:55.000000', NULL, 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd92c4-d3b5-48ad-8eb9-c9ffeef95dfd', '2025-05-14 00:00:00.000000', '2025-05-14 15:53:46.000000', '2025-05-14 17:54:59.000000', 0, '08dd8709-954a-4886-8cca-48a32e10a40f', 1),
('08dd92c5-8555-4d75-86e1-10bb633b90b1', '2025-05-14 00:00:00.000000', '2025-05-14 15:58:43.000000', '2025-05-14 17:54:41.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd92c8-afed-46c6-83ac-8204cf5474c4', '2025-05-14 00:00:00.000000', '2025-05-14 16:21:15.000000', NULL, 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd92c8-bdf9-4557-8a02-6d69e6d2daae', '2025-05-14 00:00:00.000000', '2025-05-14 16:21:47.000000', '2025-05-14 17:03:19.000000', 0, '08dd8709-954a-4822-880e-6249942e30ca', 1),
('08dd92c8-e05e-4500-8749-4b8374686212', '2025-05-14 00:00:00.000000', '2025-05-14 16:22:45.000000', '2025-05-14 17:46:35.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd92c9-93a2-4038-84c5-4df645ad4ae5', '2025-05-14 00:00:00.000000', '2025-05-14 16:27:46.000000', '2025-05-14 17:49:18.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd92c9-b3dd-4ee3-8d41-7a56c8640920', '2025-05-14 00:00:00.000000', '2025-05-14 16:28:39.000000', NULL, 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd92c9-dabe-4a98-87e7-33fbadcbec27', '2025-05-14 00:00:00.000000', '2025-05-14 16:29:45.000000', '2025-05-14 17:28:52.000000', 0, '08dd8709-954a-47a4-8c7e-0ab3434abda8', 1),
('08dd92ca-2a48-4465-8630-e403139b8fed', '2025-05-14 00:00:00.000000', '2025-05-14 16:31:59.000000', '2025-05-14 16:42:27.000000', 0, '08dd8709-954b-4ed5-8b7a-805705cdb6aa', 1),
('08dd92cb-1b17-4acf-8458-4389b9904b41', '2025-05-14 00:00:00.000000', '2025-05-14 16:38:42.000000', '2025-05-14 17:53:29.000000', 0, '08dd8709-954a-48bc-8a85-d5fcac952cda', 1),
('08dd92cb-4330-45e0-8f49-30fc41ea8813', '2025-05-14 00:00:00.000000', '2025-05-14 16:39:50.000000', '2025-05-14 18:06:08.000000', 0, '08dd8709-954a-472a-8712-4c6ab95b0d03', 1),
('08dd92cc-2224-423e-8b2a-54c0dcf622b7', '2025-05-14 00:00:00.000000', '2025-05-14 16:46:04.000000', '2025-05-14 17:32:17.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd92cc-3893-478c-841e-70ae6c883c8c', '2025-05-14 00:00:00.000000', '2025-05-14 16:46:42.000000', '2025-05-14 17:43:26.000000', 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd92cc-a42a-4677-8fd9-f4a5abd185ec', '2025-05-14 00:00:00.000000', '2025-05-14 16:49:42.000000', '2025-05-14 17:16:13.000000', 0, '08dd8709-954a-4855-835d-b00060f56f6e', 1),
('08dd92d0-ba10-4850-8213-a064ba63e818', '2025-05-14 00:00:00.000000', '2025-05-14 17:18:57.000000', '2025-05-14 17:56:08.000000', 0, '08dd8709-954a-4e6b-8df1-07412cfd5a12', 1),
('08dd92d1-2f79-47df-82fd-59fe96abebe2', '2025-05-14 00:00:00.000000', '2025-05-14 17:22:14.000000', '2025-05-14 17:45:55.000000', 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd92d2-854c-4df4-89e4-ace6af791b03', '2025-05-14 00:00:00.000000', '2025-05-14 17:31:47.000000', NULL, 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd92d2-d5d0-44f8-85f5-a92d08de448d', '2025-05-14 00:00:00.000000', '2025-05-14 17:34:02.000000', NULL, 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd92d2-f18d-4f68-8338-ddc329328e56', '2025-05-14 00:00:00.000000', '2025-05-14 17:34:49.000000', NULL, 0, '08dd8709-954a-47eb-858f-321882edd575', 1),
('08dd92d3-1cbc-4674-8a4e-58485ae25021', '2025-05-14 00:00:00.000000', '2025-05-14 17:36:00.000000', '2025-05-14 18:09:53.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd92d4-e751-41aa-8509-953b5b3dffe0', '2025-05-14 00:00:00.000000', '2025-05-14 17:48:51.000000', NULL, 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd92d5-ccc6-460c-8888-a9dab4e13d67', '2025-05-14 00:00:00.000000', '2025-05-14 17:55:07.000000', NULL, 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd92d9-796f-4629-8dc7-2e146aa73c7a', '2025-05-14 00:00:00.000000', '2025-05-14 18:21:34.000000', NULL, 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1),
('08dd937b-c0ed-4a44-8fa6-81f240c0d879', '2025-05-15 00:00:00.000000', '2025-05-15 13:43:03.000000', '2025-05-15 14:18:00.000000', 0, '08dd8709-954b-4e53-8d16-1954af216b34', 1),
('08dd937b-d0b1-4b7f-8aee-abb556561a61', '2025-05-15 00:00:00.000000', '2025-05-15 13:43:37.000000', '2025-05-15 15:53:31.000000', 0, '08dd8709-954a-4bd1-84f8-e2e5e4f564ae', 1),
('08dd937c-1e43-4324-81f4-35dcbd0b1500', '2025-05-15 00:00:00.000000', '2025-05-15 13:45:50.000000', '2025-05-15 15:34:58.000000', 0, '08dd8709-954a-46fa-888f-99ca5348965d', 1),
('08dd937d-1045-4234-8eea-94de4bd4b57c', '2025-05-15 00:00:00.000000', '2025-05-15 13:52:36.000000', '2025-05-15 16:21:44.000000', 0, '08dd8709-954b-4d23-8d2e-5f0c8eff1f17', 1),
('08dd937d-6c8b-4625-8f52-5eb7ed5a854d', '2025-05-15 00:00:00.000000', '2025-05-15 13:55:10.000000', '2025-05-15 13:57:31.000000', 0, '08dd8709-954b-4e0e-8ba3-8d8ddd9abdc5', 1),
('08dd937d-da17-440f-8b6c-3b52139876f9', '2025-05-15 00:00:00.000000', '2025-05-15 13:58:14.000000', '2025-05-15 16:40:16.000000', 0, '08dd8709-954a-49ce-8811-17f40b1c65df', 1),
('08dd937f-03b1-494f-8449-986deb60d234', '2025-05-15 00:00:00.000000', '2025-05-15 14:06:32.000000', '2025-05-15 14:11:42.000000', 0, '08dd8709-954a-4997-82bd-b138cfe5577d', 1),
('08dd9380-d10d-453f-8e5d-b3711abfdfac', '2025-05-15 00:00:00.000000', '2025-05-15 14:19:18.000000', '2025-05-15 15:41:41.000000', 0, '08dd8709-954a-4e40-8099-8c33b47ec3e5', 1),
('08dd9381-fb37-478d-8dbe-2add58b4a76f', '2025-05-15 00:00:00.000000', '2025-05-15 14:27:48.000000', '2025-05-15 15:44:14.000000', 0, '08dd8709-954a-4f1b-82fa-bdf1c537f984', 1),
('08dd9382-dd01-46f7-8e50-c90c4fd44b35', '2025-05-15 00:00:00.000000', '2025-05-15 14:34:05.000000', '2025-05-15 15:39:43.000000', 0, '08dd8709-954a-46be-8fad-06df8c09b3b0', 1),
('08dd9385-a935-40d4-824a-ef1f55312e72', '2025-05-15 00:00:00.000000', '2025-05-15 14:53:59.000000', NULL, 0, '08dd8709-954b-4f8f-87a9-c3620c180bf8', 1),
('08dd9386-73a2-4e32-8899-263422f62c3e', '2025-05-15 00:00:00.000000', '2025-05-15 14:59:48.000000', '2025-05-15 16:43:17.000000', 0, '08dd8709-954a-475d-81e4-101301e27e19', 1),
('08dd9388-18f4-46ae-8869-031696eaf1bf', '2025-05-15 00:00:00.000000', '2025-05-15 15:11:35.000000', '2025-05-15 16:47:49.000000', 0, '08dd8709-954a-4b1b-8d94-d0f411a52075', 1),
('08dd9388-4b53-4587-8b46-757a1d2fdc3e', '2025-05-15 00:00:00.000000', '2025-05-15 15:12:50.000000', NULL, 0, '08dd8709-954b-4d9f-8c77-a230bc40fd84', 1),
('08dd938a-e56c-4375-8298-983a460a87ea', '2025-05-15 00:00:00.000000', '2025-05-15 15:31:27.000000', '2025-05-15 15:50:52.000000', 0, '08dd8709-954c-4006-8a44-84e66f36b959', 1),
('08dd938a-e5b4-47b3-829f-de34af969f75', '2025-05-15 00:00:00.000000', '2025-05-15 15:31:37.000000', '2025-05-15 16:53:20.000000', 0, '08dd8709-954a-413c-80c0-9d1a435ccf9b', 1),
('08dd938b-1701-462a-8e14-9c0b0e6685c4', '2025-05-15 00:00:00.000000', '2025-05-15 15:33:00.000000', '2025-05-15 15:35:53.000000', 0, '08dd8709-954a-4ae0-832a-27fbe1f5ac38', 1),
('08dd938b-2116-4105-8e58-df195c43e95f', '2025-05-15 00:00:00.000000', '2025-05-15 15:33:17.000000', NULL, 0, '08dd8709-954a-464e-81ee-700a03563827', 1),
('08dd938b-38e0-4e2c-85b0-e32b66141da7', '2025-05-15 00:00:00.000000', '2025-05-15 15:33:57.000000', '2025-05-15 15:35:31.000000', 0, '08dd8709-954b-4fc6-810c-a208b7c2546d', 1),
('08dd938b-c224-4f43-86ed-ea12b82e5808', '2025-05-15 00:00:00.000000', '2025-05-15 15:37:37.000000', '2025-05-15 16:49:50.000000', 0, '08dd8709-954a-4b91-8ea0-9121624181a5', 1),
('08dd938c-6039-4f50-88f4-1d2a291b7641', '2025-05-15 00:00:00.000000', '2025-05-15 15:42:03.000000', NULL, 0, '08dd8709-954b-4ce7-84e6-d25c52bd9079', 1),
('08dd938c-81c2-48fc-8e84-ab903015cddf', '2025-05-15 00:00:00.000000', '2025-05-15 15:42:59.000000', NULL, 0, '08dd8709-954a-45eb-8717-e206bc802c0e', 1),
('08dd938c-e779-44d9-82cb-2f1c1cadd766', '2025-05-15 00:00:00.000000', '2025-05-15 15:45:59.000000', '2025-05-15 15:47:07.000000', 0, '08dd8709-954b-4dda-8341-7e29b34d2807', 1),
('08dd9390-9595-4f4c-86ca-c3c2fe81be37', '2025-05-15 00:00:00.000000', '2025-05-15 16:12:20.000000', '2025-05-15 16:20:33.000000', 0, '08dd8709-954a-4c16-8ffb-059f0ea66e2c', 1),
('08dd9392-ecd2-4380-899d-6bc1231507c6', '2025-05-15 00:00:00.000000', '2025-05-15 16:29:05.000000', '2025-05-15 16:31:39.000000', 0, '08dd8709-954a-4ea2-8821-395741dff0aa', 1),
('08dd9393-3b7e-4d49-8f66-5a4fc0189f1d', '2025-05-15 00:00:00.000000', '2025-05-15 16:31:17.000000', '2025-05-15 16:32:22.000000', 0, '08dd8709-954a-48f7-8800-78bd828213a5', 1),
('08dd9395-657c-4214-8ccb-1376d6c98169', '2025-05-15 00:00:00.000000', '2025-05-15 16:46:47.000000', NULL, 0, '08dd8709-954b-4d6c-89de-3249a22af391', 1);

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
