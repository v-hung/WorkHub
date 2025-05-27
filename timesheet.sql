-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 27, 2025 at 11:15 AM
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
('08dd9d0a-0e10-4d3b-83f1-80854211df6f', '', 'Administrator', 'ADMINISTRATOR', 'c564e3ea-6430-4bb6-975b-3dce0a48f1d1');

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
(1, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.View'),
(2, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.Create'),
(3, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.Edit'),
(4, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.Delete'),
(5, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.Export'),
(6, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Users.Import'),
(7, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Roles.View'),
(8, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Roles.Create'),
(9, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Roles.Edit'),
(10, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Roles.Delete'),
(11, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Teams.View'),
(12, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Teams.Create'),
(13, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Teams.Edit'),
(14, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Teams.Delete'),
(15, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.WorkTimes.View'),
(16, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.WorkTimes.Create'),
(17, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.WorkTimes.Edit'),
(18, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.WorkTimes.Delete'),
(19, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Projects.View'),
(20, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Projects.Create'),
(21, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Projects.Edit'),
(22, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Projects.Delete'),
(23, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Devices.View'),
(24, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Devices.Create'),
(25, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Devices.Edit'),
(26, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Devices.Delete'),
(27, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Timesheets.View'),
(28, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.Timesheets.Export'),
(29, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.System.SendEmail'),
(30, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.System.Report'),
(31, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.BioStar.SyncUsers'),
(32, '08dd9d0a-0e10-4d3b-83f1-80854211df6f', 'Permission', 'Permissions.BioStar.SyncTimesheets');

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
('00c0a23a-d208-4fef-b4c7-fa343e8f555d', 'Vương Tiến Mạnh', '/uploads/users/avatar_00c0a23a-d208-4fef-b4c7-fa343e8f555d.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285194', NULL, NULL, NULL, 0, NULL, NULL, NULL, '43', 'bioStar_43', 'bioStar_43', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBFxAMvsFHDA3FUejI0JQWKT0KEq1tLbiE1I2CdAi//wY1v/3aWZp30/Ulq1yC9VYw==', '548b1a40-6c1b-4341-a6fc-d38b37ae8475', '74137d9c-dd90-4454-b9c7-2a38574036ed', NULL, 0, 0, NULL, 1, 0),
('03c7f038-76be-447d-bed3-76783cea92ef', 'card9', '/uploads/users/avatar_03c7f038-76be-447d-bed3-76783cea92ef.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285456', NULL, NULL, NULL, 0, NULL, NULL, NULL, '128', 'bioStar_128', 'bioStar_128', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIdThpyZ15CO4nBoRIjnNc0VrWXtSxXcvB6Qh+sNEUo2DkzlvoFAKNMApTBKugMXcg==', '1b5f7ffe-bcd2-4638-be2f-76ab6b8a88e6', '384c5809-9062-406b-8184-e69e72704b09', NULL, 0, 0, NULL, 1, 0),
('0871141b-c2f7-4f8d-b1f0-fc45729064af', 'Phùng Đức Long (Onsite)', '/uploads/users/avatar_0871141b-c2f7-4f8d-b1f0-fc45729064af.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285363', NULL, NULL, NULL, 0, NULL, NULL, NULL, '210', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 'phunglongdevops@gmail.com', 'PHUNGLONGDEVOPS@GMAIL.COM', 1, 'AQAAAAIAAYagAAAAEJLcm+9uYvz5i+nBQZz/bx7JTnij726bwrBnWN0b0NYuiCgosr1uwjnXUVJNeJ5yiA==', '8811ca3a-d96e-49f8-b367-757da2ed1ed0', 'c7e66b08-4583-4561-b906-f0f6256cf41b', NULL, 0, 0, NULL, 1, 0),
('10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf', 'Nguyễn Thị Hà', '/uploads/users/avatar_10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285212', NULL, NULL, NULL, 0, NULL, NULL, NULL, '63', 'bioStar_63', 'bioStar_63', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBBE9e4/eb5tPTg9ykuuSO0RNxRL5Pr1WdOI7ebA8M4aXRW+r3JafiT7i+R+njpEPQ==', '88e606cc-6a00-4aab-9bb3-3c80e2a57b0c', 'a76dd75b-7dae-48cf-b8f2-4bee95e0fa46', NULL, 0, 0, NULL, 1, 0),
('14950350-73d5-4681-a500-2046a6e41a58', 'Do Tien Dung', '/uploads/users/avatar_14950350-73d5-4681-a500-2046a6e41a58.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285195', NULL, NULL, NULL, 0, NULL, NULL, NULL, '46', 'bioStar_46', 'bioStar_46', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHF5hSJ5fpCN6gOUEI/ZLU15Bi1CL+YFZDiUUUN/zuz4uN2+5ah3iMTq8a0Q2DA46Q==', '3627fa25-2d4a-40f9-9cc0-0ffc8df3e85c', '467ea4c3-a71b-4d26-a053-2a95d6e3ff30', NULL, 0, 0, NULL, 1, 0),
('16f8112d-f86c-488d-bd47-9d24420f6557', 'Nguyễn Minh Thái', '/uploads/users/avatar_16f8112d-f86c-488d-bd47-9d24420f6557.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285175', NULL, NULL, NULL, 0, NULL, NULL, NULL, '18', 'bioStar_18', 'bioStar_18', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECHM93tEkcjCF5yfLqjHCo0xP+sVgXMAflxRBJ3KGzB/blZCqbni0D3+D30uTEFSoQ==', 'a64ddf60-96e7-424d-af05-db1a1a55906b', 'a5e5c85e-a015-490c-9d24-a9f382adcc5d', NULL, 0, 0, NULL, 1, 0),
('203312ce-95eb-48b4-a8f9-a2db51e2e4a1', 'Nguyen Tien Nghia (fabbi)', '/uploads/users/avatar_203312ce-95eb-48b4-a8f9-a2db51e2e4a1.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285361', NULL, NULL, NULL, 0, NULL, NULL, NULL, '208', 'bioStar_208', 'bioStar_208', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECz1BN9iynzhyxMSvG3J8TTauGN0pjxciiH05rd2q88snxifGP4VjVp9vOKjX5ibwA==', 'c8c4990f-656b-4de8-8dd6-c0013f0f86ae', '51f72783-2a9e-498d-95de-96559ce0696e', NULL, 0, 0, NULL, 1, 0),
('22bb0018-cae7-400e-b055-c7498acef613', 'Đặng Thị Diễm My', '/uploads/users/avatar_22bb0018-cae7-400e-b055-c7498acef613.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285215', NULL, NULL, NULL, 0, NULL, NULL, NULL, '73', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 'mydtd@wbcvn.vn', 'MYDTD@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEIs9pE9lKG8oWT0B2JAcT69YCjOLrRVApQflOD8qyjBQFSL2uell4sS+4KeveVHMyQ==', 'acd5315c-b756-4dae-915c-cd6ca801eb7a', '90742973-1610-4d08-9482-e015858a2f4e', NULL, 0, 0, NULL, 1, 0),
('24a71cb4-6861-44af-b731-61ac63a394dc', 'Đặng Quang Khang', '/uploads/users/avatar_24a71cb4-6861-44af-b731-61ac63a394dc.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285213', NULL, NULL, NULL, 0, NULL, NULL, NULL, '68', 'bioStar_68', 'bioStar_68', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBftUuQlMG2ArRHZFUitr+RHdda7oaLvYjRQ79AhdaZ32L4zxfkaWIK6Vue5NAuMpA==', '4a0bdc7f-28e7-4b49-aa2b-1ad713f6f922', 'f3f4870a-221f-4c1d-a301-45120e07a6f7', NULL, 0, 0, NULL, 1, 0),
('2eb0d3de-cb47-4837-899d-0deceaa44065', 'Trieu anh Tuan Onsite', '/uploads/users/avatar_2eb0d3de-cb47-4837-899d-0deceaa44065.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285366', NULL, NULL, NULL, 0, NULL, NULL, NULL, '211', 'bioStar_211', 'bioStar_211', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELRd4uJYYi+HYG4njF6/kxQ8ceSwtSXE+Flh9adW1mee5hcoWeAnSuhR2Zza7EMiHg==', 'bd27485a-580d-470d-bede-37fa6eb03922', '68317d89-c389-4706-a528-c569a95df940', NULL, 0, 0, NULL, 1, 0),
('2f68cb4a-d852-4065-8350-8d01f4ad2fae', 'guess 7', '/uploads/users/avatar_2f68cb4a-d852-4065-8350-8d01f4ad2fae.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285249', NULL, NULL, NULL, 0, NULL, NULL, NULL, '94', 'bioStar_94', 'bioStar_94', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGAoiYY5xclHKj2aaazo5sIEPCjS/qNGexTo1m8TtqE8360Lo8DHHHfDlLNjnIk+7g==', '181b0a61-bb73-43e0-9efd-cea2dae698bd', '757d6d3d-a60f-4ef0-94f3-dcb09877623b', NULL, 0, 0, NULL, 1, 0),
('307b0447-e3b1-452b-b297-e1c5558a8ab0', 'Gues1', '/uploads/users/avatar_307b0447-e3b1-452b-b297-e1c5558a8ab0.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285224', NULL, NULL, NULL, 0, NULL, NULL, NULL, '88', 'bioStar_88', 'bioStar_88', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAN0aMTaVsNivCmj/mcZfSrF8RKD1H+xmdesdQRdoGxQ7sSj6wLRSvVoAmYOASiVPg==', 'ded531c1-52a3-4f91-9206-9063a00f9b65', '20ef06e4-a82c-4785-89a1-818a08970c5e', NULL, 0, 0, NULL, 1, 0),
('30933653-664d-4f59-b85e-9c34b98a0143', 'Hoàng Văn Dương', '/uploads/users/avatar_30933653-664d-4f59-b85e-9c34b98a0143.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285214', NULL, NULL, NULL, 0, NULL, NULL, NULL, '70', 'bioStar_70', 'bioStar_70', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJzoZoKJQ5nnDoxZdHIGRLCmYBNPz9szFnixSqz2urJFa1wgxa7NAxCGB+UTGX5pfA==', '2d0e3373-4a2e-49c0-beff-efd775205959', '51cfe4b7-d324-4de8-bcd1-094f021b64bd', NULL, 0, 0, NULL, 1, 0),
('3b2003c4-0ec0-4a8f-b32b-7e02e1e8fa01', 'IMAI', '/uploads/users/avatar_3b2003c4-0ec0-4a8f-b32b-7e02e1e8fa01.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285211', NULL, NULL, NULL, 0, NULL, NULL, NULL, '59', 'bioStar_59', 'bioStar_59', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEIL0CBXLa9+zYcru6flEDSmu0vCmh3+Wrz+OL0IaXRCAXyvCK0e0ih0QZjrnneKSVA==', '07f4bc81-13ad-4d0d-8e74-2cf022e28405', '24648fac-a369-4461-bb59-a876e80b0e2c', NULL, 0, 0, NULL, 1, 0),
('3d2a04c8-efe6-44f8-84d0-14becb4f9db0', 'Phạm An Thiện (fabbi)', '/uploads/users/avatar_3d2a04c8-efe6-44f8-84d0-14becb4f9db0.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285270', NULL, NULL, NULL, 0, NULL, NULL, NULL, '201', 'bioStar_201', 'bioStar_201', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEItrCW7NmgPaRETsBT8e1NfNxqba2L0lq1/9jhQZPVIpy3+Uy8CJx4srt4epnSOIVA==', 'c7bc2506-3c19-4d32-9d6c-59ad30b84eb2', 'f5f30fb8-8e50-4c28-8b91-7d1f54384a8d', NULL, 0, 0, NULL, 1, 0),
('437064fd-b2ef-4ec7-888c-f7b0dec67d16', 'Dinh (extreme)', '/uploads/users/avatar_437064fd-b2ef-4ec7-888c-f7b0dec67d16.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285367', NULL, NULL, NULL, 0, NULL, NULL, NULL, '214', 'bioStar_214', 'bioStar_214', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGc+2HBiiiLXwZG7wwYQ2yWsGYCW6PJ2G6lEwfa4klmxyO1Ec3rYKd88TgzRXcBaHA==', '0a29b391-b58e-48da-ab2f-2972ab744962', 'eeb79b89-a5c5-417e-bec9-9feb82fd93ce', NULL, 0, 0, NULL, 1, 0),
('4965f420-e3be-4bcb-9f34-8a93a19a9fb5', 'Bạch Thị Hương Giang', '/uploads/users/avatar_4965f420-e3be-4bcb-9f34-8a93a19a9fb5.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285173', NULL, NULL, NULL, 0, NULL, NULL, NULL, '14', 'bioStar_14', 'bioStar_14', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKaNhSSHhCpM/OQmOjNKdNZKQsj2aBVKObYpIfDydVsysvrTmvpbqx4eWUqfmQxxNw==', '2c8ea5b7-8aa0-4c5e-a805-b79c1bbbc0c4', '9d975600-d652-41f5-88f0-987cc904f343', NULL, 0, 0, NULL, 1, 0),
('4dedbb61-846d-448d-992c-78e391b300e8', 'card5', '/uploads/users/avatar_4dedbb61-846d-448d-992c-78e391b300e8.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285446', NULL, NULL, NULL, 0, NULL, NULL, NULL, '124', 'bioStar_124', 'bioStar_124', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEC5OBOLxwl5C2QaacZsY2OYV3WSzIZkfERpNprsyyQn+PwHfz8TNXiyXJ24ZWj5zpA==', 'd73e2d3c-af1d-4021-aa8e-36ac3c0f58fb', '809f7273-66cc-4768-9c72-1cacccd2d75b', NULL, 0, 0, NULL, 1, 0),
('50ba9434-d576-4ec6-a597-608a746bdc99', 'KHANG (rikkei)', '/uploads/users/avatar_50ba9434-d576-4ec6-a597-608a746bdc99.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285210', NULL, NULL, NULL, 0, NULL, NULL, NULL, '58', 'bioStar_58', 'bioStar_58', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBSybxL2whK7MoxdkcrPVABZ6ZDUGO9SoxeHU7tPbkWU5fsyHggUCZwRlWz0qGBZ6A==', 'e89711ff-2ed3-46e2-b3e1-4fa8f1ac0e75', '6211bc5f-9814-46c1-ae9f-bb98f4ee1b45', NULL, 0, 0, NULL, 1, 0),
('50d06236-052d-4e2c-a38f-aa4006704128', 'Nakamura', '/uploads/users/avatar_50d06236-052d-4e2c-a38f-aa4006704128.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285198', NULL, NULL, NULL, 0, NULL, NULL, NULL, '53', 'bioStar_53', 'bioStar_53', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGFlWB5HcoEd+R5kbA3FGhBiDl1zxK//EDwzVHkx3uUqnBTWfzR13pooum8vb8bkYQ==', '76f5653d-3e00-4063-aa0f-1ce80114e645', '0a7942f4-dca3-45da-a4eb-45b8217a55bc', NULL, 0, 0, NULL, 1, 0),
('5303c036-6bf3-43a4-85ee-4012fbfc8abc', 'Vũ Huyền Ngọc', '/uploads/users/avatar_5303c036-6bf3-43a4-85ee-4012fbfc8abc.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285179', NULL, NULL, NULL, 0, NULL, NULL, NULL, '32', 'bioStar_32', 'bioStar_32', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHySnxwD1Q9BliE9cDUghxA2nu5vApMKpel9AbVHdTyf7oojpgTZQ53O9Hb1i2c5nQ==', '7c8bab7a-a011-4f50-903f-921378ceafbd', '03de6053-6096-4d68-b501-8b35c6c8d9bf', NULL, 0, 0, NULL, 1, 0),
('53f9c72c-1942-4bd0-83a1-2f0595178638', 'guess 4', '/uploads/users/avatar_53f9c72c-1942-4bd0-83a1-2f0595178638.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285228', NULL, NULL, NULL, 0, NULL, NULL, NULL, '91', 'bioStar_91', 'bioStar_91', NULL, NULL, 1, 'AQAAAAIAAYagAAAAED/IfhyOnyPoUHZ9F4Unv5mvo/kajLJECC7QfpAIFMEeKT9ZNA7ccOePr5nOQ5k/4Q==', '671d2ef2-1bb2-4d1e-b59d-bbb16c1e33d8', 'dfcb37fa-9e20-4bf4-b70d-13f989e02111', NULL, 0, 0, NULL, 1, 0),
('548b91f8-84e6-4d8f-8f1d-734a327918bc', 'Card 1', '/uploads/users/avatar_548b91f8-84e6-4d8f-8f1d-734a327918bc.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285442', NULL, NULL, NULL, 0, NULL, NULL, NULL, '120', 'bioStar_120', 'bioStar_120', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEK6BDfSgXLNykKBVwuSMk4iswS0BykZVwSw1zNWeQRVKpqWOxw/8SHopY0JIaZpSJw==', 'ea794c0f-48ef-4076-85a8-45c6092cee74', '8fe3f13e-a1ed-4bc0-ba23-1c77aac417b8', NULL, 0, 0, NULL, 1, 0),
('571667ab-2080-4ab9-8aaa-3a73ff4cf3b6', 'Kien (rikkei)', '/uploads/users/avatar_571667ab-2080-4ab9-8aaa-3a73ff4cf3b6.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285252', NULL, NULL, NULL, 0, NULL, NULL, NULL, '100', 'bioStar_100', 'bioStar_100', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEEqN+3oQXoaJFPPjbFt2ZyPokLENz1zIE/BDLPVqHjqhQR4HAEFLJqXZFgvNod8x/w==', '5c83c1db-9688-44fc-a2fd-e12e387e3c12', '9504ebbd-58dc-4467-80a8-bebdfbfe4e9a', NULL, 0, 0, NULL, 1, 0),
('58bdfcee-ec5f-43bd-92c6-f8811b98465b', 'Quản Thị Ngọc', '/uploads/users/avatar_58bdfcee-ec5f-43bd-92c6-f8811b98465b.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285204', NULL, NULL, NULL, 0, NULL, NULL, NULL, '55', 'bioStar_55', 'bioStar_55', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBguw/6Hf16Ew3MaE8/M0XscV1IEb7ukZ5zXt3SPLFTgFTIStw73hwEBT6ngLRTPAQ==', 'ddce9699-36f5-419e-8c5b-ae184d1f063e', 'e7ddc444-7416-4384-a225-5c8dbf338802', NULL, 0, 0, NULL, 1, 0),
('5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55', 'Trần Anh Thư', '/uploads/users/avatar_5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.284589', NULL, NULL, NULL, 0, NULL, NULL, NULL, '2', 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 'anhthu@wbcvn.vn', 'ANHTHU@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAECBzX/tw62FUFUHfz/SwLylYDXUdWHb86idazhz9qNyVE/Z48fi8a2O6jfHYL3f7JA==', '19362526-7c9a-4598-bb3b-377f5fffbb6c', '6c5af937-582b-4b46-a7d9-1bdefb7cdd57', NULL, 0, 0, NULL, 1, 0),
('64853267-d862-4948-9a9b-038ba02b4dcf', 'guess 8', '/uploads/users/avatar_64853267-d862-4948-9a9b-038ba02b4dcf.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285251', NULL, NULL, NULL, 0, NULL, NULL, NULL, '95', 'bioStar_95', 'bioStar_95', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJY08IHbPP0cLjANtfDupJSFb161WOS7buRnyPYt7RGGkQRN/0uvNmWT5WsuwpWxwA==', 'a2390fe3-fb81-491d-9987-cb2c321e6dae', '34a54f3b-c3fc-4b38-a78b-6681de49d0a8', NULL, 0, 0, NULL, 1, 0),
('65441b81-42e5-4853-ac86-5ed585781586', 'Pham Quang Linh (VMO)', '/uploads/users/avatar_65441b81-42e5-4853-ac86-5ed585781586.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285260', NULL, NULL, NULL, 0, NULL, NULL, NULL, '112', 'bioStar_112', 'bioStar_112', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECf68x5ODl6NKKJUWlzrs5jeDaWTM1terCXFzg9teJVWY4+18QsPor+9FoYK1W5YaQ==', '3e68d471-4b25-4a0c-a946-6bb5e830f73d', '4e5028f6-dcc1-4cd2-b18b-bbf6f758fa77', NULL, 0, 0, NULL, 1, 0),
('67486fce-a5f9-4a9c-8c70-887686ab5a35', 'Đào Duy Thắng', '/uploads/users/avatar_67486fce-a5f9-4a9c-8c70-887686ab5a35.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285180', NULL, NULL, NULL, 0, NULL, NULL, NULL, '33', 'bioStar_33', 'bioStar_33', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEI2wRrmWjQcPfej5vv5grQXPDzx2ACaIFVzNdv9KtebBF7nqMVACGdu9ZFwTNW3oag==', 'ee45fdba-1fbb-4e8a-b86d-1f4a3354a9bb', 'bec6eb2c-e986-4ef5-bf6e-d89dbf1a64d0', NULL, 0, 0, NULL, 1, 0),
('6b7f258f-53fc-4489-a46d-65566d931f8d', 'Irikura', '/uploads/users/avatar_6b7f258f-53fc-4489-a46d-65566d931f8d.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285265', NULL, NULL, NULL, 0, NULL, NULL, NULL, '117', 'bioStar_117', 'bioStar_117', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFPHjQuWlIxSfgsfPM+GTrY4B3m5NY6Al6FfVDsAAuWByLSEod2PQ8YP3ZHtqg/CoQ==', 'ba1eff4d-ef6b-4cd6-88b9-1de173ef2477', '04918384-bad5-4f94-b627-725e11a224c6', NULL, 0, 0, NULL, 1, 0),
('72d04288-78ad-4b06-9baa-06e64a08c038', 'card 2', '/uploads/users/avatar_72d04288-78ad-4b06-9baa-06e64a08c038.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285444', NULL, NULL, NULL, 0, NULL, NULL, NULL, '121', 'bioStar_121', 'bioStar_121', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEKFsrtue1N1/Zn8z1AaurS7J0eXatwd26Y0sulMonFJg0Br3ZnuVWY+VWLaHmdYx5A==', 'bb4b2cff-de9c-4336-9eb6-7d87af1d76b6', '871e8e17-9203-4fb2-8113-e460a01384cd', NULL, 0, 0, NULL, 1, 0),
('75859940-374b-4357-8390-389a153957f4', 'guess 6', '/uploads/users/avatar_75859940-374b-4357-8390-389a153957f4.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285230', NULL, NULL, NULL, 0, NULL, NULL, NULL, '93', 'bioStar_93', 'bioStar_93', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAliXFp/OXED//P/s6SofzhzZVmsp5+hWcYAeX5fMMF8ElZ+7jxBZAQEXZXODD8mbg==', '425fae5b-8f07-4d22-9d07-c2859ff1f74b', '08618e45-e4fa-4ac6-9773-8bd8b8690034', NULL, 0, 0, NULL, 1, 0),
('7a953140-2025-4fb5-bd1b-6bfe559440d0', 'Hai rikkei', '/uploads/users/avatar_7a953140-2025-4fb5-bd1b-6bfe559440d0.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285259', NULL, NULL, NULL, 0, NULL, NULL, NULL, '104', 'bioStar_104', 'bioStar_104', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBBnRKHBrtl4U46HuEzT9A4fadKf4vhILkBJQ5UF/0UDNYZCd5AoYjJ0bVS82R/KWA==', '69d1abea-27bc-4f5a-a543-4a6ef8afc0f4', '44eb5656-8ce9-4a42-8826-6cb740c9378f', NULL, 0, 0, NULL, 1, 0),
('7aa5f9f0-1394-4a6b-81da-003c856f8165', 'card6', '/uploads/users/avatar_7aa5f9f0-1394-4a6b-81da-003c856f8165.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285447', NULL, NULL, NULL, 0, NULL, NULL, NULL, '125', 'bioStar_125', 'bioStar_125', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMRu58o1cKQ6+Vu0s3wf98TNJIuSzUWHK29SSUPHa/Fi+Y/T42qOqvcqinrTksRKUg==', '4daa55c1-3d52-4e46-91ae-9ecb0e076539', '5e0f6e0b-d90f-4997-84b3-cc975da3b8dd', NULL, 0, 0, NULL, 1, 0),
('7cff6920-7a31-46eb-884c-4062cca1e4a4', 'Trần Cảnh Dưỡng', '/uploads/users/avatar_7cff6920-7a31-46eb-884c-4062cca1e4a4.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285191', NULL, NULL, NULL, 0, NULL, NULL, NULL, '39', 'bioStar_39', 'bioStar_39', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFBVhBwW35Aax6758AbGebqgEs8bIotuo98VLQt/h1372cys76AL8d6uS6LkbhmaRg==', 'eb012ac5-9b31-424e-b56b-aa6cf374c3c8', '6d3b1ec2-e915-444f-90a8-86b20ff642b1', NULL, 0, 0, NULL, 1, 0),
('7ebc21c1-692e-4355-938b-bc622249ff80', 'Hayashi MSR', '/uploads/users/avatar_7ebc21c1-692e-4355-938b-bc622249ff80.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285362', NULL, NULL, NULL, 0, NULL, NULL, NULL, '209', 'bioStar_209', 'bioStar_209', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAriOfaC/J3eTGGP9sec+F8U78CKTRfHYHEo7Z3yvTHbVaFr2lHm5D9kQDbI4IpLQQ==', '01e169e0-6f6c-4a4e-905c-c2e673a5b599', 'e5fee78b-8788-498b-b955-877b39c7fb98', NULL, 0, 0, NULL, 1, 0),
('866960a5-a792-4343-bec2-380504c4b629', 'Trần Thị Phương Thảo', '/uploads/users/avatar_866960a5-a792-4343-bec2-380504c4b629.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285268', NULL, NULL, NULL, 0, NULL, NULL, NULL, '200', 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 'thaottp@wbcvn.vn', 'THAOTTP@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAELaOlimiQbgmpixSemt0y038WG3TXQfGTA6QyqmVpz8pZek+ZEXCogUcItZqSZ/6cQ==', '43777a00-cde5-424b-b031-6d65a75045a4', '1817b933-400c-43d8-8c5c-8375652a018d', NULL, 0, 0, NULL, 1, 0),
('87b357f5-0929-421b-a5d0-efc735d65050', 'HASHIMOTO SEIKA', '/uploads/users/avatar_87b357f5-0929-421b-a5d0-efc735d65050.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285199', NULL, NULL, NULL, 0, NULL, NULL, NULL, '54', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 'hashimoto-seika@wbcvn.vn', 'HASHIMOTO-SEIKA@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEFp439+4545ve1qXT94GBg4/eKtlrlxrGqbxwGy0k+7tOfT+elEcctWq5rtJBUGfcw==', 'e9db095a-3f75-4919-8294-52d50767b4c4', '1ff79cfe-913c-4ef1-88f9-aa4cdc5cde14', NULL, 0, 0, NULL, 1, 0),
('920fc995-5422-4cef-bece-4087e9ddde42', 'Vi Van Hung', '/uploads/users/avatar_920fc995-5422-4cef-bece-4087e9ddde42.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285259', NULL, NULL, NULL, 0, NULL, NULL, NULL, '101', 'bioStar_101', 'bioStar_101', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMDX3FxjPbE39ShkRq/SBZpaGgEqv2ksyEYaZ2HU3Of0OUpehtLfjpx1ueZKprRf+Q==', '962c2c00-abed-4262-bec9-7dcc073b8749', '21d50e33-d8d6-4ba9-872b-91461c3efd90', NULL, 0, 0, NULL, 1, 0),
('97d1aab1-05a3-4456-a08d-b9fe2bca602a', 'Sếp', '/uploads/users/avatar_97d1aab1-05a3-4456-a08d-b9fe2bca602a.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285163', NULL, NULL, NULL, 0, NULL, NULL, NULL, '7', 'bioStar_7', 'bioStar_7', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJbMJkNDeP/blcCtaffqQ9o1bwyw0d0McwMu4L4YBt+Gkh/b1I9e4EWj9LOD2K/GbA==', '406b9ef8-e7d3-4bd5-a065-e5ba464be2fe', '1f10c75a-7aba-4278-9d90-b72c07f9d458', NULL, 0, 0, NULL, 1, 0),
('9a2c6bb8-e6e9-42fe-a0f0-2b1a6d58e9a2', 'card 4', '/uploads/users/avatar_9a2c6bb8-e6e9-42fe-a0f0-2b1a6d58e9a2.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285445', NULL, NULL, NULL, 0, NULL, NULL, NULL, '123', 'bioStar_123', 'bioStar_123', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDxzc98Nw4YSjcOpFSYTUzBTahhhECrz913Chhya4HJ4TlApSsXFa0/IvBaSIWc5oQ==', '6c58bf06-53ad-4330-8b1d-5986078620f4', 'a8b7ea8c-49c4-422f-948f-8d8b7950ed91', NULL, 0, 0, NULL, 1, 0),
('a1dcffec-d57e-4d4a-a6b7-04abd6c06d17', 'Vũ Huy Bình (Rikkei)', '/uploads/users/avatar_a1dcffec-d57e-4d4a-a6b7-04abd6c06d17.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285179', NULL, NULL, NULL, 0, NULL, NULL, NULL, '31', 'bioStar_31', 'bioStar_31', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEHfkhHJ8m+15TYhhAn72RuroUorPdUdAcdxjY49tBxlJP8t2IDA0F5qedVBo12DVaQ==', '0eb293dd-814d-4698-a309-f548b23ea8d6', '19fd73c6-fb1d-4997-a178-988100018bb2', NULL, 0, 0, NULL, 1, 0),
('a4052c3d-22e7-4a46-a20e-77c0401c3f8e', 'Trần Việt Sỹ', '/uploads/users/avatar_a4052c3d-22e7-4a46-a20e-77c0401c3f8e.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285216', NULL, NULL, NULL, 0, NULL, NULL, NULL, '74', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 'sytv@wbcvn.vn', 'SYTV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEFmXkUVK+cSZCg12jR0LFbFj/VDii2C5UoQz5wb55uRuDxeXTZLI6B2VoZhmtE+YKw==', '0a0bd3a6-3c4f-492b-887e-cb29856d7bb1', 'bace1676-ffa6-497c-92db-fb5d278d9466', NULL, 0, 0, NULL, 1, 0),
('a8c90e0f-104d-485c-aad6-2570e0fcc171', 'GUESS 3', '/uploads/users/avatar_a8c90e0f-104d-485c-aad6-2570e0fcc171.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285228', NULL, NULL, NULL, 0, NULL, NULL, NULL, '83', 'bioStar_83', 'bioStar_83', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGl5LOUlvukP9uP3DFeBzwDQK42L8MKpv73pP1nQ4FNcl7G2s5iWYGReq5Sd4seinw==', '959178c6-151e-439e-be7a-ae411c1cf3da', 'a0658b1b-324d-423b-a659-33a57f61dcf6', NULL, 0, 0, NULL, 1, 0),
('ae4da4ab-7fe8-4f47-aa44-25299a2e0ef2', 'card3', '/uploads/users/avatar_ae4da4ab-7fe8-4f47-aa44-25299a2e0ef2.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285443', NULL, NULL, NULL, 0, NULL, NULL, NULL, '122', 'bioStar_122', 'bioStar_122', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMFZUm+W2cqOjJ86ro5hBppxBkFZbmKW7nsqRwFF2ksbkRKKyPK23U+oSfZBGadPZA==', 'd45c483c-d608-4358-8fa4-2b16e27225cf', '98f2f65e-7008-4f9b-a3eb-57b781b3977e', NULL, 0, 0, NULL, 1, 0),
('b4195aa9-5924-40fb-8baf-7105cad72735', 'Trần Văn Tuyên', '/uploads/users/avatar_b4195aa9-5924-40fb-8baf-7105cad72735.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285366', NULL, NULL, NULL, 0, NULL, NULL, NULL, '213', 'bioStar_213', 'bioStar_213', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEL/Za+9Jr6WmEadpqS23cl6oL2FS+W+/mqST6ykvgy3g8Ii83oBF27Dlu4aFpD6Ajw==', '99e7b7d8-f795-42ed-a8e3-30a6c6b7f3c2', '4ecc6ea5-cd1a-4b7b-906c-675f90e01ef3', NULL, 0, 0, NULL, 1, 0),
('b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7', 'Trần Văn Long', '/uploads/users/avatar_b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285178', NULL, NULL, NULL, 0, NULL, NULL, NULL, '27', 'bioStar_27', 'bioStar_27', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEC8Zj5mrz1B/BMu2hT1BuuOi/twGdQne3oemJVy5n2uwjBlrXxNa/jBBbDnBV1to3A==', '0c8ac89b-ac83-403e-a9ca-50048f3d4e7a', '00107edc-4662-4c03-9d17-01d454c4cd1b', NULL, 0, 0, NULL, 1, 0),
('b7821734-1071-4c78-a38a-4d32e6517d4b', 'card10', '/uploads/users/avatar_b7821734-1071-4c78-a38a-4d32e6517d4b.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285458', NULL, NULL, NULL, 0, NULL, NULL, NULL, '129', 'bioStar_129', 'bioStar_129', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJ3Q0SZsGOv0pOBx0iyXTlKf9eAWfb3j6auDKeaR3FBMEF25bEY1iEvI0na7uM/z9A==', 'd789046f-5cff-428e-95d8-04cad76a27f3', 'c14330c5-e347-4117-8865-0e8e3b2efe16', NULL, 0, 0, NULL, 1, 0),
('bb8fe972-04d7-43d4-94c5-76da887e4d80', 'Nguyễn Việt Hùng', '/uploads/users/avatar_bb8fe972-04d7-43d4-94c5-76da887e4d80.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285261', NULL, NULL, NULL, 0, NULL, NULL, NULL, '113', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 'hungnv@wbcvn.vn', 'HUNGNV@WBCVN.VN', 1, 'AQAAAAIAAYagAAAAEFjGwdU1td4tIh12er65qKev6n4LPqbbMhTv9wIA8xC6dHBdstgHnN4g1IsmQamxng==', '55dc52f2-a0e4-4a94-9552-c75ef2052be1', '07c72052-eb17-45de-aa15-282c5f60bda1', NULL, 0, 0, NULL, 1, 0),
('bbce749b-667b-4358-9271-ca892564cd90', 'Tang Ngoc Van', '/uploads/users/avatar_bbce749b-667b-4358-9271-ca892564cd90.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285196', NULL, NULL, NULL, 0, NULL, NULL, NULL, '49', 'bioStar_49', 'bioStar_49', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEGj0Uyh1uywVLzeZPTpbWS43+uRdyTqLSfBlHLtBRbXX5hn/f2YjK6nPoinZJNmcaQ==', 'e088e506-5427-4e4b-8fc4-d02954a13aa0', '347d6a54-dfb6-4d72-96b2-326f8019e045', NULL, 0, 0, NULL, 1, 0),
('bce414e4-70c8-407b-afb0-ed384678e08c', 'Đỗ Thị Thúy Ngọc (fabbi)', '/uploads/users/avatar_bce414e4-70c8-407b-afb0-ed384678e08c.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285359', NULL, NULL, NULL, 0, NULL, NULL, NULL, '203', 'bioStar_203', 'bioStar_203', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJg+hQKKfOiY4UCHnCizAr4ULPQZv+hlUmu576Giu821Zbv8u5dOYuOU28vJkE5vDg==', 'e2794305-b5c4-4679-bcd2-6faa014e4606', '8a2de1bc-c0dc-40f8-ac7f-89cbc9ff87e0', NULL, 0, 0, NULL, 1, 0),
('bcf7e0ef-547b-47e6-b363-01277d30da79', '', '/uploads/users/avatar_bcf7e0ef-547b-47e6-b363-01277d30da79.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285218', NULL, NULL, NULL, 0, NULL, NULL, NULL, '76', 'bioStar_76', 'bioStar_76', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEMlaa39rdIeGNTFqr8wFJWQsi2VYyKIvHACeMz4QMp1bsaSiaJbah9lD+GBN84XGEw==', '66497050-64fb-420c-a203-555831ff2589', '1b6df673-c4ec-4b54-bf37-f30bec9f6fc8', NULL, 0, 0, NULL, 1, 0),
('c12df90f-f0ff-4ce7-ac81-a6b68bc914df', 'guess 5', '/uploads/users/avatar_c12df90f-f0ff-4ce7-ac81-a6b68bc914df.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285229', NULL, NULL, NULL, 0, NULL, NULL, NULL, '92', 'bioStar_92', 'bioStar_92', NULL, NULL, 1, 'AQAAAAIAAYagAAAAECVaeyQyGbuv1tuK0vfHNIFXlDzVxjngMDoA5vcRCZifgzh9UNYSeqVrsceLdSsIOg==', 'e4374960-0d17-43fb-a99c-44742c60af42', 'a2a1e49b-8850-488c-ba0b-b954ccec6a57', NULL, 0, 0, NULL, 1, 0),
('d2b2235e-ae88-42ec-a5bd-d34620599111', 'Guees 2', '/uploads/users/avatar_d2b2235e-ae88-42ec-a5bd-d34620599111.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285226', NULL, NULL, NULL, 0, NULL, NULL, NULL, '81', 'bioStar_81', 'bioStar_81', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEFJr6rRkzgf07ZkciqGpITuTHhupVjy7XN3YU8EOMJmMhTXuBQKHFsyHlpbvxJKa9A==', 'b7305316-9c13-4449-b315-d2cdba125c07', '050ba01e-c85a-40ec-9849-ce4c7b1db0e3', NULL, 0, 0, NULL, 1, 0),
('d31a29db-6f42-45cd-94c7-e1c09ff536ca', 'Quách Thị Vân Anh', '/uploads/users/avatar_d31a29db-6f42-45cd-94c7-e1c09ff536ca.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285174', NULL, NULL, NULL, 0, NULL, NULL, NULL, '15', 'bioStar_15', 'bioStar_15', NULL, NULL, 1, 'AQAAAAIAAYagAAAAELqe/S8cycQvg5e0KKcxkU8M5TC04nN27m6JSuSAqDGiJSeuI4IZMOYnKrwVMPU+EQ==', '14ca1a84-c3ba-4361-a548-21420b973c6c', '53824226-a1a7-4e25-a906-6395d7058c3e', NULL, 0, 0, NULL, 1, 0),
('d3bf6bec-7fa9-4a6d-8526-152bc12a77b9', 'card 8', '/uploads/users/avatar_d3bf6bec-7fa9-4a6d-8526-152bc12a77b9.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285448', NULL, NULL, NULL, 0, NULL, NULL, NULL, '127', 'bioStar_127', 'bioStar_127', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEEm64A9NMRFh01lRmElTFLVQobcV8+RG2L6mYplAQj73wFNbKicRGdMMVHxKliqS7Q==', '1a365a94-2c83-4efc-abe5-a07bcceba79b', 'e660db7e-e1d0-4f81-acb4-aab68b8878f8', NULL, 0, 0, NULL, 1, 0),
('d70a188e-33fe-428f-bb2a-cbf5aaaf3028', 'Nguyễn Đức Thuận', '/uploads/users/avatar_d70a188e-33fe-428f-bb2a-cbf5aaaf3028.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285177', NULL, NULL, NULL, 0, NULL, NULL, NULL, '19', 'bioStar_19', 'bioStar_19', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEAuISve94e1GyXvtxJ2ee64HWjO2RAHnskCq3ots/LSFrYpAqPxPgxwPnLn4BrtaLQ==', 'ef2c412e-a826-469c-8426-5dad5170ec92', '5db1765b-ba29-4c49-a755-b3aca0384963', NULL, 0, 0, NULL, 1, 0),
('da13f0c6-9d7d-4e63-8124-fbabb8603e54', 'Vu Binh Giang', '/uploads/users/avatar_da13f0c6-9d7d-4e63-8124-fbabb8603e54.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285438', NULL, NULL, NULL, 0, NULL, NULL, NULL, '215', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 'giangvb@rikkeisoft.com', 'GIANGVB@RIKKEISOFT.COM', 1, 'AQAAAAIAAYagAAAAEAgY7OCFM14R4IQWypl/Bal2jI7vjavhz2QBD1wbjQzyrNrptrOZ0t1hYtcJyoHTUg==', 'b127bc94-aeb8-4279-85cb-66890277cab1', 'b291ac8b-7689-40f7-a491-5f2315910975', NULL, 0, 0, NULL, 1, 0),
('dbe03b44-8fe3-4f85-8074-02c6728e23c1', 'Nguyễn Bảo Lộc (fabbi)', '/uploads/users/avatar_dbe03b44-8fe3-4f85-8074-02c6728e23c1.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285356', NULL, NULL, NULL, 0, NULL, NULL, NULL, '202', 'bioStar_202', 'bioStar_202', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEH0t4rKp6KOw5CdggAGnQWUqC1pyYBykcuQSkNUb4hML68jRFwVcx2by7WUmfXXK/g==', '9998a60f-f1ab-4488-bdcc-cbc667527b0e', '85466a14-4803-4294-bce5-25c195aead86', NULL, 0, 0, NULL, 1, 0),
('dc724111-a143-4f3f-8ff5-f5bfbcf79f05', 'Nguyễn Tiến Thành (fabbi)', '/uploads/users/avatar_dc724111-a143-4f3f-8ff5-f5bfbcf79f05.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285360', NULL, NULL, NULL, 0, NULL, NULL, NULL, '204', 'bioStar_204', 'bioStar_204', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEOxx/5stGkkJbCEoKELryTzcY9HSs/ixuagI9RTlUcMostDVOnvOdIUH4Jpy3DTztw==', '1bb9fdd2-b3b3-440a-ac7e-80b36454135f', '926d50c2-f01e-44f5-a911-d972d2e0145b', NULL, 0, 0, NULL, 1, 0),
('e5691541-1c68-49b2-8050-1c7cd6370ed8', 'Administrator', '/uploads/users/avatar_e5691541-1c68-49b2-8050-1c7cd6370ed8.png', 0, 1, 0, 0, '2025-05-27 10:34:27.515589', NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 'admin@admin.com', 'ADMIN@ADMIN.COM', 'admin@admin.com', 'ADMIN@ADMIN.COM', 1, 'AQAAAAIAAYagAAAAEM+dRtERP3SeYSP88BCdLJk6+3mm25m6w0+gfaqtElcOyC18awx5xKXPsWsCGjtLYw==', 'QEX2LRB43ZQHP74JXVZ3I66XTRVI4EPP', 'fe10e84a-ebf4-4b0a-9f3d-2471d8b84bf0', NULL, 0, 0, NULL, 1, 0),
('e72fab65-553e-4b1b-9762-cd58db4e9cb9', 'Quynh (VMO)', '/uploads/users/avatar_e72fab65-553e-4b1b-9762-cd58db4e9cb9.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285264', NULL, NULL, NULL, 0, NULL, NULL, NULL, '114', 'bioStar_114', 'bioStar_114', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEC3ECeZLS/II98HKyWBDYs6uxUzSXOY/eLYSBTDe4x38YEshHOYw9uJ92JOgMoqa0g==', 'a55a8cbe-8e7e-4e07-830b-248934d3269f', 'a004842a-fee7-4a70-9b71-8941bc9abc07', NULL, 0, 0, NULL, 1, 0),
('e7e044fd-f033-4daa-9b9a-43414d340a23', 'Bac Itose', '/uploads/users/avatar_e7e044fd-f033-4daa-9b9a-43414d340a23.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285212', NULL, NULL, NULL, 0, NULL, NULL, NULL, '61', 'bioStar_61', 'bioStar_61', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEC/5RjRsQZM7G1mtCDk9sEsapBgD8zE59cAfiZhzhO76RZuZWGvcNwEym9qJgA1vzA==', '18b37c9f-898d-4c0d-ad77-913af1b7ee0f', 'd932a115-f1e1-483a-97b7-7f8e460f9b50', NULL, 0, 0, NULL, 1, 0),
('e8c512f4-0ce5-4779-8236-54284507b5d1', 'Ngo thanh tung', '/uploads/users/avatar_e8c512f4-0ce5-4779-8236-54284507b5d1.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285266', NULL, NULL, NULL, 0, NULL, NULL, NULL, '118', 'bioStar_118', 'bioStar_118', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDgElFcJeQ4ZxBdBObl5aoiNIlBk30fRKl/ALjw1v/bR7mHXg/fsnbtnWvseFIt5LQ==', 'e7187f83-b915-4afb-a0f6-9c2b8b08dcf8', '57e80953-b457-443d-ab37-bd8a5c60573d', NULL, 0, 0, NULL, 1, 0),
('f3375b8b-4f64-41e7-9cb3-6b6d2757e868', 'Nomura', '/uploads/users/avatar_f3375b8b-4f64-41e7-9cb3-6b6d2757e868.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285198', NULL, NULL, NULL, 0, NULL, NULL, NULL, '52', 'bioStar_52', 'bioStar_52', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEDQFVlb+tpIeqhWzZGyggz4Fmra7ATtu9SKijCWvWEVsf2AD6+Y4RaqM1Gtd1XqNhQ==', '4e8b034a-6f63-4c8b-aace-a602c1df3632', 'dd767fcc-08ac-4309-b362-05ff6872fa54', NULL, 0, 0, NULL, 1, 0),
('f420ada9-728f-4e34-b794-5225eb2b5e34', 'card7', '/uploads/users/avatar_f420ada9-728f-4e34-b794-5225eb2b5e34.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285448', NULL, NULL, NULL, 0, NULL, NULL, NULL, '126', 'bioStar_126', 'bioStar_126', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEBWY26dG/tuWIY14PcZHRbcNFD2xQNzeFVbqmg9nWo9VXsi7SFe4jrkxTI0Yx0W5+g==', 'e17ab295-23e2-4206-9fc1-8e471fba08f5', 'f9c6291c-e27d-4de7-bd08-4a4cd35b5a83', NULL, 0, 0, NULL, 1, 0),
('f4df1285-f06e-4b96-9f22-10336ed482e5', 'Nguyễn Mạnh Phúc', '/uploads/users/avatar_f4df1285-f06e-4b96-9f22-10336ed482e5.png', NULL, 1, 0, 0, '2025-05-27 10:36:53.285197', NULL, NULL, NULL, 0, NULL, NULL, NULL, '51', 'bioStar_51', 'bioStar_51', NULL, NULL, 1, 'AQAAAAIAAYagAAAAEJScOp4KIQ1LTYckoHGQeJe4XEye/PSgbaY+TYyIU0TFH2FX3nPBHi8uCf5jaI3oBw==', 'a9af3604-91f1-4de2-9fbf-d920d9954cd9', '7b0da4ad-aa05-42d5-8265-e2d431149bc2', NULL, 0, 0, NULL, 1, 0);

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
('e5691541-1c68-49b2-8050-1c7cd6370ed8', '08dd9d0a-0e10-4d3b-83f1-80854211df6f');

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
(1, 'rHzQbbgkgTPepo7dsuadgH0DnTSlhWpW3DkSH7/GjO4=', '2025-06-03 11:14:10.239516', 1, '2025-05-27 10:36:32.999308', 'e5691541-1c68-49b2-8050-1c7cd6370ed8', 'QEX2LRB43ZQHP74JXVZ3I66XTRVI4EPP');

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
('08dd9d0a-76cd-478b-8a0f-49cd95207830', '2025-05-05 00:00:00.000000', '2025-05-05 00:24:24.000000', '2025-05-05 10:38:13.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d4-491e-8a4e-b52c4a014bc7', '2025-05-05 00:00:00.000000', '2025-05-05 00:32:17.000000', '2025-05-05 10:34:20.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d4-4a04-8341-7fa4efeecfb0', '2025-05-05 00:00:00.000000', '2025-05-05 00:43:47.000000', '2025-05-05 11:21:07.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d4-4a64-8b9d-081ca2492048', '2025-05-05 00:00:00.000000', '2025-05-05 00:47:09.000000', '2025-05-05 09:29:15.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d4-4aa0-8131-d5d761ec270a', '2025-05-05 00:00:00.000000', '2025-05-05 00:48:31.000000', '2025-05-05 09:25:53.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d4-4acb-8fcf-0229772c62ec', '2025-05-05 00:00:00.000000', '2025-05-05 00:59:52.000000', '2025-05-05 10:26:10.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d4-4aec-82f9-015e05d2979a', '2025-05-05 00:00:00.000000', '2025-05-05 01:02:02.000000', '2025-05-05 10:45:13.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d4-4b08-8739-f12d39c8864e', '2025-05-05 00:00:00.000000', '2025-05-05 01:08:51.000000', '2025-05-05 10:18:42.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d4-4ba2-819a-4ab2490aa7b7', '2025-05-05 00:00:00.000000', '2025-05-05 01:10:00.000000', '2025-05-05 10:52:13.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d4-4c12-82c9-16818886c514', '2025-05-05 00:00:00.000000', '2025-05-05 01:10:04.000000', '2025-05-05 04:35:07.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d4-4c3e-8e37-81c0e01ed22b', '2025-05-05 00:00:00.000000', '2025-05-05 01:10:41.000000', '2025-05-05 10:47:08.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d4-4c6b-8b3d-0c8f215144e7', '2025-05-05 00:00:00.000000', '2025-05-05 01:11:51.000000', '2025-05-05 06:53:20.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d4-4ca4-866a-247f1e0a0535', '2025-05-05 00:00:00.000000', '2025-05-05 01:12:04.000000', '2025-05-05 10:45:47.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d4-4cdb-8c92-413843a8b43a', '2025-05-05 00:00:00.000000', '2025-05-05 01:13:53.000000', '2025-05-05 10:47:42.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d4-4d0d-8ef7-3a4e43c5b261', '2025-05-05 00:00:00.000000', '2025-05-05 01:15:25.000000', '2025-05-05 11:18:05.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d4-4d42-8e34-b734921ea547', '2025-05-05 00:00:00.000000', '2025-05-05 01:15:59.000000', '2025-05-05 10:55:12.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d4-4d66-84d9-ec0e4e90a5eb', '2025-05-05 00:00:00.000000', '2025-05-05 01:16:24.000000', '2025-05-05 10:53:14.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d4-4d91-889a-1f21983bed96', '2025-05-05 00:00:00.000000', '2025-05-05 01:17:28.000000', '2025-05-05 10:52:47.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d4-4db5-8fd7-85fc7d48dbf3', '2025-05-05 00:00:00.000000', '2025-05-05 01:20:37.000000', '2025-05-05 10:27:37.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d4-4df9-87c9-c665298e3076', '2025-05-05 00:00:00.000000', '2025-05-05 01:21:28.000000', '2025-05-05 10:56:04.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d4-4e6b-8be8-5cfa928212de', '2025-05-05 00:00:00.000000', '2025-05-05 01:25:29.000000', '2025-05-05 10:38:50.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d4-4ea2-880b-d608c1f2d136', '2025-05-05 00:00:00.000000', '2025-05-05 01:35:20.000000', '2025-05-05 13:21:01.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d4-4f2e-889c-7eae7908fc91', '2025-05-05 00:00:00.000000', '2025-05-05 01:36:40.000000', '2025-05-05 12:06:40.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d4-4f57-8072-28796a828050', '2025-05-05 00:00:00.000000', '2025-05-05 01:38:11.000000', '2025-05-05 11:21:25.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d4-4fd2-8a25-871a633c5eab', '2025-05-05 00:00:00.000000', '2025-05-05 01:38:50.000000', '2025-05-05 10:54:42.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d5-4022-852b-01b4283d6201', '2025-05-05 00:00:00.000000', '2025-05-05 01:43:05.000000', '2025-05-05 11:25:59.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d5-4077-8a68-aa70824578b9', '2025-05-05 00:00:00.000000', '2025-05-05 01:45:23.000000', '2025-05-05 10:34:59.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d5-40cb-8b1f-e3970bd7874d', '2025-05-05 00:00:00.000000', '2025-05-05 01:52:10.000000', '2025-05-05 11:29:49.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d5-419c-8c37-c6220361b3cc', '2025-05-05 00:00:00.000000', '2025-05-05 01:56:08.000000', '2025-05-05 10:57:43.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d5-41e4-8b64-0024b7a9671b', '2025-05-05 00:00:00.000000', '2025-05-05 01:58:55.000000', '2025-05-05 10:46:36.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d5-421a-85cc-e175eb6b8f3f', '2025-05-05 00:00:00.000000', '2025-05-05 02:59:02.000000', '2025-05-05 11:34:16.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d5-4242-8513-f5b8b80da055', '2025-05-05 00:00:00.000000', '2025-05-05 03:44:53.000000', '2025-05-05 10:55:54.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d5-426d-841f-ae964cfa8662', '2025-05-05 00:00:00.000000', '2025-05-05 03:53:35.000000', '2025-05-05 10:21:47.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d5-428a-8ece-0da7ccd0e1c3', '2025-05-06 00:00:00.000000', '2025-05-06 00:31:43.000000', '2025-05-06 06:09:23.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d5-42aa-8514-717edb03845c', '2025-05-06 00:00:00.000000', '2025-05-06 00:40:02.000000', '2025-05-06 08:38:32.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d5-42c8-859d-b3739ecf3d1b', '2025-05-06 00:00:00.000000', '2025-05-06 00:43:37.000000', '2025-05-06 09:27:12.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d5-42e9-8c65-5248a3d8cb93', '2025-05-06 00:00:00.000000', '2025-05-06 00:48:53.000000', '2025-05-06 10:38:52.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d5-4303-8760-e77787624a43', '2025-05-06 00:00:00.000000', '2025-05-06 00:51:20.000000', '2025-05-06 10:36:09.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d5-432c-8185-dee74ebf4c46', '2025-05-06 00:00:00.000000', '2025-05-06 00:52:25.000000', '2025-05-06 08:00:04.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d5-4352-88c5-18c673a1bcb2', '2025-05-06 00:00:00.000000', '2025-05-06 00:56:12.000000', '2025-05-06 09:58:00.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d5-4375-831d-20e9461abf2b', '2025-05-06 00:00:00.000000', '2025-05-06 00:57:05.000000', '2025-05-06 10:35:27.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d5-439a-8a7f-6371ca356eb5', '2025-05-06 00:00:00.000000', '2025-05-06 00:58:13.000000', '2025-05-06 11:24:13.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d5-43bf-8ca0-0539f1bfc339', '2025-05-06 00:00:00.000000', '2025-05-06 00:59:01.000000', '2025-05-06 10:37:45.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d5-43e0-82a2-13d14872d8b6', '2025-05-06 00:00:00.000000', '2025-05-06 01:01:05.000000', '2025-05-06 10:34:25.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d5-4403-8781-a9338ba23047', '2025-05-06 00:00:00.000000', '2025-05-06 01:01:32.000000', '2025-05-06 08:22:38.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d5-4426-874a-ef52440e8ae9', '2025-05-06 00:00:00.000000', '2025-05-06 01:07:43.000000', '2025-05-06 09:41:23.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d5-4452-8440-b7b76c32549d', '2025-05-06 00:00:00.000000', '2025-05-06 01:08:15.000000', '2025-05-06 10:42:22.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d5-446e-8335-76fb92b858c3', '2025-05-06 00:00:00.000000', '2025-05-06 01:11:06.000000', '2025-05-06 10:45:37.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d5-4489-8b2d-0f6b23146a58', '2025-05-06 00:00:00.000000', '2025-05-06 01:14:37.000000', '2025-05-06 10:23:15.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d5-44e5-8b79-ecd994057039', '2025-05-06 00:00:00.000000', '2025-05-06 01:15:23.000000', '2025-05-06 11:01:12.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d5-4510-87fb-ba618640f67c', '2025-05-06 00:00:00.000000', '2025-05-06 01:16:15.000000', '2025-05-06 10:48:26.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d5-459e-87c2-c1bc0761a5d2', '2025-05-06 00:00:00.000000', '2025-05-06 01:16:59.000000', '2025-05-06 10:52:51.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d5-460a-875a-b8b89569d23b', '2025-05-06 00:00:00.000000', '2025-05-06 01:18:30.000000', '2025-05-06 10:52:11.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d5-4644-87d6-d1acfbe864c4', '2025-05-06 00:00:00.000000', '2025-05-06 01:19:20.000000', '2025-05-06 10:55:22.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d5-4672-89d3-9287b660e1de', '2025-05-06 00:00:00.000000', '2025-05-06 01:20:48.000000', '2025-05-06 10:54:54.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d5-4699-8c06-24fc7e09a3c5', '2025-05-06 00:00:00.000000', '2025-05-06 01:22:32.000000', '2025-05-06 09:57:07.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d5-46bb-8726-0ae355b63c37', '2025-05-06 00:00:00.000000', '2025-05-06 01:24:01.000000', '2025-05-06 10:49:18.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d5-46d6-8729-8a08a8ce4b90', '2025-05-06 00:00:00.000000', '2025-05-06 01:29:10.000000', '2025-05-06 11:02:07.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d5-46f1-8cd5-0dcbed1d81e5', '2025-05-06 00:00:00.000000', '2025-05-06 01:29:43.000000', '2025-05-06 11:03:50.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d5-4712-86a5-7eb9ae3d4e8f', '2025-05-06 00:00:00.000000', '2025-05-06 01:38:12.000000', '2025-05-06 07:36:39.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d5-472d-899a-260654c14d99', '2025-05-06 00:00:00.000000', '2025-05-06 01:41:31.000000', '2025-05-06 11:33:17.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d5-4749-86c3-a7412491843f', '2025-05-06 00:00:00.000000', '2025-05-06 01:42:14.000000', '2025-05-06 11:18:13.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d5-4778-8666-e96da78cb9b6', '2025-05-06 00:00:00.000000', '2025-05-06 01:48:08.000000', '2025-05-06 11:54:20.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d5-47a7-89f7-8c721f2a6231', '2025-05-06 00:00:00.000000', '2025-05-06 01:50:30.000000', '2025-05-06 11:15:28.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d5-47d6-8e05-f490bb79cedf', '2025-05-06 00:00:00.000000', '2025-05-06 01:50:40.000000', '2025-05-06 11:31:11.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d5-47f2-8e82-42f98f959d00', '2025-05-06 00:00:00.000000', '2025-05-06 02:15:48.000000', '2025-05-06 11:34:38.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d5-4811-8ec6-7a8241f62521', '2025-05-06 00:00:00.000000', '2025-05-06 03:28:43.000000', '2025-05-06 10:11:37.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d5-483c-872c-5a8afd65b2e8', '2025-05-06 00:00:00.000000', '2025-05-06 04:27:20.000000', '2025-05-06 10:06:06.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d5-485f-8eef-0c2c63dd398d', '2025-05-07 00:00:00.000000', '2025-05-07 00:24:17.000000', '2025-05-07 10:34:25.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d5-4877-8e32-38dd5d9494ee', '2025-05-07 00:00:00.000000', '2025-05-07 00:36:39.000000', '2025-05-07 10:35:14.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d5-4892-8f58-eac7e1b2a1a7', '2025-05-07 00:00:00.000000', '2025-05-07 00:41:10.000000', '2025-05-07 10:34:05.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d5-48ab-8917-491d70cbe343', '2025-05-07 00:00:00.000000', '2025-05-07 00:44:39.000000', '2025-05-07 11:11:13.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d5-48c5-8500-5d62b73ee8dc', '2025-05-07 00:00:00.000000', '2025-05-07 00:44:57.000000', '2025-05-07 10:43:52.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d5-48d7-8e8e-e4feb116e72f', '2025-05-07 00:00:00.000000', '2025-05-07 00:49:26.000000', '2025-05-07 10:33:04.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d5-48e9-86fd-a0f70193dc98', '2025-05-07 00:00:00.000000', '2025-05-07 00:52:21.000000', '2025-05-07 10:30:25.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d5-493b-8802-a5ccda0768d2', '2025-05-07 00:00:00.000000', '2025-05-07 00:53:47.000000', '2025-05-07 09:38:03.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d5-4989-8af8-4bc45b179abe', '2025-05-07 00:00:00.000000', '2025-05-07 00:54:52.000000', '2025-05-07 10:12:10.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d5-49a5-8c68-fbb278b718f3', '2025-05-07 00:00:00.000000', '2025-05-07 00:58:45.000000', '2025-05-07 10:26:56.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d5-49b9-89b9-89a69a0ec2c4', '2025-05-07 00:00:00.000000', '2025-05-07 00:59:42.000000', '2025-05-07 10:35:25.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d5-49cc-8e9a-fb38d4a11ad0', '2025-05-07 00:00:00.000000', '2025-05-07 01:00:01.000000', '2025-05-07 09:04:53.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d5-49eb-89cd-f7ae941ee093', '2025-05-07 00:00:00.000000', '2025-05-07 01:00:34.000000', '2025-05-07 10:38:53.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d5-4a13-8412-4d1ad4f97d42', '2025-05-07 00:00:00.000000', '2025-05-07 01:01:48.000000', '2025-05-07 10:01:50.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d5-4a2f-824b-51e067b88ff8', '2025-05-07 00:00:00.000000', '2025-05-07 01:02:57.000000', '2025-05-07 10:21:21.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d5-4a48-8197-3ffc2d081fbd', '2025-05-07 00:00:00.000000', '2025-05-07 01:06:27.000000', '2025-05-07 12:04:49.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d5-4a64-8739-e9f23f6ede5f', '2025-05-07 00:00:00.000000', '2025-05-07 01:07:36.000000', '2025-05-07 07:21:54.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d5-4a8c-877a-c21e36de6b36', '2025-05-07 00:00:00.000000', '2025-05-07 01:08:49.000000', '2025-05-07 10:41:01.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d5-4aaf-8f8f-a0802d312808', '2025-05-07 00:00:00.000000', '2025-05-07 01:09:21.000000', '2025-05-07 09:57:08.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d5-4ad0-8be5-ec0e179959bd', '2025-05-07 00:00:00.000000', '2025-05-07 01:10:01.000000', '2025-05-07 10:42:41.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d5-4af1-8343-0d1b93bba1a6', '2025-05-07 00:00:00.000000', '2025-05-07 01:11:10.000000', '2025-05-07 10:54:11.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d5-4b14-86b8-58fcdfb17a73', '2025-05-07 00:00:00.000000', '2025-05-07 01:13:14.000000', '2025-05-07 11:32:35.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d5-4b48-8bda-81d86243592f', '2025-05-07 00:00:00.000000', '2025-05-07 01:17:41.000000', '2025-05-07 10:52:03.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d5-4b6f-846c-4561e98d6535', '2025-05-07 00:00:00.000000', '2025-05-07 01:18:46.000000', '2025-05-07 10:55:13.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d5-4b8e-8302-87a8ed22f069', '2025-05-07 00:00:00.000000', '2025-05-07 01:20:08.000000', '2025-05-07 10:51:43.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d5-4bac-877b-e24f70ff54d3', '2025-05-07 00:00:00.000000', '2025-05-07 01:23:12.000000', '2025-05-07 10:54:44.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d5-4bd1-81c2-c80cddddfc82', '2025-05-07 00:00:00.000000', '2025-05-07 01:23:46.000000', '2025-05-07 11:28:18.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d5-4bf8-8936-4e9a69090520', '2025-05-07 00:00:00.000000', '2025-05-07 01:32:37.000000', '2025-05-07 10:16:05.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d5-4c1d-8c43-016ba586d4d6', '2025-05-07 00:00:00.000000', '2025-05-07 01:51:10.000000', '2025-05-07 11:42:15.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d5-4c40-855a-e1f7210200a3', '2025-05-07 00:00:00.000000', '2025-05-07 01:52:56.000000', '2025-05-07 11:04:03.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d5-4c5f-8a13-ae45c1a1d6c0', '2025-05-07 00:00:00.000000', '2025-05-07 01:58:45.000000', '2025-05-07 11:08:30.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d5-4c97-8015-70994a68f333', '2025-05-07 00:00:00.000000', '2025-05-07 02:27:44.000000', '2025-05-07 09:59:02.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d5-4cd1-8320-99880ea0c3a2', '2025-05-07 00:00:00.000000', '2025-05-07 02:42:27.000000', '2025-05-07 11:32:55.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d5-4d06-82c8-0750b98b2b04', '2025-05-07 00:00:00.000000', '2025-05-07 03:03:27.000000', '2025-05-07 10:13:26.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d5-4d2a-811c-3136cbbd0624', '2025-05-07 00:00:00.000000', '2025-05-07 04:24:32.000000', '2025-05-07 10:57:14.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d5-4d4e-87c8-5bb953998459', '2025-05-07 00:00:00.000000', '2025-05-07 06:21:45.000000', '2025-05-07 11:31:20.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d5-4d83-8ce9-5f7414ccb2fe', '2025-05-08 00:00:00.000000', '2025-05-08 00:26:26.000000', '2025-05-08 09:18:49.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d5-4da8-8708-218fa0e897ff', '2025-05-08 00:00:00.000000', '2025-05-08 00:29:29.000000', '2025-05-08 09:49:04.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d5-4dc9-89f3-79bb864dde36', '2025-05-08 00:00:00.000000', '2025-05-08 00:31:00.000000', '2025-05-08 10:36:17.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d5-4dfd-825c-95decea5af81', '2025-05-08 00:00:00.000000', '2025-05-08 00:41:33.000000', '2025-05-08 11:24:21.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d5-4e36-8a3a-6746f6ee1804', '2025-05-08 00:00:00.000000', '2025-05-08 00:51:30.000000', '2025-05-08 10:34:17.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d5-4e59-8878-be26c3c9f984', '2025-05-08 00:00:00.000000', '2025-05-08 00:52:26.000000', '2025-05-08 08:31:46.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d5-4e76-8916-47936f48d0eb', '2025-05-08 00:00:00.000000', '2025-05-08 00:56:16.000000', '2025-05-08 09:42:35.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d5-4e94-8e64-cbc233c7278a', '2025-05-08 00:00:00.000000', '2025-05-08 00:58:45.000000', '2025-05-08 10:38:58.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d5-4ec5-87a3-46bdefe367e0', '2025-05-08 00:00:00.000000', '2025-05-08 01:02:14.000000', '2025-05-08 11:17:42.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d5-4ef1-81b2-823bb8c6069b', '2025-05-08 00:00:00.000000', '2025-05-08 01:02:53.000000', '2025-05-08 09:00:38.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d5-4f12-8485-b8fad99ca959', '2025-05-08 00:00:00.000000', '2025-05-08 01:04:50.000000', '2025-05-08 10:46:25.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d5-4f41-8d38-7e4975f95977', '2025-05-08 00:00:00.000000', '2025-05-08 01:08:44.000000', '2025-05-08 10:14:00.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d5-4f6e-8934-8fd3dfd074f0', '2025-05-08 00:00:00.000000', '2025-05-08 01:09:15.000000', '2025-05-08 13:44:02.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d5-4f92-89b7-a5038d5701d2', '2025-05-08 00:00:00.000000', '2025-05-08 01:09:49.000000', '2025-05-08 07:38:03.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d5-4fd0-819f-874cc7ff28f7', '2025-05-08 00:00:00.000000', '2025-05-08 01:10:13.000000', '2025-05-08 11:13:46.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d6-4002-8996-0a3e7212f4db', '2025-05-08 00:00:00.000000', '2025-05-08 01:12:16.000000', '2025-05-08 10:48:18.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d6-4023-89fc-95a73509b982', '2025-05-08 00:00:00.000000', '2025-05-08 01:14:10.000000', '2025-05-08 10:49:33.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d6-403e-837d-808218b8357f', '2025-05-08 00:00:00.000000', '2025-05-08 01:16:32.000000', '2025-05-08 11:14:52.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d6-4074-8fc2-36f7f47078dc', '2025-05-08 00:00:00.000000', '2025-05-08 01:18:07.000000', '2025-05-08 10:53:10.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d6-40e5-89da-a08abde167b7', '2025-05-08 00:00:00.000000', '2025-05-08 01:21:13.000000', '2025-05-08 10:55:03.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d6-4134-8b5a-79d29bb9b084', '2025-05-08 00:00:00.000000', '2025-05-08 01:21:26.000000', '2025-05-08 11:14:09.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d6-4161-8282-6635bea45008', '2025-05-08 00:00:00.000000', '2025-05-08 01:24:22.000000', '2025-05-08 11:25:35.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d6-4183-87cb-2bdb0a3ce77a', '2025-05-08 00:00:00.000000', '2025-05-08 01:27:37.000000', '2025-05-08 11:01:16.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d6-41aa-8d35-f763e1986ffa', '2025-05-08 00:00:00.000000', '2025-05-08 01:37:09.000000', '2025-05-08 12:00:13.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d6-41d1-82ce-8e3d3faf18bc', '2025-05-08 00:00:00.000000', '2025-05-08 01:38:33.000000', '2025-05-08 10:31:40.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d6-41f1-80f9-94b5b6e4e727', '2025-05-08 00:00:00.000000', '2025-05-08 01:42:56.000000', '2025-05-08 11:21:50.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d6-420c-8269-21da8e0e5302', '2025-05-08 00:00:00.000000', '2025-05-08 01:50:39.000000', '2025-05-08 07:35:03.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d6-422c-8bbf-983000781daa', '2025-05-08 00:00:00.000000', '2025-05-08 01:51:20.000000', '2025-05-08 10:17:09.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d6-424d-8027-a4db7ba0548c', '2025-05-08 00:00:00.000000', '2025-05-08 01:54:28.000000', '2025-05-08 11:01:48.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d6-4271-8f37-fc0c682b91f8', '2025-05-08 00:00:00.000000', '2025-05-08 01:58:06.000000', '2025-05-08 11:31:37.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d6-4292-8825-1f14e73cd5a5', '2025-05-08 00:00:00.000000', '2025-05-08 02:04:17.000000', '2025-05-08 11:35:33.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d6-42b7-8bed-acce13c81d88', '2025-05-08 00:00:00.000000', '2025-05-08 02:38:57.000000', '2025-05-08 10:08:29.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d6-42d8-825e-fafabe331d78', '2025-05-08 00:00:00.000000', '2025-05-08 03:12:54.000000', '2025-05-08 11:35:46.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d6-42fd-8d8b-c2c7c37c7fcf', '2025-05-08 00:00:00.000000', '2025-05-08 03:58:42.000000', '2025-05-08 10:32:28.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d6-431c-8e87-fdf84eed6f8a', '2025-05-08 00:00:00.000000', '2025-05-08 04:07:52.000000', '2025-05-08 10:22:56.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d6-4340-8a60-9f7939b70ded', '2025-05-09 00:00:00.000000', '2025-05-09 00:25:37.000000', '2025-05-09 09:14:28.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d6-435b-84f8-51429207851a', '2025-05-09 00:00:00.000000', '2025-05-09 00:27:43.000000', '2025-05-09 10:46:44.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d6-4385-87a0-cc8e312ec635', '2025-05-09 00:00:00.000000', '2025-05-09 00:48:39.000000', '2025-05-09 08:25:07.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d6-43bc-83e6-09a43c234633', '2025-05-09 00:00:00.000000', '2025-05-09 00:51:11.000000', '2025-05-09 09:01:41.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d6-4404-837e-808546649953', '2025-05-09 00:00:00.000000', '2025-05-09 00:52:29.000000', '2025-05-09 08:17:30.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d6-442a-8583-cbbd652f082d', '2025-05-09 00:00:00.000000', '2025-05-09 00:55:20.000000', '2025-05-09 09:06:46.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d6-444f-84ca-55f939a12182', '2025-05-09 00:00:00.000000', '2025-05-09 00:55:47.000000', '2025-05-09 23:59:48.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d6-4483-8964-ca713db2b11d', '2025-05-09 00:00:00.000000', '2025-05-09 01:00:31.000000', '2025-05-09 08:35:06.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d6-44ac-84e6-4a32dffc4d0c', '2025-05-09 00:00:00.000000', '2025-05-09 01:01:20.000000', '2025-05-09 10:33:49.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d6-44d2-851d-5861ed924418', '2025-05-09 00:00:00.000000', '2025-05-09 01:01:29.000000', '2025-05-09 07:51:30.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d6-44f6-85f2-59e50de82175', '2025-05-09 00:00:00.000000', '2025-05-09 01:05:37.000000', '2025-05-09 08:19:17.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d6-451a-833b-037cd5a6b41b', '2025-05-09 00:00:00.000000', '2025-05-09 01:06:56.000000', '2025-05-09 09:41:55.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d6-453a-89cf-bb7c2e047ae8', '2025-05-09 00:00:00.000000', '2025-05-09 01:07:41.000000', '2025-05-09 10:26:02.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d6-4562-8085-3c2db65d0a9c', '2025-05-09 00:00:00.000000', '2025-05-09 01:08:38.000000', '2025-05-09 06:27:34.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d6-457f-8087-03ab1032cbc3', '2025-05-09 00:00:00.000000', '2025-05-09 01:09:12.000000', '2025-05-09 05:13:04.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d6-459c-8c56-4875ae02d658', '2025-05-09 00:00:00.000000', '2025-05-09 01:09:52.000000', '2025-05-09 08:55:31.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d6-45b6-87b2-44c2b0b187f2', '2025-05-09 00:00:00.000000', '2025-05-09 01:11:39.000000', '2025-05-09 10:54:28.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d6-45d5-802e-9f6ccf13a4e8', '2025-05-09 00:00:00.000000', '2025-05-09 01:16:41.000000', '2025-05-09 10:48:18.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d6-45ed-8582-80a6908b8960', '2025-05-09 00:00:00.000000', '2025-05-09 01:17:46.000000', '2025-05-09 07:52:01.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d6-4605-8b42-aa681b2cc778', '2025-05-09 00:00:00.000000', '2025-05-09 01:18:05.000000', '2025-05-09 10:34:19.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d6-4625-81de-44e64d03aef0', '2025-05-09 00:00:00.000000', '2025-05-09 01:19:05.000000', '2025-05-09 11:24:46.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d6-464e-840b-34325d748111', '2025-05-09 00:00:00.000000', '2025-05-09 01:19:47.000000', '2025-05-09 10:50:58.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d6-4674-804f-0bbd19ff7ba9', '2025-05-09 00:00:00.000000', '2025-05-09 01:19:58.000000', '2025-05-09 10:53:53.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d6-4699-8d42-a8936c035ae7', '2025-05-09 00:00:00.000000', '2025-05-09 01:20:07.000000', '2025-05-09 10:51:53.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d6-46c2-800b-c718b6c22e64', '2025-05-09 00:00:00.000000', '2025-05-09 01:23:39.000000', '2025-05-09 11:01:18.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d6-46eb-8ba2-5fccfb137830', '2025-05-09 00:00:00.000000', '2025-05-09 01:36:07.000000', '2025-05-09 11:21:46.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d6-470e-834f-7cac6103b184', '2025-05-09 00:00:00.000000', '2025-05-09 01:42:46.000000', '2025-05-09 11:20:09.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d6-4734-8b97-392510a1d0c6', '2025-05-09 00:00:00.000000', '2025-05-09 01:43:44.000000', '2025-05-09 06:09:24.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d6-4758-8797-8c7f6c8eacb4', '2025-05-09 00:00:00.000000', '2025-05-09 01:45:12.000000', '2025-05-09 08:36:24.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d6-4781-8815-7fba02e6cc45', '2025-05-09 00:00:00.000000', '2025-05-09 01:50:59.000000', '2025-05-09 08:56:54.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d6-47ad-87a3-f2fb50396897', '2025-05-09 00:00:00.000000', '2025-05-09 01:54:41.000000', '2025-05-09 09:16:32.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d6-47c8-8292-6f5d83459902', '2025-05-09 00:00:00.000000', '2025-05-09 01:55:42.000000', '2025-05-09 07:38:21.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d6-47e9-8648-9d5f53eedc62', '2025-05-09 00:00:00.000000', '2025-05-09 02:00:15.000000', '2025-05-09 12:09:24.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d6-480d-8435-03a89cfe3934', '2025-05-09 00:00:00.000000', '2025-05-09 02:33:20.000000', '2025-05-09 11:37:03.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d6-4839-8449-d6ef38d61dd2', '2025-05-09 00:00:00.000000', '2025-05-09 06:23:21.000000', '2025-05-09 11:15:04.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d6-4856-890a-54be7d542d56', '2025-05-09 00:00:00.000000', '2025-05-09 06:58:50.000000', '2025-05-09 11:02:06.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d6-4873-829a-5e61ae3f647e', '2025-05-10 00:00:00.000000', '2025-05-10 00:00:16.000000', '2025-05-10 00:55:00.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d6-4896-89ee-471c86be6865', '2025-05-10 00:00:00.000000', '2025-05-10 01:08:24.000000', '2025-05-10 10:16:28.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d6-48c1-8f1b-10fae2d0b937', '2025-05-12 00:00:00.000000', '2025-05-12 00:23:38.000000', '2025-05-12 10:37:17.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d6-48e8-8ce4-3f68da0aa00c', '2025-05-12 00:00:00.000000', '2025-05-12 00:27:06.000000', '2025-05-12 10:35:01.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d6-490b-84c4-7d66397f31f8', '2025-05-12 00:00:00.000000', '2025-05-12 00:28:00.000000', '2025-05-12 07:52:42.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d6-495a-8b61-d5dae5cd9ce8', '2025-05-12 00:00:00.000000', '2025-05-12 00:40:05.000000', '2025-05-12 10:32:38.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d6-49a3-8844-3a57607e5746', '2025-05-12 00:00:00.000000', '2025-05-12 00:40:27.000000', '2025-05-12 09:00:42.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d6-49fc-89c7-81a5cf8e320c', '2025-05-12 00:00:00.000000', '2025-05-12 00:47:04.000000', '2025-05-12 09:34:57.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d6-4a38-80ca-bb1890e8c12e', '2025-05-12 00:00:00.000000', '2025-05-12 00:51:11.000000', '2025-05-12 10:41:12.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d6-4a57-8fdd-da9d580fe6d2', '2025-05-12 00:00:00.000000', '2025-05-12 00:51:29.000000', '2025-05-12 10:34:44.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d6-4a76-89b9-b316d52b8b07', '2025-05-12 00:00:00.000000', '2025-05-12 00:56:20.000000', '2025-05-12 10:35:34.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d6-4a9c-82e8-2a4363727ddc', '2025-05-12 00:00:00.000000', '2025-05-12 01:06:36.000000', '2025-05-12 10:52:19.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d6-4aba-810d-bd9e84cc5862', '2025-05-12 00:00:00.000000', '2025-05-12 01:07:26.000000', '2025-05-12 10:46:22.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d6-4ad7-842d-7d70c53307bb', '2025-05-12 00:00:00.000000', '2025-05-12 01:10:05.000000', '2025-05-12 10:28:56.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d6-4af0-85d0-fdb0e324f0a5', '2025-05-12 00:00:00.000000', '2025-05-12 01:11:10.000000', '2025-05-12 10:43:16.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d6-4b10-81bc-621da4bc7fd6', '2025-05-12 00:00:00.000000', '2025-05-12 01:11:28.000000', '2025-05-12 10:46:44.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d6-4b21-8f7e-99051041c654', '2025-05-12 00:00:00.000000', '2025-05-12 01:12:47.000000', '2025-05-12 10:45:25.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d6-4b30-88a6-45c4bc3396c9', '2025-05-12 00:00:00.000000', '2025-05-12 01:16:32.000000', '2025-05-12 11:04:10.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d6-4b4b-8764-b6cbd76052db', '2025-05-12 00:00:00.000000', '2025-05-12 01:17:58.000000', '2025-05-12 10:23:08.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d6-4b66-8bc5-b675ed6bc43d', '2025-05-12 00:00:00.000000', '2025-05-12 01:20:32.000000', '2025-05-12 10:50:09.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d6-4b80-889b-c4b972522f00', '2025-05-12 00:00:00.000000', '2025-05-12 01:22:21.000000', '2025-05-12 10:54:16.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d6-4b9c-8e62-9c29d0cb5727', '2025-05-12 00:00:00.000000', '2025-05-12 01:24:27.000000', '2025-05-12 10:34:40.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d6-4bb6-81b8-6d8b45c575a8', '2025-05-12 00:00:00.000000', '2025-05-12 01:29:11.000000', '2025-05-12 11:18:39.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d6-4bee-8a44-f60e972446ce', '2025-05-12 00:00:00.000000', '2025-05-12 01:33:36.000000', '2025-05-12 11:12:09.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d6-4c11-8188-873838412b46', '2025-05-12 00:00:00.000000', '2025-05-12 01:36:44.000000', '2025-05-12 11:13:35.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d6-4c2d-8e34-0a4e83432343', '2025-05-12 00:00:00.000000', '2025-05-12 01:43:07.000000', '2025-05-12 11:18:33.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d6-4c51-8cb0-f642be69c162', '2025-05-12 00:00:00.000000', '2025-05-12 01:44:57.000000', '2025-05-12 10:03:09.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d6-4c7e-8c3f-1fbc8c232691', '2025-05-12 00:00:00.000000', '2025-05-12 01:48:44.000000', '2025-05-12 11:41:16.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d6-4ca4-8cb0-4be6a621d758', '2025-05-12 00:00:00.000000', '2025-05-12 01:55:12.000000', '2025-05-12 11:08:37.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d6-4cc3-8742-4f1537c1cfa9', '2025-05-12 00:00:00.000000', '2025-05-12 02:03:39.000000', '2025-05-12 10:11:02.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d6-4cf5-8196-c724484c8dbc', '2025-05-12 00:00:00.000000', '2025-05-12 02:05:20.000000', '2025-05-12 11:33:02.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d6-4d32-8dd3-123a253e2b7f', '2025-05-12 00:00:00.000000', '2025-05-12 02:09:26.000000', '2025-05-12 10:05:27.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d6-4d46-83e0-c0bb409229e8', '2025-05-12 00:00:00.000000', '2025-05-12 02:13:33.000000', '2025-05-12 11:31:38.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d6-4d55-8bf5-2888aa3569c8', '2025-05-12 00:00:00.000000', '2025-05-12 02:23:43.000000', '2025-05-12 10:55:26.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d6-4d7a-8432-f2b3d654bf4e', '2025-05-12 00:00:00.000000', '2025-05-12 03:25:46.000000', '2025-05-12 10:33:59.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d7-4070-82eb-4ad614da57e0', '2025-05-12 00:00:00.000000', '2025-05-12 05:36:48.000000', '2025-05-12 10:20:52.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d7-411d-88fd-40597c2589e2', '2025-05-12 00:00:00.000000', '2025-05-12 06:27:25.000000', '2025-05-12 10:19:04.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d7-4149-8c8f-72e28177a554', '2025-05-13 00:00:00.000000', '2025-05-13 00:16:15.000000', '2025-05-13 10:38:47.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d7-4169-8d19-264b1249279c', '2025-05-13 00:00:00.000000', '2025-05-13 00:26:53.000000', '2025-05-13 02:37:30.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d7-4195-841b-4c9ec4746806', '2025-05-13 00:00:00.000000', '2025-05-13 00:30:26.000000', '2025-05-13 09:49:57.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d7-41b7-83c7-7e6c05d7beea', '2025-05-13 00:00:00.000000', '2025-05-13 00:41:25.000000', '2025-05-13 10:34:23.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d7-41d2-838b-e76633a7f58d', '2025-05-13 00:00:00.000000', '2025-05-13 00:43:26.000000', '2025-05-13 09:21:17.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d7-41ef-8f0b-f068c0934223', '2025-05-13 00:00:00.000000', '2025-05-13 00:49:23.000000', '2025-05-13 10:33:36.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d7-4208-860c-e58967d01f44', '2025-05-13 00:00:00.000000', '2025-05-13 00:50:26.000000', '2025-05-13 10:48:25.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d7-4227-8e20-70db2105de1d', '2025-05-13 00:00:00.000000', '2025-05-13 00:55:32.000000', '2025-05-13 10:17:55.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d7-4248-8689-e457fe0435e9', '2025-05-13 00:00:00.000000', '2025-05-13 00:55:48.000000', '2025-05-13 10:37:32.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d7-427e-8d91-d9538a726ecd', '2025-05-13 00:00:00.000000', '2025-05-13 00:58:34.000000', '2025-05-13 10:37:52.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d7-42a6-88e4-84d7150e4efb', '2025-05-13 00:00:00.000000', '2025-05-13 01:02:15.000000', '2025-05-13 09:58:14.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d7-42ce-8ffe-81024f82a6ab', '2025-05-13 00:00:00.000000', '2025-05-13 01:03:41.000000', '2025-05-13 10:57:08.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d7-42f6-8312-764d32f6ce14', '2025-05-13 00:00:00.000000', '2025-05-13 01:04:16.000000', '2025-05-13 05:50:53.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d7-431a-8048-76a7ed4a0840', '2025-05-13 00:00:00.000000', '2025-05-13 01:06:42.000000', '2025-05-13 08:20:21.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d7-435c-8c38-e8fbd977c99b', '2025-05-13 00:00:00.000000', '2025-05-13 01:08:59.000000', '2025-05-13 10:53:35.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d7-43fe-8841-48b8e608120a', '2025-05-13 00:00:00.000000', '2025-05-13 01:11:06.000000', '2025-05-13 10:43:14.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d7-4453-8b49-81e74ad21400', '2025-05-13 00:00:00.000000', '2025-05-13 01:12:44.000000', '2025-05-13 11:20:23.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d7-44b6-836c-9b90165fd863', '2025-05-13 00:00:00.000000', '2025-05-13 01:15:29.000000', '2025-05-13 10:13:34.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d7-44e8-828a-7fad4d75b9bc', '2025-05-13 00:00:00.000000', '2025-05-13 01:16:13.000000', '2025-05-13 10:25:38.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d7-455a-8e2b-606928ffacb2', '2025-05-13 00:00:00.000000', '2025-05-13 01:16:45.000000', '2025-05-13 10:52:17.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d7-45a6-81d9-0537f0c26ec6', '2025-05-13 00:00:00.000000', '2025-05-13 01:16:53.000000', '2025-05-13 10:48:58.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d7-45cf-82bd-00c5638452fd', '2025-05-13 00:00:00.000000', '2025-05-13 01:22:13.000000', '2025-05-13 11:15:05.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d7-45f0-8c49-061db361e004', '2025-05-13 00:00:00.000000', '2025-05-13 01:23:09.000000', '2025-05-13 10:41:05.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d7-460e-89a0-b9014f9f2289', '2025-05-13 00:00:00.000000', '2025-05-13 01:35:19.000000', '2025-05-13 09:27:09.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d7-4635-80f7-c363d40ba0c5', '2025-05-13 00:00:00.000000', '2025-05-13 01:38:45.000000', '2025-05-13 11:38:21.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d7-4656-8792-5c4ff62b09eb', '2025-05-13 00:00:00.000000', '2025-05-13 01:49:00.000000', '2025-05-13 08:26:48.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d7-467a-861b-ac8c6fb4ccff', '2025-05-13 00:00:00.000000', '2025-05-13 01:50:19.000000', '2025-05-13 11:30:14.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d7-46b4-842b-2dcd66018997', '2025-05-13 00:00:00.000000', '2025-05-13 01:51:59.000000', '2025-05-13 11:25:54.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d7-46d5-8007-41aa0afb45be', '2025-05-13 00:00:00.000000', '2025-05-13 01:52:33.000000', '2025-05-13 10:31:00.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d7-46f6-806e-b5dbb3ca958c', '2025-05-13 00:00:00.000000', '2025-05-13 01:55:08.000000', '2025-05-13 09:35:24.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d7-470f-82af-e34738cd1fb7', '2025-05-13 00:00:00.000000', '2025-05-13 01:56:14.000000', '2025-05-13 11:04:39.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d7-472c-8c65-8296559d08b8', '2025-05-13 00:00:00.000000', '2025-05-13 01:58:35.000000', '2025-05-13 11:32:02.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d7-4752-8ca4-7bdc6773d405', '2025-05-13 00:00:00.000000', '2025-05-13 02:05:10.000000', '2025-05-13 11:37:42.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d7-4778-81ce-b4a3b9f44080', '2025-05-13 00:00:00.000000', '2025-05-13 03:15:08.000000', '2025-05-13 06:07:02.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d7-4794-8cc1-6e3999e984c7', '2025-05-13 00:00:00.000000', '2025-05-13 05:38:33.000000', '2025-05-13 08:24:33.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d7-47d6-8249-552d7f74d72d', '2025-05-14 00:00:00.000000', '2025-05-14 00:16:12.000000', '2025-05-14 10:32:17.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d7-4804-8334-b88267b5c5e7', '2025-05-14 00:00:00.000000', '2025-05-14 00:27:02.000000', '2025-05-14 10:34:49.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d7-482c-88fe-c42d69b56210', '2025-05-14 00:00:00.000000', '2025-05-14 00:39:53.000000', '2025-05-14 10:34:02.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d7-4852-8042-6ba36694ba47', '2025-05-14 00:00:00.000000', '2025-05-14 00:46:06.000000', '2025-05-14 10:28:52.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d7-487d-8aa8-cc6a18113652', '2025-05-14 00:00:00.000000', '2025-05-14 00:48:10.000000', '2025-05-14 09:28:39.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d7-48b2-8608-4732d09fb7f3', '2025-05-14 00:00:00.000000', '2025-05-14 00:51:10.000000', '2025-05-14 10:33:32.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d7-48e3-83c8-f9490472e75c', '2025-05-14 00:00:00.000000', '2025-05-14 00:53:33.000000', '2025-05-14 10:31:47.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d7-4905-883b-16842aaf4b14', '2025-05-14 00:00:00.000000', '2025-05-14 00:54:04.000000', '2025-05-14 09:42:27.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d7-4927-8ff0-44732aa583c0', '2025-05-14 00:00:00.000000', '2025-05-14 00:54:29.000000', '2025-05-14 08:59:10.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d7-494e-8e2e-ec0b4ea492e7', '2025-05-14 00:00:00.000000', '2025-05-14 01:01:08.000000', '2025-05-14 10:45:29.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d7-4972-8ae5-a8b3675104d3', '2025-05-14 00:00:00.000000', '2025-05-14 01:04:12.000000', '2025-05-14 10:37:41.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d7-499b-892c-1c70eb7e656e', '2025-05-14 00:00:00.000000', '2025-05-14 01:04:41.000000', '2025-05-14 08:52:55.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d7-49b8-81cd-537a6c568b2d', '2025-05-14 00:00:00.000000', '2025-05-14 01:07:22.000000', '2025-05-14 10:54:41.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d7-49e0-8eed-4577832367ab', '2025-05-14 00:00:00.000000', '2025-05-14 01:08:07.000000', '2025-05-14 10:48:51.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d7-4a01-843b-b25137dac0ca', '2025-05-14 00:00:00.000000', '2025-05-14 01:09:13.000000', '2025-05-14 10:03:19.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d7-4a24-8142-9480358aafb2', '2025-05-14 00:00:00.000000', '2025-05-14 01:10:45.000000', '2025-05-14 10:46:35.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d7-4a4b-84b9-bd28500d62f3', '2025-05-14 00:00:00.000000', '2025-05-14 01:10:59.000000', '2025-05-14 09:21:15.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d7-4a71-81a7-f59d18ab64a7', '2025-05-14 00:00:00.000000', '2025-05-14 01:12:35.000000', '2025-05-14 08:30:24.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d7-4a8a-8d20-e94c49defb30', '2025-05-14 00:00:00.000000', '2025-05-14 01:12:49.000000', '2025-05-14 11:09:53.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d7-4aa6-8175-5f2618a3a6f5', '2025-05-14 00:00:00.000000', '2025-05-14 01:13:54.000000', '2025-05-14 10:45:55.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d7-4ace-861d-ec0f3a51f003', '2025-05-14 00:00:00.000000', '2025-05-14 01:14:50.000000', '2025-05-14 10:49:18.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d7-4af0-88b1-ed1c7000d4e1', '2025-05-14 00:00:00.000000', '2025-05-14 01:15:17.000000', '2025-05-14 10:50:49.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d7-4b13-875a-fc6c70f1e5f1', '2025-05-14 00:00:00.000000', '2025-05-14 01:17:41.000000', '2025-05-14 10:32:35.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d7-4b38-8136-0ddca89f0805', '2025-05-14 00:00:00.000000', '2025-05-14 01:18:25.000000', '2025-05-14 10:16:13.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d7-4b5f-877f-de0d8224eaef', '2025-05-14 00:00:00.000000', '2025-05-14 01:24:26.000000', '2025-05-14 11:06:08.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d7-4b7e-8289-b84fe3b9e22f', '2025-05-14 00:00:00.000000', '2025-05-14 01:44:09.000000', '2025-05-14 11:21:34.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d7-4ba1-863c-46c31076e3e1', '2025-05-14 00:00:00.000000', '2025-05-14 01:45:42.000000', '2025-05-14 10:56:08.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d7-4bc5-8143-22e29f4f5da6', '2025-05-14 00:00:00.000000', '2025-05-14 01:55:16.000000', '2025-05-14 10:54:59.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d7-4bef-8218-b05b0cc90412', '2025-05-14 00:00:00.000000', '2025-05-14 01:58:24.000000', '2025-05-14 11:31:32.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d7-4c09-8db1-cf5fbba815d2', '2025-05-14 00:00:00.000000', '2025-05-14 02:00:40.000000', '2025-05-14 12:08:44.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d7-4c6f-857b-eed8885f9dcd', '2025-05-14 00:00:00.000000', '2025-05-14 02:06:39.000000', '2025-05-14 11:09:53.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d7-4cd9-84a4-7edc32eb83a0', '2025-05-14 00:00:00.000000', '2025-05-14 02:07:12.000000', '2025-05-14 11:34:09.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d7-4d08-8476-602dcc070d37', '2025-05-14 00:00:00.000000', '2025-05-14 03:21:55.000000', '2025-05-14 10:43:26.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d7-4d30-820c-61a1ed9e80e2', '2025-05-14 00:00:00.000000', '2025-05-14 03:30:29.000000', '2025-05-14 11:42:50.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d7-4d67-8e36-4f7d6b2ac5fe', '2025-05-14 00:00:00.000000', '2025-05-14 04:17:40.000000', '2025-05-14 05:05:13.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d7-4da7-845f-b707efaa119d', '2025-05-15 00:00:00.000000', '2025-05-15 00:05:09.000000', '2025-05-15 09:08:37.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613');
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd9d0a-76d7-4dcb-87f0-b9542ad495d8', '2025-05-15 00:00:00.000000', '2025-05-15 00:21:05.000000', '2025-05-15 10:32:47.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d7-4dea-8d5d-e510521b76a1', '2025-05-15 00:00:00.000000', '2025-05-15 00:30:27.000000', '2025-05-15 06:33:11.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d7-4e06-83ac-19315e0a5f66', '2025-05-15 00:00:00.000000', '2025-05-15 00:30:52.000000', '2025-05-15 10:31:15.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d7-4e1c-8db2-936a60071e71', '2025-05-15 00:00:00.000000', '2025-05-15 00:33:08.000000', '2025-05-15 10:57:46.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d7-4e30-8f67-d772cc38ee62', '2025-05-15 00:00:00.000000', '2025-05-15 00:46:21.000000', '2025-05-15 10:35:07.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d7-4e42-8e20-5cfe9c1b0f14', '2025-05-15 00:00:00.000000', '2025-05-15 00:46:59.000000', '2025-05-15 10:38:34.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d7-4e55-8234-29ae38426a2f', '2025-05-15 00:00:00.000000', '2025-05-15 00:51:21.000000', '2025-05-15 10:35:28.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d7-4e75-8dc9-130a9a83b7bb', '2025-05-15 00:00:00.000000', '2025-05-15 00:52:44.000000', '2025-05-15 10:31:41.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d7-4e98-8270-a36dda0d8f73', '2025-05-15 00:00:00.000000', '2025-05-15 00:56:09.000000', '2025-05-15 05:04:17.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d7-4ebe-81ea-77f9840d3937', '2025-05-15 00:00:00.000000', '2025-05-15 00:58:03.000000', '2025-05-15 10:43:31.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d7-4ee5-801d-f3f7a869db8f', '2025-05-15 00:00:00.000000', '2025-05-15 00:59:55.000000', '2025-05-15 05:46:57.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d7-4f0e-83a9-ebb80f6723f1', '2025-05-15 00:00:00.000000', '2025-05-15 01:00:14.000000', '2025-05-15 10:33:47.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d7-4f43-873a-afccd09e007e', '2025-05-15 00:00:00.000000', '2025-05-15 01:04:34.000000', '2025-05-15 10:37:14.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d7-4f63-8044-f74fa3d9af20', '2025-05-15 00:00:00.000000', '2025-05-15 01:07:04.000000', '2025-05-15 10:51:08.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d7-4fa8-8bd4-d01812d37116', '2025-05-15 00:00:00.000000', '2025-05-15 01:13:33.000000', '2025-05-15 10:47:32.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d8-4026-845b-96b25a172f07', '2025-05-15 00:00:00.000000', '2025-05-15 01:13:45.000000', '2025-05-15 10:51:26.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d8-4056-8a98-2fc775565903', '2025-05-15 00:00:00.000000', '2025-05-15 01:14:18.000000', '2025-05-15 10:52:47.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d8-4076-8f5a-7dcd725f34da', '2025-05-15 00:00:00.000000', '2025-05-15 01:15:00.000000', '2025-05-15 10:21:17.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d8-409b-8ddf-8139162a9ea7', '2025-05-15 00:00:00.000000', '2025-05-15 01:15:11.000000', '2025-05-15 11:10:39.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d8-40c3-81f4-cf36a5fa10db', '2025-05-15 00:00:00.000000', '2025-05-15 01:16:26.000000', '2025-05-15 10:50:36.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d8-40e3-8735-3bace8d9e622', '2025-05-15 00:00:00.000000', '2025-05-15 01:21:47.000000', '2025-05-15 09:31:39.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d8-40ff-8e95-56a41ed4e94a', '2025-05-15 00:00:00.000000', '2025-05-15 01:22:21.000000', '2025-05-15 10:54:35.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d8-411d-89c6-aabcf8102c8f', '2025-05-15 00:00:00.000000', '2025-05-15 01:22:56.000000', '2025-05-15 10:56:36.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d8-416b-8096-bf5d585186d0', '2025-05-15 00:00:00.000000', '2025-05-15 01:24:28.000000', '2025-05-15 11:12:37.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d8-4198-8464-70141db94316', '2025-05-15 00:00:00.000000', '2025-05-15 01:27:02.000000', '2025-05-15 11:04:43.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d8-41dd-8cc8-10590757b89e', '2025-05-15 00:00:00.000000', '2025-05-15 01:32:24.000000', '2025-05-15 10:36:34.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d8-4218-8cfc-41114a3c2a40', '2025-05-15 00:00:00.000000', '2025-05-15 01:38:37.000000', '2025-05-15 12:18:24.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d8-4266-8f3b-875033513781', '2025-05-15 00:00:00.000000', '2025-05-15 01:44:10.000000', '2025-05-15 11:17:57.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d8-4288-85f4-70fda7c31a70', '2025-05-15 00:00:00.000000', '2025-05-15 01:46:16.000000', '2025-05-15 10:55:58.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d8-42a5-85c1-136515cce81b', '2025-05-15 00:00:00.000000', '2025-05-15 01:53:23.000000', '2025-05-15 11:32:54.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d8-42fd-89df-bdbb6a6c2d6a', '2025-05-15 00:00:00.000000', '2025-05-15 01:54:37.000000', '2025-05-15 11:52:51.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d8-4328-88e0-55f6e97f1dce', '2025-05-15 00:00:00.000000', '2025-05-15 02:26:29.000000', '2025-05-15 11:31:31.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d8-4364-8699-3d601ece011f', '2025-05-15 00:00:00.000000', '2025-05-15 02:39:43.000000', '2025-05-15 08:42:03.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d8-438b-8ae5-80c0df4156f9', '2025-05-16 00:00:00.000000', '2025-05-16 00:13:25.000000', '2025-05-16 10:32:08.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d8-43ae-8daf-ad9052f285e5', '2025-05-16 00:00:00.000000', '2025-05-16 00:19:06.000000', '2025-05-16 10:32:39.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d8-43d2-8058-bbf822411f7f', '2025-05-16 00:00:00.000000', '2025-05-16 00:41:38.000000', '2025-05-16 07:47:02.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d8-43fd-8a79-e6c8f8b4392e', '2025-05-16 00:00:00.000000', '2025-05-16 00:43:12.000000', '2025-05-16 10:37:59.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d8-4426-8351-71321818856c', '2025-05-16 00:00:00.000000', '2025-05-16 00:43:32.000000', '2025-05-16 10:31:17.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d8-444a-8fd9-71761ab62f23', '2025-05-16 00:00:00.000000', '2025-05-16 00:43:47.000000', '2025-05-16 09:07:14.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d8-4469-80cd-0c7dff12ed78', '2025-05-16 00:00:00.000000', '2025-05-16 00:49:51.000000', '2025-05-16 05:35:30.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d8-4491-8b51-05d77d4bb415', '2025-05-16 00:00:00.000000', '2025-05-16 00:51:45.000000', '2025-05-16 10:31:48.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d8-44b7-835a-23d5e79b2e28', '2025-05-16 00:00:00.000000', '2025-05-16 00:53:52.000000', '2025-05-16 08:39:54.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d8-44da-8dac-d3e03740c493', '2025-05-16 00:00:00.000000', '2025-05-16 00:54:34.000000', '2025-05-16 07:54:22.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d8-44ff-8d6f-5e1db21239cd', '2025-05-16 00:00:00.000000', '2025-05-16 00:56:47.000000', '2025-05-16 10:32:48.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d8-452c-8748-c35668b25df0', '2025-05-16 00:00:00.000000', '2025-05-16 00:58:55.000000', '2025-05-16 10:52:14.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d8-454f-8061-19088a5d9f79', '2025-05-16 00:00:00.000000', '2025-05-16 00:59:42.000000', '2025-05-16 10:39:04.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d8-457d-8fbe-aad40bbfcc6a', '2025-05-16 00:00:00.000000', '2025-05-16 01:01:22.000000', '2025-05-16 10:35:57.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d8-45a0-8958-8989af59e2b5', '2025-05-16 00:00:00.000000', '2025-05-16 01:02:09.000000', '2025-05-16 09:22:48.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d8-45ce-8ebd-71af696db89c', '2025-05-16 00:00:00.000000', '2025-05-16 01:03:26.000000', '2025-05-16 10:36:22.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d8-45f7-8c8e-ffba6f7135ae', '2025-05-16 00:00:00.000000', '2025-05-16 01:04:19.000000', '2025-05-16 10:29:26.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0a-76d8-4619-8db9-1cbcb1c9c6e8', '2025-05-16 00:00:00.000000', '2025-05-16 01:11:45.000000', '2025-05-16 10:46:53.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d8-4638-82a3-fe9c589c93f0', '2025-05-16 00:00:00.000000', '2025-05-16 01:12:15.000000', '2025-05-16 10:33:06.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d8-466d-8f51-e3c0c4b2e56f', '2025-05-16 00:00:00.000000', '2025-05-16 01:13:11.000000', '2025-05-16 11:02:35.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d8-4693-8728-0ac67f2bcfd4', '2025-05-16 00:00:00.000000', '2025-05-16 01:13:51.000000', '2025-05-16 10:45:34.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d8-46b8-8926-ee639c864485', '2025-05-16 00:00:00.000000', '2025-05-16 01:22:32.000000', '2025-05-16 10:55:22.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d8-46e9-8ea4-0c6d4cb026d7', '2025-05-16 00:00:00.000000', '2025-05-16 01:23:16.000000', '2025-05-16 11:00:13.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d8-472a-898f-dcc0f5f8f77b', '2025-05-16 00:00:00.000000', '2025-05-16 01:25:11.000000', '2025-05-16 11:05:44.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d8-4790-83a2-524582b48a2a', '2025-05-16 00:00:00.000000', '2025-05-16 01:34:07.000000', '2025-05-16 11:07:29.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d8-47ba-8fab-b5f33f340ea7', '2025-05-16 00:00:00.000000', '2025-05-16 01:40:46.000000', '2025-05-16 11:33:33.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d8-47d8-8391-f6a68ec5faad', '2025-05-16 00:00:00.000000', '2025-05-16 01:43:25.000000', '2025-05-16 10:20:24.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d8-47f3-844c-a7f57b247af8', '2025-05-16 00:00:00.000000', '2025-05-16 01:48:32.000000', '2025-05-16 12:14:45.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d8-4821-85cb-c2f1ad5caa92', '2025-05-16 00:00:00.000000', '2025-05-16 01:49:22.000000', '2025-05-16 11:28:02.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d8-4841-8e0a-1b4c94894aac', '2025-05-16 00:00:00.000000', '2025-05-16 01:55:45.000000', '2025-05-16 10:47:23.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d8-485a-8375-17d8b4d5eb8d', '2025-05-16 00:00:00.000000', '2025-05-16 01:58:59.000000', '2025-05-16 11:30:00.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d8-4873-8547-9b9bdb8f8bfa', '2025-05-16 00:00:00.000000', '2025-05-16 02:04:17.000000', '2025-05-16 08:41:57.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d8-48ba-8fbf-222a1cbc5c1f', '2025-05-17 00:00:00.000000', '2025-05-17 04:42:22.000000', NULL, 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d8-493e-8017-2e1ca2d93724', '2025-05-17 00:00:00.000000', '2025-05-17 04:44:33.000000', '2025-05-17 04:50:15.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d8-497d-8d30-a8e455ad6bc3', '2025-05-17 00:00:00.000000', '2025-05-17 04:58:58.000000', '2025-05-17 05:27:47.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d8-49e2-8a43-9edffd937285', '2025-05-18 00:00:00.000000', '2025-05-18 06:32:20.000000', '2025-05-18 06:37:32.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d8-4a11-86f7-71efff5907a6', '2025-05-18 00:00:00.000000', '2025-05-18 06:35:26.000000', '2025-05-18 07:12:03.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d8-4a45-873f-75df0477456f', '2025-05-18 00:00:00.000000', '2025-05-18 06:36:04.000000', NULL, 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d8-4a6a-807b-d49a03334dc0', '2025-05-18 00:00:00.000000', '2025-05-18 06:45:51.000000', '2025-05-18 06:46:56.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d8-4a8b-8e56-6e2858c6937d', '2025-05-19 00:00:00.000000', '2025-05-19 00:34:57.000000', '2025-05-19 07:59:19.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d8-4aaf-8d84-d30afb256640', '2025-05-19 00:00:00.000000', '2025-05-19 00:40:47.000000', '2025-05-19 09:13:44.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d8-4ad7-80bd-1869434d0d58', '2025-05-19 00:00:00.000000', '2025-05-19 00:43:30.000000', '2025-05-19 10:37:34.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d8-4afa-83de-17b8ede0291c', '2025-05-19 00:00:00.000000', '2025-05-19 00:45:19.000000', '2025-05-19 10:43:08.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d8-4b29-8450-6632ef7644a7', '2025-05-19 00:00:00.000000', '2025-05-19 00:46:40.000000', '2025-05-19 10:31:30.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d8-4b57-8946-53588d5d69b5', '2025-05-19 00:00:00.000000', '2025-05-19 00:53:07.000000', '2025-05-19 10:48:24.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d8-4b75-8705-fe49ea9c563c', '2025-05-19 00:00:00.000000', '2025-05-19 00:55:17.000000', '2025-05-19 10:16:35.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d8-4ba5-8cb1-42bbe65faae9', '2025-05-19 00:00:00.000000', '2025-05-19 00:58:47.000000', '2025-05-19 08:45:26.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d8-4bc4-86ba-de6b4c49391d', '2025-05-19 00:00:00.000000', '2025-05-19 01:02:52.000000', '2025-05-19 10:52:28.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d8-4be4-8a7b-d30e27c0bc43', '2025-05-19 00:00:00.000000', '2025-05-19 01:05:06.000000', '2025-05-19 10:41:16.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d8-4c02-8f03-17085c9bfd55', '2025-05-19 00:00:00.000000', '2025-05-19 01:05:39.000000', '2025-05-19 10:34:13.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d8-4c29-82e2-2febb583bb59', '2025-05-19 00:00:00.000000', '2025-05-19 01:06:01.000000', '2025-05-19 06:50:09.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d8-4c46-8670-9f732d9121c3', '2025-05-19 00:00:00.000000', '2025-05-19 01:06:57.000000', '2025-05-19 10:25:55.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d8-4c62-88b2-3481f78b8195', '2025-05-19 00:00:00.000000', '2025-05-19 01:10:17.000000', '2025-05-19 11:01:16.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d8-4c7f-8f9d-0f674623c46e', '2025-05-19 00:00:00.000000', '2025-05-19 01:14:31.000000', '2025-05-19 09:00:23.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d8-4c9c-82a2-a2e3d12aabf5', '2025-05-19 00:00:00.000000', '2025-05-19 01:21:01.000000', '2025-05-19 10:21:18.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d8-4cc3-8781-6fadafeb982e', '2025-05-19 00:00:00.000000', '2025-05-19 01:21:11.000000', '2025-05-19 10:08:51.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d8-4ce1-85cb-42f4300dfd6b', '2025-05-19 00:00:00.000000', '2025-05-19 01:21:40.000000', '2025-05-19 11:07:37.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d8-4d00-8386-efcd23083884', '2025-05-19 00:00:00.000000', '2025-05-19 01:24:18.000000', '2025-05-19 10:44:49.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d8-4d1e-8b62-38af275abf66', '2025-05-19 00:00:00.000000', '2025-05-19 01:27:15.000000', '2025-05-19 10:11:06.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d8-4d4b-816e-6ce80a2780d0', '2025-05-19 00:00:00.000000', '2025-05-19 01:28:45.000000', '2025-05-19 10:56:33.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d8-4d71-84bf-25c3b736155c', '2025-05-19 00:00:00.000000', '2025-05-19 01:34:41.000000', '2025-05-19 11:10:54.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d8-4da6-8527-99830b36db5d', '2025-05-19 00:00:00.000000', '2025-05-19 01:36:00.000000', '2025-05-19 07:06:42.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d8-4dcc-8724-6b253c4bd555', '2025-05-19 00:00:00.000000', '2025-05-19 01:39:17.000000', '2025-05-19 05:53:33.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d8-4e3d-8d4d-9a508d47605f', '2025-05-19 00:00:00.000000', '2025-05-19 01:45:30.000000', '2025-05-19 10:55:55.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d8-4e6c-8c67-0dfae35ed9b1', '2025-05-19 00:00:00.000000', '2025-05-19 01:48:25.000000', '2025-05-19 11:42:07.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d8-4e8b-8d42-1a6c5d0956a9', '2025-05-19 00:00:00.000000', '2025-05-19 01:48:54.000000', '2025-05-19 11:19:49.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d8-4eab-8117-b8f8d5147e26', '2025-05-19 00:00:00.000000', '2025-05-19 02:05:21.000000', '2025-05-19 11:40:16.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d8-4ec9-8e09-cd46d295b35d', '2025-05-19 00:00:00.000000', '2025-05-19 02:07:16.000000', '2025-05-19 11:40:30.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d8-4ef6-8180-c5f1aa7f12bc', '2025-05-19 00:00:00.000000', '2025-05-19 02:08:47.000000', '2025-05-19 11:18:49.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d8-4f16-8b04-815d1782778e', '2025-05-19 00:00:00.000000', '2025-05-19 02:51:16.000000', '2025-05-19 10:59:45.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d8-4f4d-8c10-b56320b318c3', '2025-05-19 00:00:00.000000', '2025-05-19 03:10:05.000000', '2025-05-19 10:46:40.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d8-4f75-8f1a-f814f065b93b', '2025-05-19 00:00:00.000000', '2025-05-19 03:11:04.000000', '2025-05-19 11:35:43.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d8-4f9c-8fa1-d93093fa4569', '2025-05-19 00:00:00.000000', '2025-05-19 03:23:39.000000', '2025-05-19 10:50:07.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d8-4fba-8bb8-7b91f9fd7998', '2025-05-19 00:00:00.000000', '2025-05-19 04:31:39.000000', '2025-05-19 10:47:45.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d8-4fd6-8454-957098bf6012', '2025-05-20 00:00:00.000000', '2025-05-20 00:10:38.000000', '2025-05-20 10:38:29.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d8-4fed-8b51-74993cdac1ea', '2025-05-20 00:00:00.000000', '2025-05-20 00:28:37.000000', '2025-05-20 10:44:58.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d9-4016-806e-77e19260a5b8', '2025-05-20 00:00:00.000000', '2025-05-20 00:45:06.000000', '2025-05-20 10:31:49.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d9-4039-8cd8-2eb2c1c0e2d6', '2025-05-20 00:00:00.000000', '2025-05-20 00:47:28.000000', '2025-05-20 09:21:02.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d9-4069-8912-44809ab4f9a8', '2025-05-20 00:00:00.000000', '2025-05-20 00:49:16.000000', '2025-05-20 08:51:41.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d9-408d-8bce-f27c4ef03ee2', '2025-05-20 00:00:00.000000', '2025-05-20 00:52:45.000000', '2025-05-20 10:00:57.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d9-40b0-885a-973d076abf05', '2025-05-20 00:00:00.000000', '2025-05-20 00:52:59.000000', '2025-05-20 10:45:31.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d9-40d0-8957-156c389a894e', '2025-05-20 00:00:00.000000', '2025-05-20 00:54:20.000000', '2025-05-20 10:07:57.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d9-40ef-80d7-24bb69f91de2', '2025-05-20 00:00:00.000000', '2025-05-20 00:54:42.000000', '2025-05-20 10:28:00.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d9-4111-8990-e204d8c824ea', '2025-05-20 00:00:00.000000', '2025-05-20 00:56:00.000000', '2025-05-20 08:34:54.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d9-4136-822e-80e388ef0f87', '2025-05-20 00:00:00.000000', '2025-05-20 00:57:53.000000', '2025-05-20 08:44:25.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d9-4161-810a-58fe967ff6d9', '2025-05-20 00:00:00.000000', '2025-05-20 00:59:23.000000', '2025-05-20 10:38:02.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d9-417a-8375-26781c0da9d9', '2025-05-20 00:00:00.000000', '2025-05-20 00:59:49.000000', '2025-05-20 10:33:05.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d9-419b-8bf3-f8a216312cd1', '2025-05-20 00:00:00.000000', '2025-05-20 01:09:08.000000', '2025-05-20 10:11:37.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d9-41d4-8524-a1f67d4940b0', '2025-05-20 00:00:00.000000', '2025-05-20 01:10:23.000000', '2025-05-20 10:47:46.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d9-41fc-85eb-1743c0a7868a', '2025-05-20 00:00:00.000000', '2025-05-20 01:11:15.000000', '2025-05-20 10:44:27.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d9-421c-89b7-bda7cb97e6cd', '2025-05-20 00:00:00.000000', '2025-05-20 01:11:37.000000', '2025-05-20 10:03:50.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d9-424e-8b38-ec8fbd6f3851', '2025-05-20 00:00:00.000000', '2025-05-20 01:13:10.000000', '2025-05-20 10:43:14.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d9-4270-8039-ef5c98eccb78', '2025-05-20 00:00:00.000000', '2025-05-20 01:14:24.000000', '2025-05-20 10:55:35.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d9-4291-8256-d42fc9478b8d', '2025-05-20 00:00:00.000000', '2025-05-20 01:18:52.000000', '2025-05-20 10:50:45.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d9-42f9-88ef-48cec09c6260', '2025-05-20 00:00:00.000000', '2025-05-20 01:20:49.000000', '2025-05-20 10:52:30.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d9-4386-8fe4-339047687e75', '2025-05-20 00:00:00.000000', '2025-05-20 01:21:14.000000', '2025-05-20 10:59:45.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d9-43ae-8135-6f0571192c6c', '2025-05-20 00:00:00.000000', '2025-05-20 01:22:28.000000', '2025-05-20 11:35:23.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d9-43ca-87e0-7fb0414e2d93', '2025-05-20 00:00:00.000000', '2025-05-20 01:28:18.000000', '2025-05-20 11:20:40.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d9-43ec-86e8-3b41282c4689', '2025-05-20 00:00:00.000000', '2025-05-20 01:28:37.000000', '2025-05-20 12:04:55.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d9-4458-8a41-4f23fa79ac5d', '2025-05-20 00:00:00.000000', '2025-05-20 01:36:44.000000', '2025-05-20 12:30:54.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d9-4478-8492-01d69062981b', '2025-05-20 00:00:00.000000', '2025-05-20 01:39:08.000000', '2025-05-20 12:10:59.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d9-44e8-8b33-150b524e9021', '2025-05-20 00:00:00.000000', '2025-05-20 01:45:22.000000', '2025-05-20 10:08:25.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d9-455f-8012-b489a1ddeb8d', '2025-05-20 00:00:00.000000', '2025-05-20 01:47:52.000000', '2025-05-20 10:15:43.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d9-4604-8d19-4aa1d9c8aabf', '2025-05-20 00:00:00.000000', '2025-05-20 01:48:23.000000', '2025-05-20 11:21:30.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d9-4755-8a53-020f966afeb9', '2025-05-20 00:00:00.000000', '2025-05-20 01:53:13.000000', '2025-05-20 11:27:47.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d9-47c6-8721-fe2ac63227d6', '2025-05-20 00:00:00.000000', '2025-05-20 02:03:04.000000', '2025-05-20 12:03:47.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d9-4827-8c70-587ee0e4cb77', '2025-05-20 00:00:00.000000', '2025-05-20 02:11:15.000000', '2025-05-20 10:37:38.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d9-487c-857a-d7fc1eb63b9a', '2025-05-20 00:00:00.000000', '2025-05-20 04:40:34.000000', '2025-05-20 11:30:29.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d9-48b4-8b10-6c6e515afbe5', '2025-05-21 00:00:00.000000', '2025-05-21 00:25:17.000000', '2025-05-21 10:42:34.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d9-48f5-8488-f24f7cbbde2f', '2025-05-21 00:00:00.000000', '2025-05-21 00:39:29.000000', '2025-05-21 08:01:56.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76d9-491a-8fdf-e039741d3fea', '2025-05-21 00:00:00.000000', '2025-05-21 00:45:04.000000', '2025-05-21 10:31:12.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76d9-4942-83df-9d2c852deb89', '2025-05-21 00:00:00.000000', '2025-05-21 00:49:34.000000', '2025-05-21 09:18:59.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d9-4969-83d6-f36970b0cf3d', '2025-05-21 00:00:00.000000', '2025-05-21 00:50:08.000000', '2025-05-21 08:25:36.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76d9-498e-8a8d-e7bc79e54650', '2025-05-21 00:00:00.000000', '2025-05-21 00:50:22.000000', '2025-05-21 05:09:01.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76d9-49ae-8cea-7fe1a35d8de4', '2025-05-21 00:00:00.000000', '2025-05-21 00:54:55.000000', '2025-05-21 08:31:56.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d9-49d4-869b-a0bde043d1ca', '2025-05-21 00:00:00.000000', '2025-05-21 00:57:24.000000', '2025-05-21 10:32:21.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76d9-4a44-8619-199cdd98fd7e', '2025-05-21 00:00:00.000000', '2025-05-21 00:57:46.000000', '2025-05-21 10:36:30.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d9-4a7c-8bed-957789d0ceb4', '2025-05-21 00:00:00.000000', '2025-05-21 00:58:19.000000', '2025-05-21 10:47:29.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76d9-4ae0-8d2d-19ce7a63ae19', '2025-05-21 00:00:00.000000', '2025-05-21 00:58:56.000000', '2025-05-21 10:05:44.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76d9-4b1b-838c-bef56bc07d86', '2025-05-21 00:00:00.000000', '2025-05-21 00:59:15.000000', '2025-05-21 10:34:46.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76d9-4b93-8634-31696a896cfe', '2025-05-21 00:00:00.000000', '2025-05-21 01:05:50.000000', '2025-05-21 10:07:43.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76d9-4bbb-8467-d4f00c621387', '2025-05-21 00:00:00.000000', '2025-05-21 01:06:35.000000', '2025-05-21 11:07:37.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76d9-4bde-8aea-1fbc5ada82c4', '2025-05-21 00:00:00.000000', '2025-05-21 01:06:49.000000', '2025-05-21 10:21:49.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76d9-4c02-8b5b-bd1722c24cf5', '2025-05-21 00:00:00.000000', '2025-05-21 01:09:47.000000', '2025-05-21 10:54:25.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76d9-4c27-8f42-54f67a69839e', '2025-05-21 00:00:00.000000', '2025-05-21 01:10:10.000000', '2025-05-21 10:48:14.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76d9-4c53-8391-9d68ef6d6e0c', '2025-05-21 00:00:00.000000', '2025-05-21 01:17:30.000000', '2025-05-21 11:15:43.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76d9-4c77-817e-0137b0e33aaa', '2025-05-21 00:00:00.000000', '2025-05-21 01:17:54.000000', '2025-05-21 10:49:49.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d9-4c9b-8881-9145b55b96e9', '2025-05-21 00:00:00.000000', '2025-05-21 01:18:27.000000', '2025-05-21 11:15:03.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76d9-4cc2-8ea0-6620646a22c4', '2025-05-21 00:00:00.000000', '2025-05-21 01:18:59.000000', '2025-05-21 10:50:47.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76d9-4ce8-8a56-880c947a8aec', '2025-05-21 00:00:00.000000', '2025-05-21 01:23:07.000000', '2025-05-21 10:59:53.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76d9-4d07-8895-32a47147402f', '2025-05-21 00:00:00.000000', '2025-05-21 01:26:48.000000', '2025-05-21 09:42:00.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76d9-4d24-8eb4-52df614f2e75', '2025-05-21 00:00:00.000000', '2025-05-21 01:29:51.000000', '2025-05-21 12:25:59.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76d9-4d3f-82e0-b4a91e5507ee', '2025-05-21 00:00:00.000000', '2025-05-21 01:30:01.000000', '2025-05-21 11:03:41.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76d9-4d6c-8d85-47b46e20f96e', '2025-05-21 00:00:00.000000', '2025-05-21 01:36:51.000000', '2025-05-21 11:13:43.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76d9-4de2-852b-83c66e95bbc8', '2025-05-21 00:00:00.000000', '2025-05-21 01:38:49.000000', '2025-05-21 11:57:24.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76d9-4e1f-82ca-6c5729e879d2', '2025-05-21 00:00:00.000000', '2025-05-21 01:41:02.000000', '2025-05-21 11:45:45.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76d9-4e50-85a3-a5f2526f2e9a', '2025-05-21 00:00:00.000000', '2025-05-21 01:42:39.000000', '2025-05-21 11:47:30.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76d9-4e74-8476-4e9498822994', '2025-05-21 00:00:00.000000', '2025-05-21 01:46:05.000000', '2025-05-21 11:19:00.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76d9-4ea6-8d6e-302add422339', '2025-05-21 00:00:00.000000', '2025-05-21 01:53:59.000000', '2025-05-21 10:57:52.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76d9-4ecd-8515-0571c2732cd6', '2025-05-21 00:00:00.000000', '2025-05-21 01:58:24.000000', '2025-05-21 11:34:32.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76d9-4ef3-873c-4bd2001d60a6', '2025-05-21 00:00:00.000000', '2025-05-21 02:04:27.000000', '2025-05-21 11:11:30.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76d9-4f16-8a51-42ddc85404cc', '2025-05-21 00:00:00.000000', '2025-05-21 02:55:40.000000', '2025-05-21 11:02:18.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76d9-4f38-8e5a-1c0e5f99f58d', '2025-05-22 00:00:00.000000', '2025-05-22 00:19:33.000000', '2025-05-22 23:45:39.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76d9-4f53-8e90-09922c2b3408', '2025-05-22 00:00:00.000000', '2025-05-22 00:43:26.000000', '2025-05-22 09:29:08.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76d9-4f72-87f7-845b480fee28', '2025-05-22 00:00:00.000000', '2025-05-22 00:43:55.000000', '2025-05-22 10:48:08.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76d9-4f8e-8267-346baabae310', '2025-05-22 00:00:00.000000', '2025-05-22 00:45:23.000000', '2025-05-22 10:36:25.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76d9-4fae-8b26-86c9cba3c881', '2025-05-22 00:00:00.000000', '2025-05-22 00:52:45.000000', '2025-05-22 10:33:45.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76d9-4fd1-8cca-6f6aff594a93', '2025-05-22 00:00:00.000000', '2025-05-22 00:55:39.000000', '2025-05-22 10:31:13.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76d9-4ff4-87b1-058b65abbd80', '2025-05-22 00:00:00.000000', '2025-05-22 00:57:23.000000', '2025-05-22 10:36:37.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76da-4016-8322-60b5c11e4c61', '2025-05-22 00:00:00.000000', '2025-05-22 00:58:12.000000', '2025-05-22 10:50:21.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76da-4039-8ebf-2d88e7f1c78c', '2025-05-22 00:00:00.000000', '2025-05-22 00:59:55.000000', '2025-05-22 10:32:52.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76da-4065-8cd1-819e34a5f41a', '2025-05-22 00:00:00.000000', '2025-05-22 01:05:03.000000', '2025-05-22 11:14:23.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76da-4086-8bac-ecf5322aa490', '2025-05-22 00:00:00.000000', '2025-05-22 01:08:46.000000', '2025-05-22 10:53:18.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76da-40c9-8b2f-c6d18be9d44e', '2025-05-22 00:00:00.000000', '2025-05-22 01:10:44.000000', '2025-05-22 10:44:37.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76da-415a-8bc4-d5977e335ce8', '2025-05-22 00:00:00.000000', '2025-05-22 01:11:08.000000', '2025-05-22 09:59:42.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76da-41b9-8041-c8a411f2284c', '2025-05-22 00:00:00.000000', '2025-05-22 01:12:09.000000', '2025-05-22 08:53:26.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76da-41e8-8243-7dfe6b8776d7', '2025-05-22 00:00:00.000000', '2025-05-22 01:12:20.000000', '2025-05-22 10:46:55.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76da-4208-82c2-437e5d647e3c', '2025-05-22 00:00:00.000000', '2025-05-22 01:12:52.000000', '2025-05-22 10:54:58.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76da-4230-8c79-11cdcb6ff0e3', '2025-05-22 00:00:00.000000', '2025-05-22 01:13:58.000000', '2025-05-22 09:10:48.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76da-424f-8605-dfb695de93c0', '2025-05-22 00:00:00.000000', '2025-05-22 01:14:27.000000', '2025-05-22 10:51:27.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76da-4274-8c8f-de4a06236419', '2025-05-22 00:00:00.000000', '2025-05-22 01:16:19.000000', '2025-05-22 11:31:22.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76da-4290-89e7-fbe282d21330', '2025-05-22 00:00:00.000000', '2025-05-22 01:21:07.000000', '2025-05-22 05:01:58.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76da-42ab-81bf-d5f666c9c718', '2025-05-22 00:00:00.000000', '2025-05-22 01:31:14.000000', '2025-05-22 10:35:54.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76da-42c7-8241-542513928949', '2025-05-22 00:00:00.000000', '2025-05-22 01:33:18.000000', '2025-05-22 10:51:46.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76da-42e8-82fe-0a8e68e7ded2', '2025-05-22 00:00:00.000000', '2025-05-22 01:37:54.000000', '2025-05-22 10:12:49.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76da-4302-8292-5231be4258fc', '2025-05-22 00:00:00.000000', '2025-05-22 01:40:20.000000', '2025-05-22 12:39:03.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76da-431c-874c-0bf84c93b55d', '2025-05-22 00:00:00.000000', '2025-05-22 01:46:34.000000', '2025-05-22 12:42:24.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76da-4336-8161-8b8347b271a1', '2025-05-22 00:00:00.000000', '2025-05-22 01:49:04.000000', '2025-05-22 11:25:02.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76da-435b-8dd9-cde357dac2bb', '2025-05-22 00:00:00.000000', '2025-05-22 01:51:02.000000', '2025-05-22 12:36:06.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76da-437f-8c6a-ae99343e0f76', '2025-05-22 00:00:00.000000', '2025-05-22 01:56:48.000000', '2025-05-22 11:38:33.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76da-43a7-8133-795ff2e02fcd', '2025-05-22 00:00:00.000000', '2025-05-22 01:58:26.000000', '2025-05-22 10:03:08.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76da-43ce-8e08-f74287addcb6', '2025-05-22 00:00:00.000000', '2025-05-22 02:05:37.000000', '2025-05-22 11:51:33.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76da-43f1-851d-49a7c32989c5', '2025-05-22 00:00:00.000000', '2025-05-22 02:20:16.000000', '2025-05-22 09:40:06.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76da-441d-854b-456eabe97115', '2025-05-22 00:00:00.000000', '2025-05-22 03:36:20.000000', '2025-05-22 11:53:02.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76da-444d-827d-65605b21c48c', '2025-05-22 00:00:00.000000', '2025-05-22 05:37:07.000000', '2025-05-22 12:17:37.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76da-4474-8de9-e2d7c6380597', '2025-05-23 00:00:00.000000', '2025-05-23 00:34:27.000000', '2025-05-23 07:52:57.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76da-4497-8557-47adf657bef6', '2025-05-23 00:00:00.000000', '2025-05-23 00:35:01.000000', '2025-05-23 10:03:42.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76da-44c4-80a2-eb50a715065f', '2025-05-23 00:00:00.000000', '2025-05-23 00:37:58.000000', '2025-05-23 09:18:28.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76da-44eb-8351-bd09f62a7653', '2025-05-23 00:00:00.000000', '2025-05-23 00:38:50.000000', '2025-05-23 10:48:22.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76da-450e-8ca9-94babf028263', '2025-05-23 00:00:00.000000', '2025-05-23 00:46:06.000000', '2025-05-23 10:35:02.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0a-76da-4552-8bb1-cd589639a5ba', '2025-05-23 00:00:00.000000', '2025-05-23 00:47:06.000000', '2025-05-23 10:33:11.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76da-458f-8898-d8af3ab06b4e', '2025-05-23 00:00:00.000000', '2025-05-23 00:51:15.000000', '2025-05-23 06:10:24.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76da-45b0-875f-93a20e923c45', '2025-05-23 00:00:00.000000', '2025-05-23 00:55:20.000000', '2025-05-23 09:15:39.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76da-45d2-8a5a-06226209aada', '2025-05-23 00:00:00.000000', '2025-05-23 00:56:58.000000', '2025-05-23 10:32:27.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76da-45f0-8d40-cc146a799f6a', '2025-05-23 00:00:00.000000', '2025-05-23 00:57:49.000000', '2025-05-23 10:33:53.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76da-4629-83d2-ae135caf7d6b', '2025-05-23 00:00:00.000000', '2025-05-23 00:59:00.000000', '2025-05-23 04:32:44.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76da-4657-8c9a-fda3e21329ec', '2025-05-23 00:00:00.000000', '2025-05-23 01:00:41.000000', '2025-05-23 11:04:45.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76da-4693-83b7-9db9577065fe', '2025-05-23 00:00:00.000000', '2025-05-23 01:02:07.000000', '2025-05-23 08:53:03.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76da-46c1-8f93-de31368f89fc', '2025-05-23 00:00:00.000000', '2025-05-23 01:08:28.000000', '2025-05-23 10:48:43.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76da-46e3-8382-ffb605d925b2', '2025-05-23 00:00:00.000000', '2025-05-23 01:09:00.000000', '2025-05-23 10:04:31.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76da-472a-85c4-3fb49bafa478', '2025-05-23 00:00:00.000000', '2025-05-23 01:10:07.000000', '2025-05-23 10:43:41.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76da-4752-8817-2daac66456a4', '2025-05-23 00:00:00.000000', '2025-05-23 01:11:09.000000', '2025-05-23 08:14:06.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76da-4777-8045-b68edfbee255', '2025-05-23 00:00:00.000000', '2025-05-23 01:12:05.000000', '2025-05-23 10:50:00.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76da-47b7-8ffa-d1668b60fd44', '2025-05-23 00:00:00.000000', '2025-05-23 01:13:52.000000', '2025-05-23 10:02:10.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76da-47e7-8dce-02f954ae4698', '2025-05-23 00:00:00.000000', '2025-05-23 01:18:15.000000', '2025-05-23 10:57:58.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76da-480b-8c8e-68563fc56f28', '2025-05-23 00:00:00.000000', '2025-05-23 01:20:57.000000', '2025-05-23 11:09:09.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76da-482c-8178-075bc703f6a3', '2025-05-23 00:00:00.000000', '2025-05-23 01:25:58.000000', '2025-05-23 11:18:16.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76da-484c-8654-7e23c78d910f', '2025-05-23 00:00:00.000000', '2025-05-23 01:28:46.000000', '2025-05-23 10:55:21.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76da-486a-85ec-ba2c04fb286b', '2025-05-23 00:00:00.000000', '2025-05-23 01:34:45.000000', '2025-05-23 09:54:04.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76da-489e-82f0-9cab2fd07bb6', '2025-05-23 00:00:00.000000', '2025-05-23 01:36:47.000000', '2025-05-23 10:53:43.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76da-48e6-8ba2-5a5c7e43a06e', '2025-05-23 00:00:00.000000', '2025-05-23 01:37:00.000000', '2025-05-23 11:28:14.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76da-4926-8c86-8483d188c289', '2025-05-23 00:00:00.000000', '2025-05-23 01:45:59.000000', '2025-05-23 10:19:36.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76da-4954-88ed-0176ab3039df', '2025-05-23 00:00:00.000000', '2025-05-23 01:49:00.000000', '2025-05-23 04:49:24.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76da-4983-8e03-5eb58dd9ae8a', '2025-05-23 00:00:00.000000', '2025-05-23 01:54:29.000000', '2025-05-23 11:26:58.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76da-49a0-8758-103f64f7a485', '2025-05-23 00:00:00.000000', '2025-05-23 02:04:52.000000', '2025-05-23 10:55:52.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76da-49bc-8d37-6a6ee8d36dd4', '2025-05-23 00:00:00.000000', '2025-05-23 02:33:44.000000', '2025-05-23 10:36:58.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76da-49da-896e-f3ae4792b149', '2025-05-23 00:00:00.000000', '2025-05-23 03:24:51.000000', '2025-05-23 10:52:09.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76da-4a05-8ca2-2e5e355118ca', '2025-05-23 00:00:00.000000', '2025-05-23 06:38:29.000000', '2025-05-23 10:42:41.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76da-4a2f-8de5-67fb3ae82a01', '2025-05-24 00:00:00.000000', '2025-05-24 03:21:10.000000', '2025-05-24 03:26:51.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76da-4a54-8921-a2e7b6192ba7', '2025-05-26 00:00:00.000000', '2025-05-26 00:30:29.000000', '2025-05-26 10:31:34.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76da-4a76-8de6-a9781b8bf543', '2025-05-26 00:00:00.000000', '2025-05-26 00:34:54.000000', '2025-05-26 10:23:26.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76da-4a95-8a6c-bb676b45d4ec', '2025-05-26 00:00:00.000000', '2025-05-26 00:39:47.000000', '2025-05-26 10:08:58.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76da-4ab6-870f-944c1a286cab', '2025-05-26 00:00:00.000000', '2025-05-26 00:40:13.000000', '2025-05-26 09:38:57.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0a-76da-4ad5-8b5d-39201939dcd5', '2025-05-26 00:00:00.000000', '2025-05-26 00:44:24.000000', '2025-05-26 10:35:24.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76da-4af8-834b-fe27f509854a', '2025-05-26 00:00:00.000000', '2025-05-26 00:45:54.000000', '2025-05-26 10:34:24.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76da-4b24-8a61-021ffd253cb2', '2025-05-26 00:00:00.000000', '2025-05-26 00:46:42.000000', '2025-05-26 10:52:42.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76da-4b4c-8c46-83057999e508', '2025-05-26 00:00:00.000000', '2025-05-26 00:52:57.000000', '2025-05-26 09:27:44.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76da-4b6b-8ec1-a46d3b433d11', '2025-05-26 00:00:00.000000', '2025-05-26 00:54:30.000000', '2025-05-26 05:05:37.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76da-4b87-81f0-e7c5ac7e2ece', '2025-05-26 00:00:00.000000', '2025-05-26 01:05:01.000000', '2025-05-26 10:14:09.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76da-4ba3-8083-7b1b2cbcbf16', '2025-05-26 00:00:00.000000', '2025-05-26 01:05:10.000000', '2025-05-26 10:47:00.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0a-76da-4bd5-81e9-f3f6059323f5', '2025-05-26 00:00:00.000000', '2025-05-26 01:11:14.000000', '2025-05-26 10:46:27.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76da-4c3d-8f26-239aabf497bf', '2025-05-26 00:00:00.000000', '2025-05-26 01:11:52.000000', '2025-05-26 10:44:32.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76da-4c69-834c-f5ac047ead12', '2025-05-26 00:00:00.000000', '2025-05-26 01:12:55.000000', '2025-05-26 10:30:49.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76da-4c9b-8a5d-a0f26f24c8c9', '2025-05-26 00:00:00.000000', '2025-05-26 01:13:47.000000', '2025-05-26 10:45:40.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76da-4cd2-87d7-b0ed4624b49d', '2025-05-26 00:00:00.000000', '2025-05-26 01:17:02.000000', '2025-05-26 10:49:49.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76da-4cfc-8abe-e3ad954ef800', '2025-05-26 00:00:00.000000', '2025-05-26 01:18:46.000000', '2025-05-26 11:00:19.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76da-4d42-8ebc-33cdd3533676', '2025-05-26 00:00:00.000000', '2025-05-26 01:20:00.000000', '2025-05-26 10:53:03.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76da-4d72-83d4-73cf5ed8c16d', '2025-05-26 00:00:00.000000', '2025-05-26 01:20:29.000000', '2025-05-26 08:00:56.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76da-4d9e-8912-1215974eeb38', '2025-05-26 00:00:00.000000', '2025-05-26 01:21:02.000000', '2025-05-26 11:13:57.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76da-4dce-8144-7a094c122990', '2025-05-26 00:00:00.000000', '2025-05-26 01:21:41.000000', '2025-05-26 10:30:18.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76da-4deb-8aff-79832504dcb4', '2025-05-26 00:00:00.000000', '2025-05-26 01:21:49.000000', '2025-05-26 11:27:19.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76da-4e04-8a89-ce623f92f267', '2025-05-26 00:00:00.000000', '2025-05-26 01:29:22.000000', '2025-05-26 05:29:31.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76da-4e58-89eb-6f1ac9405944', '2025-05-26 00:00:00.000000', '2025-05-26 01:29:35.000000', '2025-05-26 10:19:25.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76da-4eb5-8e17-518de0db9448', '2025-05-26 00:00:00.000000', '2025-05-26 01:43:18.000000', '2025-05-26 08:15:54.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76da-4ee4-8db7-f636b28b434f', '2025-05-26 00:00:00.000000', '2025-05-26 01:44:24.000000', '2025-05-26 11:33:18.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76da-4f12-8673-4f93a794666b', '2025-05-26 00:00:00.000000', '2025-05-26 01:45:20.000000', '2025-05-26 08:20:08.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76da-4f32-8100-80ec5f32a271', '2025-05-26 00:00:00.000000', '2025-05-26 01:46:56.000000', '2025-05-26 05:34:13.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76da-4f47-8571-9126c703ee35', '2025-05-26 00:00:00.000000', '2025-05-26 01:51:31.000000', '2025-05-26 11:29:53.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76da-4f84-882a-fb2dc8267e62', '2025-05-26 00:00:00.000000', '2025-05-26 02:02:24.000000', '2025-05-26 12:13:01.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76da-4fa7-8248-e0cf28adf7ab', '2025-05-26 00:00:00.000000', '2025-05-26 02:05:28.000000', '2025-05-26 10:31:09.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76da-4fc5-8c30-fae923461195', '2025-05-26 00:00:00.000000', '2025-05-26 02:48:42.000000', '2025-05-26 11:11:06.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76da-4fe3-8a84-c28852d686ef', '2025-05-26 00:00:00.000000', '2025-05-26 07:05:02.000000', '2025-05-26 11:19:41.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76db-4032-8d30-23cea7608e06', '2025-05-27 00:00:00.000000', '2025-05-27 00:31:49.000000', '2025-05-27 09:25:20.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0a-76db-4059-8056-7dd79f221198', '2025-05-27 00:00:00.000000', '2025-05-27 00:41:06.000000', '2025-05-27 04:15:16.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0a-76db-40a9-8e79-6d572dba84fe', '2025-05-27 00:00:00.000000', '2025-05-27 00:46:31.000000', '2025-05-27 10:27:31.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0a-76db-40ea-8c78-7d2684790eae', '2025-05-27 00:00:00.000000', '2025-05-27 00:46:48.000000', '2025-05-27 09:55:46.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0a-76db-4117-8666-f81df764b75c', '2025-05-27 00:00:00.000000', '2025-05-27 00:48:21.000000', '2025-05-27 10:32:05.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0a-76db-4139-8eb8-cdbc830e7012', '2025-05-27 00:00:00.000000', '2025-05-27 00:50:56.000000', '2025-05-27 10:01:59.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0a-76db-4177-842e-26872600802b', '2025-05-27 00:00:00.000000', '2025-05-27 00:53:07.000000', '2025-05-27 10:04:51.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0a-76db-41ae-88a2-edc1327a0524', '2025-05-27 00:00:00.000000', '2025-05-27 00:57:10.000000', '2025-05-27 10:31:40.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af');
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd9d0a-76db-41d5-89cf-c7af9c67c5a2', '2025-05-27 00:00:00.000000', '2025-05-27 00:58:39.000000', '2025-05-27 10:26:49.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0a-76db-4214-8208-0f44be207b3c', '2025-05-27 00:00:00.000000', '2025-05-27 00:59:39.000000', '2025-05-27 10:33:57.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0a-76db-4266-8973-bccee0362538', '2025-05-27 00:00:00.000000', '2025-05-27 01:11:50.000000', '2025-05-27 10:11:01.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0a-76db-42b9-8182-3efb82b42195', '2025-05-27 00:00:00.000000', '2025-05-27 01:12:34.000000', '2025-05-27 07:42:47.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0a-76db-42e3-89ce-4b8e0cbd0654', '2025-05-27 00:00:00.000000', '2025-05-27 01:14:05.000000', '2025-05-27 10:37:03.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0a-76db-431b-82ad-94d5ccf15544', '2025-05-27 00:00:00.000000', '2025-05-27 01:14:09.000000', '2025-05-27 09:19:22.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0a-76db-4358-842a-b0ba88163c58', '2025-05-27 00:00:00.000000', '2025-05-27 01:16:26.000000', '2025-05-27 10:07:27.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0a-76db-437a-8ef0-970c4a5d675f', '2025-05-27 00:00:00.000000', '2025-05-27 01:18:12.000000', '2025-05-27 10:25:13.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0a-76db-43a9-8497-1eb6482032da', '2025-05-27 00:00:00.000000', '2025-05-27 01:22:36.000000', '2025-05-27 10:03:45.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0a-76db-43d8-828c-bb5a51ccade4', '2025-05-27 00:00:00.000000', '2025-05-27 01:25:26.000000', '2025-05-27 08:34:10.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0a-76db-4404-83da-037a6a3fdea1', '2025-05-27 00:00:00.000000', '2025-05-27 01:30:55.000000', '2025-05-27 10:22:04.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0a-76db-4468-842c-063f95065aaf', '2025-05-27 00:00:00.000000', '2025-05-27 01:42:25.000000', '2025-05-27 08:52:57.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0a-76db-44a2-8f60-f24d5689cdfa', '2025-05-27 00:00:00.000000', '2025-05-27 01:42:38.000000', '2025-05-27 09:56:40.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0a-76db-44e9-86ef-8ff71f8e6ca5', '2025-05-27 00:00:00.000000', '2025-05-27 01:42:56.000000', '2025-05-27 06:49:26.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0a-76db-4529-856c-9349dd1ca0cc', '2025-05-27 00:00:00.000000', '2025-05-27 01:44:23.000000', '2025-05-27 10:24:51.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0a-76db-457c-8403-4c6a9761eaea', '2025-05-27 00:00:00.000000', '2025-05-27 01:45:33.000000', '2025-05-27 10:32:55.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0a-76db-459c-8f82-1d210812a0ae', '2025-05-27 00:00:00.000000', '2025-05-27 01:53:09.000000', NULL, 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0a-76db-45ba-8592-6d0555d3b5c9', '2025-05-27 00:00:00.000000', '2025-05-27 01:55:01.000000', '2025-05-27 09:33:54.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0a-76db-45f0-8992-542c1a4e82ce', '2025-05-27 00:00:00.000000', '2025-05-27 02:03:29.000000', '2025-05-27 09:07:45.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0a-76db-4618-867e-7ea8e1a36548', '2025-05-27 00:00:00.000000', '2025-05-27 02:09:22.000000', '2025-05-27 09:45:13.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0a-76db-464e-8dc9-9e91f34f4c73', '2025-05-27 00:00:00.000000', '2025-05-27 02:45:12.000000', '2025-05-27 10:30:23.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0a-76db-4674-8575-2de426d0ffb4', '2025-05-27 00:00:00.000000', '2025-05-27 02:51:44.000000', '2025-05-27 08:35:05.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0a-76db-46a1-807f-bb4aa81371df', '2025-05-27 00:00:00.000000', '2025-05-27 03:01:56.000000', '2025-05-27 10:36:40.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0a-76db-46c2-8fe0-9e8035f0f2e4', '2025-05-27 00:00:00.000000', '2025-05-27 03:03:21.000000', '2025-05-27 08:39:56.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0a-76db-46e5-8f72-1d854a96c2bc', '2025-05-27 00:00:00.000000', '2025-05-27 05:55:44.000000', '2025-05-27 06:00:41.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0a-76db-470b-864a-12fac33626a0', '2025-05-27 00:00:00.000000', '2025-05-27 06:07:31.000000', '2025-05-27 08:38:14.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-42e5-82b7-2fc77021dad8', '2025-03-31 00:00:00.000000', '2025-03-31 23:41:02.000000', '2025-03-31 23:42:02.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-43f7-8b8c-992d3c4af117', '2025-04-01 00:00:00.000000', '2025-04-01 00:27:59.000000', '2025-04-01 10:36:48.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4420-88e3-86f1cd0c5189', '2025-04-01 00:00:00.000000', '2025-04-01 00:36:49.000000', '2025-04-01 07:56:28.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-4431-82e3-ccc363b55249', '2025-04-01 00:00:00.000000', '2025-04-01 00:42:58.000000', '2025-04-01 09:12:07.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4445-84d1-6078d570b18b', '2025-04-01 00:00:00.000000', '2025-04-01 00:45:46.000000', '2025-04-01 10:47:11.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47b-4453-83cb-7ae0e5564a05', '2025-04-01 00:00:00.000000', '2025-04-01 00:49:59.000000', '2025-04-01 10:30:19.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-4460-8e64-3c3cffd9d63a', '2025-04-01 00:00:00.000000', '2025-04-01 00:51:32.000000', '2025-04-01 10:35:11.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-446f-8e5e-23805318d671', '2025-04-01 00:00:00.000000', '2025-04-01 00:52:06.000000', '2025-04-01 12:08:11.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-447f-89c2-52b6624f625a', '2025-04-01 00:00:00.000000', '2025-04-01 00:52:15.000000', '2025-04-01 10:26:22.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-448b-81da-47ec06487804', '2025-04-01 00:00:00.000000', '2025-04-01 01:00:14.000000', '2025-04-01 10:43:21.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47b-4495-8d09-d264dad3e91f', '2025-04-01 00:00:00.000000', '2025-04-01 01:00:44.000000', '2025-04-01 10:12:18.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47b-44a2-8e96-cc64784a7421', '2025-04-01 00:00:00.000000', '2025-04-01 01:01:25.000000', '2025-04-01 11:14:54.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-44b3-8195-73c60fbb529e', '2025-04-01 00:00:00.000000', '2025-04-01 01:07:23.000000', '2025-04-01 10:54:42.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47b-44c0-8093-e3863322df65', '2025-04-01 00:00:00.000000', '2025-04-01 01:08:00.000000', '2025-04-01 10:41:12.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-44d2-8d92-4be17f655f22', '2025-04-01 00:00:00.000000', '2025-04-01 01:08:23.000000', '2025-04-01 10:45:37.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47b-44e4-8482-cfa851848f79', '2025-04-01 00:00:00.000000', '2025-04-01 01:08:40.000000', '2025-04-01 10:48:27.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-44f2-89f2-c1aadb135b64', '2025-04-01 00:00:00.000000', '2025-04-01 01:12:26.000000', '2025-04-01 10:55:19.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-4501-8c75-2cbf3da71436', '2025-04-01 00:00:00.000000', '2025-04-01 01:13:33.000000', '2025-04-01 10:32:31.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4513-856d-a42a94ff9f6a', '2025-04-01 00:00:00.000000', '2025-04-01 01:15:25.000000', '2025-04-01 10:51:37.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-4522-848d-2624e6877516', '2025-04-01 00:00:00.000000', '2025-04-01 01:16:41.000000', '2025-04-01 10:55:05.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-452e-8715-e886f960007b', '2025-04-01 00:00:00.000000', '2025-04-01 01:18:45.000000', '2025-04-01 11:54:06.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-4538-89c6-de3d63db1946', '2025-04-01 00:00:00.000000', '2025-04-01 01:20:55.000000', '2025-04-01 10:56:04.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47b-4547-8596-0861a654597c', '2025-04-01 00:00:00.000000', '2025-04-01 01:21:53.000000', '2025-04-01 04:22:13.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-4555-87c0-b87d57a7ef6c', '2025-04-01 00:00:00.000000', '2025-04-01 01:23:25.000000', '2025-04-01 10:49:36.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-4563-80f8-d75dc5219629', '2025-04-01 00:00:00.000000', '2025-04-01 01:35:48.000000', '2025-04-01 10:28:30.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47b-4570-8fc1-2b85b7eb5721', '2025-04-01 00:00:00.000000', '2025-04-01 01:45:07.000000', '2025-04-01 11:20:51.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47b-4581-890b-dc40ba6a26f1', '2025-04-01 00:00:00.000000', '2025-04-01 01:47:46.000000', '2025-04-01 11:29:56.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4590-86f4-baa093744f44', '2025-04-01 00:00:00.000000', '2025-04-01 01:53:06.000000', '2025-04-01 11:28:01.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-45b4-8a73-faf12ff62d3d', '2025-04-01 00:00:00.000000', '2025-04-01 01:58:28.000000', '2025-04-01 11:41:39.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-45d0-8e9f-d1dd192b26e6', '2025-04-01 00:00:00.000000', '2025-04-01 02:03:36.000000', '2025-04-01 11:00:13.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-45f1-8939-4d6c60936216', '2025-04-01 00:00:00.000000', '2025-04-01 02:08:31.000000', '2025-04-01 11:46:43.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-45ff-889f-5154feb2d6af', '2025-04-01 00:00:00.000000', '2025-04-01 02:10:38.000000', '2025-04-01 10:47:26.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47b-460d-8a5f-272c2228406e', '2025-04-01 00:00:00.000000', '2025-04-01 02:11:59.000000', '2025-04-01 11:14:11.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4621-80c5-7d5ed79851d0', '2025-04-01 00:00:00.000000', '2025-04-01 02:44:17.000000', '2025-04-01 10:13:18.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4639-8b41-9195c3341f7c', '2025-04-01 00:00:00.000000', '2025-04-01 05:57:13.000000', '2025-04-01 10:11:02.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4646-814b-dc5ac04acf68', '2025-04-01 00:00:00.000000', '2025-04-01 06:11:32.000000', '2025-04-01 08:40:33.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47b-4651-8051-73ef6d42c041', '2025-04-01 00:00:00.000000', '2025-04-01 06:22:19.000000', '2025-04-01 10:40:40.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-465d-83d7-d17250e2d673', '2025-04-02 00:00:00.000000', '2025-04-02 00:05:50.000000', '2025-04-02 05:18:25.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4676-8559-fa495a6e3000', '2025-04-02 00:00:00.000000', '2025-04-02 00:31:57.000000', '2025-04-02 10:35:16.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-4682-8189-cff69785f940', '2025-04-02 00:00:00.000000', '2025-04-02 00:37:49.000000', '2025-04-02 09:06:55.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-468f-84d7-dccccddda150', '2025-04-02 00:00:00.000000', '2025-04-02 00:46:43.000000', '2025-04-02 08:35:32.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47b-469d-8baf-e76fd0de9884', '2025-04-02 00:00:00.000000', '2025-04-02 00:47:50.000000', '2025-04-02 10:33:46.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-46ad-8ed2-096210c4ae4e', '2025-04-02 00:00:00.000000', '2025-04-02 00:49:17.000000', '2025-04-02 10:34:34.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-46b9-886b-1356bae9bc26', '2025-04-02 00:00:00.000000', '2025-04-02 00:55:05.000000', '2025-04-02 10:35:59.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-46c3-8a73-f9a9a368b8b9', '2025-04-02 00:00:00.000000', '2025-04-02 00:58:12.000000', '2025-04-02 10:39:53.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-46cf-81f5-211205073442', '2025-04-02 00:00:00.000000', '2025-04-02 01:01:40.000000', '2025-04-02 10:39:15.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47b-46d9-88f8-ea7f711624ba', '2025-04-02 00:00:00.000000', '2025-04-02 01:05:36.000000', '2025-04-02 10:11:59.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47b-46e3-8695-7a7552140375', '2025-04-02 00:00:00.000000', '2025-04-02 01:05:47.000000', '2025-04-02 07:51:06.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-46ec-8fcd-7dd3704dea32', '2025-04-02 00:00:00.000000', '2025-04-02 01:06:48.000000', '2025-04-02 10:41:33.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-46f7-8883-453dbfdedddb', '2025-04-02 00:00:00.000000', '2025-04-02 01:07:26.000000', '2025-04-02 10:31:23.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4775-8f2f-cc2bdd931f77', '2025-04-02 00:00:00.000000', '2025-04-02 01:10:16.000000', '2025-04-02 10:53:47.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-478a-8952-8b2c0d495d5d', '2025-04-02 00:00:00.000000', '2025-04-02 01:12:51.000000', '2025-04-02 10:54:21.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47b-4796-83dd-305bc9394809', '2025-04-02 00:00:00.000000', '2025-04-02 01:15:14.000000', '2025-04-02 10:53:44.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-47a8-8f37-27f519b94fae', '2025-04-02 00:00:00.000000', '2025-04-02 01:15:57.000000', '2025-04-02 10:17:54.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47b-47b9-87c0-54ad3452642f', '2025-04-02 00:00:00.000000', '2025-04-02 01:16:35.000000', '2025-04-02 10:59:42.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-47c9-8b94-1dae43fbe039', '2025-04-02 00:00:00.000000', '2025-04-02 01:18:07.000000', '2025-04-02 10:53:40.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47b-47d6-8aa2-95d482bfc668', '2025-04-02 00:00:00.000000', '2025-04-02 01:18:16.000000', '2025-04-02 11:01:23.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-47e2-8a27-3ca47921bf01', '2025-04-02 00:00:00.000000', '2025-04-02 01:25:18.000000', '2025-04-02 11:50:57.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-47ef-8d8e-e2a0edb155d9', '2025-04-02 00:00:00.000000', '2025-04-02 01:29:00.000000', '2025-04-02 11:04:40.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-47fb-894f-b6764c468e76', '2025-04-02 00:00:00.000000', '2025-04-02 01:40:56.000000', '2025-04-02 11:06:33.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-4807-8b0c-12e86634bd3f', '2025-04-02 00:00:00.000000', '2025-04-02 01:46:02.000000', '2025-04-02 10:56:24.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4813-839a-19cc83d92d5f', '2025-04-02 00:00:00.000000', '2025-04-02 01:55:50.000000', '2025-04-02 09:11:55.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-481d-8898-0059288f217a', '2025-04-02 00:00:00.000000', '2025-04-02 01:57:07.000000', '2025-04-02 11:17:31.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47b-4826-8c89-3c9a6e7d3541', '2025-04-02 00:00:00.000000', '2025-04-02 02:01:28.000000', '2025-04-02 11:27:50.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4830-865c-37d2545c9fb3', '2025-04-02 00:00:00.000000', '2025-04-02 02:43:56.000000', '2025-04-02 11:01:52.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4839-85f2-2ab6974aabde', '2025-04-02 00:00:00.000000', '2025-04-02 03:13:44.000000', '2025-04-02 09:56:10.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47b-4842-819b-ec0b4e1c491e', '2025-04-02 00:00:00.000000', '2025-04-02 03:32:38.000000', '2025-04-02 11:21:02.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47b-4853-8840-30d7eeeae484', '2025-04-02 00:00:00.000000', '2025-04-02 04:18:37.000000', '2025-04-02 11:11:06.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-4864-84a5-63b166b40663', '2025-04-02 00:00:00.000000', '2025-04-02 04:43:35.000000', '2025-04-02 10:06:54.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4875-877e-fdf10b4dc820', '2025-04-02 00:00:00.000000', '2025-04-02 05:20:04.000000', '2025-04-02 11:36:43.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-4885-88ce-6cc2486e6aa1', '2025-04-02 00:00:00.000000', '2025-04-02 05:30:02.000000', '2025-04-02 08:23:58.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-4896-8057-e166f842d6c6', '2025-04-02 00:00:00.000000', '2025-04-02 05:35:50.000000', '2025-04-02 11:35:46.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47b-48a6-8b0a-105e3b8f8ec9', '2025-04-02 00:00:00.000000', '2025-04-02 05:52:54.000000', '2025-04-02 07:42:50.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47b-48b7-8d8a-bddc81083674', '2025-04-02 00:00:00.000000', '2025-04-02 06:43:19.000000', '2025-04-02 11:00:44.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-48ca-8795-5ef50f6292a9', '2025-04-03 00:00:00.000000', '2025-04-03 00:28:49.000000', '2025-04-03 10:36:03.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-48e1-8375-0b2295081671', '2025-04-03 00:00:00.000000', '2025-04-03 00:44:55.000000', '2025-04-03 10:34:13.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-48f4-8e6a-9da3d7322184', '2025-04-03 00:00:00.000000', '2025-04-03 00:46:38.000000', '2025-04-03 09:12:02.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4900-8ac4-c778ea31a631', '2025-04-03 00:00:00.000000', '2025-04-03 00:51:37.000000', '2025-04-03 10:34:39.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-490b-88dc-98e47adad047', '2025-04-03 00:00:00.000000', '2025-04-03 00:55:26.000000', '2025-04-03 11:11:03.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-4914-8f02-0d90e290012b', '2025-04-03 00:00:00.000000', '2025-04-03 00:56:27.000000', '2025-04-03 10:52:18.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-491f-830f-766db8500776', '2025-04-03 00:00:00.000000', '2025-04-03 00:56:52.000000', '2025-04-03 10:20:42.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47b-492b-8cd1-82853a63af0b', '2025-04-03 00:00:00.000000', '2025-04-03 00:57:31.000000', '2025-04-03 09:48:58.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-4935-83a9-7b35bc3378d9', '2025-04-03 00:00:00.000000', '2025-04-03 00:58:11.000000', '2025-04-03 11:27:23.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47b-493f-8c54-30aaa3e0538e', '2025-04-03 00:00:00.000000', '2025-04-03 01:00:22.000000', '2025-04-03 23:58:28.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-494b-8dd0-ec8853c4d591', '2025-04-03 00:00:00.000000', '2025-04-03 01:08:22.000000', '2025-04-03 10:44:08.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-4958-8965-c2781e314097', '2025-04-03 00:00:00.000000', '2025-04-03 01:12:20.000000', '2025-04-03 11:00:05.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47b-496e-841a-063b58f8cfb8', '2025-04-03 00:00:00.000000', '2025-04-03 01:16:53.000000', '2025-04-03 10:52:00.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47b-499c-8b34-20011167b62d', '2025-04-03 00:00:00.000000', '2025-04-03 01:17:51.000000', '2025-04-03 10:58:42.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-49b4-81b4-0eaa65d81fcc', '2025-04-03 00:00:00.000000', '2025-04-03 01:18:44.000000', '2025-04-03 10:57:50.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-49c0-8c85-f8c81f4d8d00', '2025-04-03 00:00:00.000000', '2025-04-03 01:19:00.000000', '2025-04-03 10:39:46.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-49da-8410-2a35c2b0ddaa', '2025-04-03 00:00:00.000000', '2025-04-03 01:21:33.000000', '2025-04-03 11:06:17.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-49ec-8e37-625b1c705d7f', '2025-04-03 00:00:00.000000', '2025-04-03 01:24:54.000000', '2025-04-03 10:58:27.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-49ff-804b-9d9150a8ed7f', '2025-04-03 00:00:00.000000', '2025-04-03 01:29:04.000000', '2025-04-03 10:28:11.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47b-4a0a-8865-27fbd90b1680', '2025-04-03 00:00:00.000000', '2025-04-03 01:29:47.000000', '2025-04-03 11:18:26.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47b-4a15-8319-44a6a6015f41', '2025-04-03 00:00:00.000000', '2025-04-03 01:39:26.000000', '2025-04-03 11:12:20.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-4a21-8632-85e3c76ff268', '2025-04-03 00:00:00.000000', '2025-04-03 01:45:11.000000', '2025-04-03 12:02:22.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-4a35-82a3-bca8aac46296', '2025-04-03 00:00:00.000000', '2025-04-03 01:45:15.000000', '2025-04-03 11:20:13.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-4a50-8a93-de7a0497e105', '2025-04-03 00:00:00.000000', '2025-04-03 01:46:06.000000', '2025-04-03 10:22:34.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4a79-8c64-7e2b6a076eff', '2025-04-03 00:00:00.000000', '2025-04-03 01:48:44.000000', '2025-04-03 11:30:46.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-4a8d-8acf-d5cb782f0354', '2025-04-03 00:00:00.000000', '2025-04-03 01:52:02.000000', '2025-04-03 11:28:54.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47b-4ad1-864a-2d1813e719db', '2025-04-03 00:00:00.000000', '2025-04-03 01:52:53.000000', '2025-04-03 11:30:55.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-4ae0-8f2d-d112cc4433d5', '2025-04-03 00:00:00.000000', '2025-04-03 01:53:39.000000', '2025-04-03 11:04:03.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-4af2-8176-9cb530b984f5', '2025-04-03 00:00:00.000000', '2025-04-03 01:53:54.000000', '2025-04-03 04:37:32.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4b03-8dca-975a69715b2a', '2025-04-03 00:00:00.000000', '2025-04-03 01:55:46.000000', '2025-04-03 11:01:29.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4b11-874d-4c82d9ee1a52', '2025-04-03 00:00:00.000000', '2025-04-03 02:03:28.000000', '2025-04-03 09:53:04.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-4b19-8ca6-6af625f98303', '2025-04-03 00:00:00.000000', '2025-04-03 02:18:21.000000', '2025-04-03 10:31:50.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4b21-8dbf-ce9f50732069', '2025-04-03 00:00:00.000000', '2025-04-03 02:33:26.000000', '2025-04-03 10:03:18.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4b2b-8576-97aca6734b49', '2025-04-03 00:00:00.000000', '2025-04-03 03:37:49.000000', '2025-04-03 11:29:09.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47b-4b33-8737-2442d420672e', '2025-04-04 00:00:00.000000', '2025-04-04 00:01:35.000000', '2025-04-04 07:56:52.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4b3b-8bf5-c9b56e702dd3', '2025-04-04 00:00:00.000000', '2025-04-04 00:32:27.000000', '2025-04-04 07:04:38.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-4b44-8604-cff7faf4bc9c', '2025-04-04 00:00:00.000000', '2025-04-04 00:40:57.000000', '2025-04-04 08:02:07.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-4b51-8eca-a66431f5d6d5', '2025-04-04 00:00:00.000000', '2025-04-04 00:45:23.000000', '2025-04-04 09:43:19.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-4b66-89f0-0dfb42a154ca', '2025-04-04 00:00:00.000000', '2025-04-04 00:49:57.000000', '2025-04-04 09:27:47.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4bb6-86d2-f8c02e5b2393', '2025-04-04 00:00:00.000000', '2025-04-04 00:50:12.000000', '2025-04-04 06:38:11.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-4bce-89a7-f1c0563f1593', '2025-04-04 00:00:00.000000', '2025-04-04 00:52:21.000000', '2025-04-04 08:19:48.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-4be0-8789-99b2feea4f3e', '2025-04-04 00:00:00.000000', '2025-04-04 00:53:20.000000', '2025-04-04 08:34:16.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-4bef-8729-a6f861063568', '2025-04-04 00:00:00.000000', '2025-04-04 00:55:51.000000', '2025-04-04 07:58:55.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47b-4bfd-8735-86602d437c8d', '2025-04-04 00:00:00.000000', '2025-04-04 00:58:19.000000', '2025-04-04 08:33:29.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-4c0b-8663-261667d01bb0', '2025-04-04 00:00:00.000000', '2025-04-04 00:58:53.000000', '2025-04-04 05:09:06.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47b-4c1b-8a89-daefdd3a3f81', '2025-04-04 00:00:00.000000', '2025-04-04 01:01:17.000000', '2025-04-04 06:41:49.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4c2a-8f6a-2aafcaa4098d', '2025-04-04 00:00:00.000000', '2025-04-04 01:01:50.000000', '2025-04-04 10:37:01.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47b-4c35-8f98-21c7b0c750d6', '2025-04-04 00:00:00.000000', '2025-04-04 01:08:32.000000', '2025-04-04 05:12:01.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47b-4c40-8e6a-8ea21f84aec7', '2025-04-04 00:00:00.000000', '2025-04-04 01:09:40.000000', '2025-04-04 11:07:03.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-4c4d-8f2f-20e1de9d0101', '2025-04-04 00:00:00.000000', '2025-04-04 01:11:17.000000', '2025-04-04 08:27:43.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4c57-8b50-f22ec681e4ab', '2025-04-04 00:00:00.000000', '2025-04-04 01:12:15.000000', '2025-04-04 08:32:14.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4c60-8a95-198553acc55a', '2025-04-04 00:00:00.000000', '2025-04-04 01:13:06.000000', '2025-04-04 11:27:39.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47b-4c69-8400-1172fe1f1a86', '2025-04-04 00:00:00.000000', '2025-04-04 01:14:58.000000', '2025-04-04 09:24:04.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47b-4c89-8c68-3f5ddd91b8c0', '2025-04-04 00:00:00.000000', '2025-04-04 01:15:25.000000', '2025-04-04 11:06:40.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-4c9f-8baa-bc4cc4022233', '2025-04-04 00:00:00.000000', '2025-04-04 01:23:30.000000', '2025-04-04 10:57:00.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-4cab-86bd-6bf8b20487aa', '2025-04-04 00:00:00.000000', '2025-04-04 01:26:03.000000', '2025-04-04 10:58:33.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-4cb6-8f3a-e2cbab8a3a6a', '2025-04-04 00:00:00.000000', '2025-04-04 01:27:15.000000', '2025-04-04 11:41:46.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-4cc8-83e7-bc319c7f0b9c', '2025-04-04 00:00:00.000000', '2025-04-04 01:32:58.000000', '2025-04-04 08:36:44.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4cd3-8d75-b15c4d227aab', '2025-04-04 00:00:00.000000', '2025-04-04 01:36:29.000000', '2025-04-04 11:17:05.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-4ce3-8442-a68d7ac19ebd', '2025-04-04 00:00:00.000000', '2025-04-04 01:37:06.000000', '2025-04-04 11:16:03.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-4cee-85b9-ba79d168cf68', '2025-04-04 00:00:00.000000', '2025-04-04 01:41:09.000000', '2025-04-04 08:25:09.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47b-4cf9-8eda-d9f1366a3fe3', '2025-04-04 00:00:00.000000', '2025-04-04 01:47:28.000000', '2025-04-04 11:22:16.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-4d04-8ed7-4b7f1c507d91', '2025-04-04 00:00:00.000000', '2025-04-04 01:48:10.000000', '2025-04-04 11:34:05.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4d0f-8978-bc558ddb9709', '2025-04-04 00:00:00.000000', '2025-04-04 01:54:57.000000', '2025-04-04 11:03:20.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-4d1a-864d-0406dea81c50', '2025-04-04 00:00:00.000000', '2025-04-04 01:56:43.000000', '2025-04-04 11:29:16.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47b-4d25-858a-73008abc5839', '2025-04-04 00:00:00.000000', '2025-04-04 01:57:16.000000', '2025-04-04 13:36:28.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-4d30-84d6-542398721219', '2025-04-04 00:00:00.000000', '2025-04-04 02:05:21.000000', '2025-04-04 11:36:32.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47b-4d3c-8330-3f6c48f341d2', '2025-04-04 00:00:00.000000', '2025-04-04 02:05:35.000000', '2025-04-04 11:40:58.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-4d48-8672-d6a08e161dd9', '2025-04-07 00:00:00.000000', '2025-04-07 23:56:27.000000', NULL, 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4d53-8c43-6421e0146286', '2025-04-07 00:00:00.000000', '2025-04-07 23:58:57.000000', NULL, 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4d5d-8bb0-821ddc9f4cdf', '2025-04-08 00:00:00.000000', '2025-04-08 00:40:26.000000', '2025-04-08 08:02:31.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-4d6f-805c-12c86745ee88', '2025-04-08 00:00:00.000000', '2025-04-08 00:46:14.000000', '2025-04-08 10:40:14.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-4d7d-8574-f788aebc7f70', '2025-04-08 00:00:00.000000', '2025-04-08 00:49:43.000000', '2025-04-08 10:24:28.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-4d89-8f71-de2ea60327a8', '2025-04-08 00:00:00.000000', '2025-04-08 00:50:30.000000', '2025-04-08 10:33:45.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-4d96-8b4f-7c48e0667355', '2025-04-08 00:00:00.000000', '2025-04-08 00:53:44.000000', '2025-04-08 10:45:58.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47b-4da4-8945-deb3567f1e14', '2025-04-08 00:00:00.000000', '2025-04-08 00:54:39.000000', '2025-04-08 08:32:58.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4db6-851e-3e52eac4e145', '2025-04-08 00:00:00.000000', '2025-04-08 00:56:12.000000', '2025-04-08 10:38:16.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-4dc6-8224-01ac4ab08753', '2025-04-08 00:00:00.000000', '2025-04-08 00:56:56.000000', '2025-04-08 09:40:46.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4dd0-8dfb-96c8b3e497d9', '2025-04-08 00:00:00.000000', '2025-04-08 00:59:04.000000', '2025-04-08 09:57:56.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-4ddb-81bc-d4ae6c149d10', '2025-04-08 00:00:00.000000', '2025-04-08 00:59:33.000000', '2025-04-08 09:27:39.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4df4-837a-312aa71b9c37', '2025-04-08 00:00:00.000000', '2025-04-08 01:00:23.000000', '2025-04-08 08:20:30.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4dfd-8ace-0bcace2cd5f2', '2025-04-08 00:00:00.000000', '2025-04-08 01:04:46.000000', '2025-04-08 10:43:54.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-4e06-8bf3-e680b6e5141a', '2025-04-08 00:00:00.000000', '2025-04-08 01:10:43.000000', '2025-04-08 10:49:46.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47b-4e10-8dfd-6aa24ddbb017', '2025-04-08 00:00:00.000000', '2025-04-08 01:12:01.000000', '2025-04-08 10:55:27.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-4e1a-8a89-2c431a8c3a72', '2025-04-08 00:00:00.000000', '2025-04-08 01:14:39.000000', '2025-04-08 10:51:16.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-4e24-843b-5a8a033a6778', '2025-04-08 00:00:00.000000', '2025-04-08 01:19:20.000000', '2025-04-08 10:53:20.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-4e2d-8fac-fe00310a8df1', '2025-04-08 00:00:00.000000', '2025-04-08 01:21:18.000000', '2025-04-08 10:26:49.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4e37-8555-f01ddc2ba856', '2025-04-08 00:00:00.000000', '2025-04-08 01:23:07.000000', '2025-04-08 11:18:04.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47b-4e41-8448-a6908242577b', '2025-04-08 00:00:00.000000', '2025-04-08 01:23:52.000000', '2025-04-08 10:00:24.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-4e4b-8d98-f99d83b0a531', '2025-04-08 00:00:00.000000', '2025-04-08 01:33:34.000000', '2025-04-08 11:27:28.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47b-4e55-8113-ba94074a48b3', '2025-04-08 00:00:00.000000', '2025-04-08 01:34:57.000000', '2025-04-08 11:07:51.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-4e5e-8f06-824d6f5bcab4', '2025-04-08 00:00:00.000000', '2025-04-08 01:43:52.000000', '2025-04-08 11:03:08.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-4e68-8c3a-9c8562ef17cf', '2025-04-08 00:00:00.000000', '2025-04-08 01:44:54.000000', '2025-04-08 09:53:51.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4e73-8430-2f148d7a08f9', '2025-04-08 00:00:00.000000', '2025-04-08 01:46:53.000000', '2025-04-08 11:07:26.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4e7c-8895-717b61868611', '2025-04-08 00:00:00.000000', '2025-04-08 01:55:57.000000', '2025-04-08 11:29:37.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-4e85-85a7-81760a8e258e', '2025-04-08 00:00:00.000000', '2025-04-08 01:56:19.000000', '2025-04-08 11:51:42.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-4e8e-8760-5830754eac4b', '2025-04-08 00:00:00.000000', '2025-04-08 01:56:19.000000', '2025-04-08 11:08:32.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-4e98-8d12-d041692bbe9a', '2025-04-08 00:00:00.000000', '2025-04-08 02:05:07.000000', '2025-04-08 12:39:08.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-4ea1-8f31-6b4cb8d17416', '2025-04-08 00:00:00.000000', '2025-04-08 02:05:50.000000', '2025-04-08 11:41:30.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47b-4eab-8778-0f330e212918', '2025-04-08 00:00:00.000000', '2025-04-08 02:09:46.000000', '2025-04-08 10:26:18.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-4eb4-8a84-dbb2e4f566d3', '2025-04-08 00:00:00.000000', '2025-04-08 02:31:23.000000', '2025-04-08 11:35:05.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47b-4ebe-826d-e302f049c4ad', '2025-04-08 00:00:00.000000', '2025-04-08 02:41:38.000000', '2025-04-08 11:19:04.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-4ec6-8af3-8286b977439d', '2025-04-08 00:00:00.000000', '2025-04-08 03:13:49.000000', '2025-04-08 10:57:14.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47b-4ecf-82bb-8757e16e3987', '2025-04-09 00:00:00.000000', '2025-04-09 00:13:27.000000', '2025-04-09 10:34:58.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47b-4ed7-8134-3024f8122c61', '2025-04-09 00:00:00.000000', '2025-04-09 00:33:54.000000', '2025-04-09 07:14:12.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47b-4edf-8f8a-df8c612f8f87', '2025-04-09 00:00:00.000000', '2025-04-09 00:45:59.000000', '2025-04-09 10:33:56.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47b-4eec-8e2a-a00d15afee70', '2025-04-09 00:00:00.000000', '2025-04-09 00:47:10.000000', '2025-04-09 09:19:53.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47b-4ef6-8bcf-8ac9c7a276ec', '2025-04-09 00:00:00.000000', '2025-04-09 00:49:33.000000', '2025-04-09 10:30:39.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47b-4eff-8dbd-e88fb282fd5c', '2025-04-09 00:00:00.000000', '2025-04-09 00:53:01.000000', '2025-04-09 07:38:03.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47b-4f09-8701-c2102bad0632', '2025-04-09 00:00:00.000000', '2025-04-09 00:59:09.000000', '2025-04-09 11:40:00.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47b-4f14-861e-e4ad3a80d61d', '2025-04-09 00:00:00.000000', '2025-04-09 00:59:45.000000', '2025-04-09 08:15:03.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47b-4f1d-8d8c-64667597361c', '2025-04-09 00:00:00.000000', '2025-04-09 01:00:16.000000', '2025-04-09 09:51:44.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47b-4f26-894f-f691bf16c821', '2025-04-09 00:00:00.000000', '2025-04-09 01:02:24.000000', '2025-04-09 10:33:31.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47b-4f2f-85a9-4219afc7b649', '2025-04-09 00:00:00.000000', '2025-04-09 01:07:22.000000', '2025-04-09 10:10:07.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47b-4f38-8c3b-5dee61f3667b', '2025-04-09 00:00:00.000000', '2025-04-09 01:07:58.000000', '2025-04-09 10:41:50.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47b-4f42-86cd-08505dfbaef7', '2025-04-09 00:00:00.000000', '2025-04-09 01:09:15.000000', '2025-04-09 10:42:24.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47b-4f4b-83e5-a81d088a3d43', '2025-04-09 00:00:00.000000', '2025-04-09 01:10:33.000000', '2025-04-09 10:41:27.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47b-4f53-8fad-c6efd0fe904d', '2025-04-09 00:00:00.000000', '2025-04-09 01:11:10.000000', '2025-04-09 06:28:44.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47b-4f5d-8079-fcb9b830ef44', '2025-04-09 00:00:00.000000', '2025-04-09 01:11:53.000000', '2025-04-09 10:50:45.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47b-4f67-8209-b9c6b9e5275d', '2025-04-09 00:00:00.000000', '2025-04-09 01:12:41.000000', '2025-04-09 12:42:46.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47b-4f70-825c-9ebef36a573b', '2025-04-09 00:00:00.000000', '2025-04-09 01:21:13.000000', '2025-04-09 06:09:10.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47b-4f78-86ce-ed2daa2bf5ff', '2025-04-09 00:00:00.000000', '2025-04-09 01:22:22.000000', '2025-04-09 10:54:38.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47b-4f80-8625-9dbf29ae2e2b', '2025-04-09 00:00:00.000000', '2025-04-09 01:22:28.000000', '2025-04-09 10:56:07.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47b-4f89-8c49-39250cc2e614', '2025-04-09 00:00:00.000000', '2025-04-09 01:24:08.000000', '2025-04-09 10:56:38.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47b-4fa0-839b-d515fe5f502c', '2025-04-09 00:00:00.000000', '2025-04-09 01:29:45.000000', '2025-04-09 10:55:27.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47b-4fac-8b38-a61c35903f6d', '2025-04-09 00:00:00.000000', '2025-04-09 01:38:32.000000', '2025-04-09 10:43:39.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47b-4fb6-8182-0ab812c5f79c', '2025-04-09 00:00:00.000000', '2025-04-09 01:41:51.000000', '2025-04-09 10:10:44.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47b-4fbe-8baa-148c891895c0', '2025-04-09 00:00:00.000000', '2025-04-09 01:42:31.000000', '2025-04-09 10:17:02.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47b-4fc7-8318-80f3961e0bac', '2025-04-09 00:00:00.000000', '2025-04-09 01:44:53.000000', '2025-04-09 09:52:52.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47b-4fd0-8b7f-f8a6f2bfb0ae', '2025-04-09 00:00:00.000000', '2025-04-09 01:51:28.000000', '2025-04-09 10:59:04.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47b-4fda-874a-1f7a3280d769', '2025-04-09 00:00:00.000000', '2025-04-09 01:52:30.000000', '2025-04-09 09:38:07.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47b-4fe3-8729-982938747c43', '2025-04-09 00:00:00.000000', '2025-04-09 01:58:54.000000', '2025-04-09 11:33:10.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47b-4fec-8098-b8a5a448e8df', '2025-04-09 00:00:00.000000', '2025-04-09 01:59:38.000000', '2025-04-09 12:11:03.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47b-4ff4-8a78-2240fc4aa92f', '2025-04-09 00:00:00.000000', '2025-04-09 02:07:28.000000', '2025-04-09 11:25:02.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47b-4ffd-8e12-10c52211a59c', '2025-04-09 00:00:00.000000', '2025-04-09 02:26:32.000000', '2025-04-09 11:05:33.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-4005-8e09-7db6b2a6709e', '2025-04-09 00:00:00.000000', '2025-04-09 03:18:43.000000', '2025-04-09 09:15:51.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-400d-8d98-5f4842613654', '2025-04-09 00:00:00.000000', '2025-04-09 03:23:45.000000', '2025-04-09 10:28:59.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-4016-85ff-fab398987be4', '2025-04-09 00:00:00.000000', '2025-04-09 03:44:53.000000', '2025-04-09 10:18:33.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-401f-8da3-128f9b282260', '2025-04-10 00:00:00.000000', '2025-04-10 00:19:04.000000', '2025-04-10 10:05:11.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-4028-8071-97d9728581a8', '2025-04-10 00:00:00.000000', '2025-04-10 00:35:55.000000', '2025-04-10 03:39:10.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-4034-8949-0e9b80b17be2', '2025-04-10 00:00:00.000000', '2025-04-10 00:46:26.000000', '2025-04-10 10:34:05.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-403e-8808-3ebd02638d7f', '2025-04-10 00:00:00.000000', '2025-04-10 00:47:08.000000', '2025-04-10 06:12:55.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-4048-899a-b817c857a22b', '2025-04-10 00:00:00.000000', '2025-04-10 00:57:56.000000', '2025-04-10 10:33:05.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47c-4051-852f-81227bdaf471', '2025-04-10 00:00:00.000000', '2025-04-10 01:01:23.000000', '2025-04-10 09:45:27.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-4059-899e-8ea511fa6daa', '2025-04-10 00:00:00.000000', '2025-04-10 01:03:01.000000', '2025-04-10 10:36:19.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-4062-8338-e43fb84594e0', '2025-04-10 00:00:00.000000', '2025-04-10 01:03:30.000000', '2025-04-10 10:38:42.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-406a-87c4-d044b89d1609', '2025-04-10 00:00:00.000000', '2025-04-10 01:05:52.000000', '2025-04-10 10:27:06.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-4073-8b94-e2597cf46e32', '2025-04-10 00:00:00.000000', '2025-04-10 01:05:55.000000', '2025-04-10 10:42:51.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-407b-8f32-2244a82f1922', '2025-04-10 00:00:00.000000', '2025-04-10 01:06:31.000000', '2025-04-10 10:35:11.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-4084-872d-fbc1bd33fdcb', '2025-04-10 00:00:00.000000', '2025-04-10 01:08:57.000000', '2025-04-10 10:56:00.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-408c-8a7d-cf11e6d1ba36', '2025-04-10 00:00:00.000000', '2025-04-10 01:09:35.000000', '2025-04-10 10:31:01.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-4095-8420-0f46079d5edb', '2025-04-10 00:00:00.000000', '2025-04-10 01:13:37.000000', '2025-04-10 10:46:37.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-409d-876d-91fa2f702f4e', '2025-04-10 00:00:00.000000', '2025-04-10 01:14:12.000000', '2025-04-10 10:46:15.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-40a5-8838-c920c6d2f0a7', '2025-04-10 00:00:00.000000', '2025-04-10 01:15:12.000000', '2025-04-10 10:21:18.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-40ad-85b4-cb96132db268', '2025-04-10 00:00:00.000000', '2025-04-10 01:19:01.000000', '2025-04-10 10:54:23.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-40b5-8c46-472c27373fe1', '2025-04-10 00:00:00.000000', '2025-04-10 01:20:42.000000', '2025-04-10 10:24:41.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47c-40be-8d82-023e2e81b65b', '2025-04-10 00:00:00.000000', '2025-04-10 01:21:18.000000', '2025-04-10 10:55:38.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-40c7-8e1f-f3272827e34a', '2025-04-10 00:00:00.000000', '2025-04-10 01:23:31.000000', '2025-04-10 11:22:08.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-40d0-8bce-0163fb4a9be8', '2025-04-10 00:00:00.000000', '2025-04-10 01:24:10.000000', '2025-04-10 05:06:14.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-40d9-82c2-dd27a6485af5', '2025-04-10 00:00:00.000000', '2025-04-10 01:25:30.000000', '2025-04-10 12:05:45.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-40e2-89f7-dd2ecc90d7a4', '2025-04-10 00:00:00.000000', '2025-04-10 01:28:24.000000', '2025-04-10 12:58:55.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47c-40eb-8b72-fb16c270d1d9', '2025-04-10 00:00:00.000000', '2025-04-10 01:28:55.000000', '2025-04-10 11:01:14.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-40f4-8578-990930b131d5', '2025-04-10 00:00:00.000000', '2025-04-10 01:34:30.000000', '2025-04-10 11:09:13.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-40fd-8166-425bbd053aa3', '2025-04-10 00:00:00.000000', '2025-04-10 01:44:46.000000', '2025-04-10 06:39:16.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-4106-8252-04ca5063c5c1', '2025-04-10 00:00:00.000000', '2025-04-10 01:45:57.000000', '2025-04-10 11:41:38.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-410f-81cc-5ecab87655fc', '2025-04-10 00:00:00.000000', '2025-04-10 01:48:20.000000', '2025-04-10 10:53:06.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-4116-8dfb-1a49c8bb1b3d', '2025-04-10 00:00:00.000000', '2025-04-10 01:51:18.000000', '2025-04-10 11:11:30.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-411f-83c6-9acc96b62082', '2025-04-10 00:00:00.000000', '2025-04-10 01:54:38.000000', '2025-04-10 08:26:55.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-4127-81ab-98195fb9db61', '2025-04-10 00:00:00.000000', '2025-04-10 01:58:19.000000', '2025-04-10 10:30:01.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-4130-8396-0d7662c480dc', '2025-04-10 00:00:00.000000', '2025-04-10 02:04:44.000000', '2025-04-10 11:35:05.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-4138-8a52-de756a436200', '2025-04-10 00:00:00.000000', '2025-04-10 02:48:29.000000', '2025-04-10 10:40:51.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-4140-8a0f-ad4791f686e3', '2025-04-10 00:00:00.000000', '2025-04-10 03:49:12.000000', '2025-04-10 10:30:23.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-4148-8985-94a30c8f0da6', '2025-04-10 00:00:00.000000', '2025-04-10 09:44:39.000000', '2025-04-10 11:17:22.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-4151-87dd-27285a6345d9', '2025-04-11 00:00:00.000000', '2025-04-11 00:05:51.000000', '2025-04-11 23:48:38.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-4159-8b99-fd63d55e88f9', '2025-04-11 00:00:00.000000', '2025-04-11 00:30:16.000000', '2025-04-11 11:10:35.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-4161-8ee8-ea626314ac33', '2025-04-11 00:00:00.000000', '2025-04-11 00:44:55.000000', '2025-04-11 09:40:17.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-4169-8f66-18965648f0a3', '2025-04-11 00:00:00.000000', '2025-04-11 00:46:28.000000', '2025-04-11 08:16:34.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-4172-8a61-26b49498ae17', '2025-04-11 00:00:00.000000', '2025-04-11 00:51:14.000000', '2025-04-11 09:22:54.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-417a-891d-e4b44b12370a', '2025-04-11 00:00:00.000000', '2025-04-11 00:54:10.000000', '2025-04-11 09:13:37.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-4182-895a-54f00db0067d', '2025-04-11 00:00:00.000000', '2025-04-11 00:56:03.000000', '2025-04-11 10:48:23.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-418a-88d5-f2e94f35f312', '2025-04-11 00:00:00.000000', '2025-04-11 00:58:44.000000', '2025-04-11 09:00:59.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-4193-87cb-40b13309d655', '2025-04-11 00:00:00.000000', '2025-04-11 00:59:11.000000', '2025-04-11 05:06:17.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-419b-8bf9-c73993934a2e', '2025-04-11 00:00:00.000000', '2025-04-11 00:59:36.000000', '2025-04-11 08:10:52.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5');
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd9d0f-b47c-41a4-849e-3a4e391d0d8a', '2025-04-11 00:00:00.000000', '2025-04-11 01:02:40.000000', '2025-04-11 10:39:28.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-41ac-8f21-de5850e51808', '2025-04-11 00:00:00.000000', '2025-04-11 01:04:24.000000', '2025-04-11 10:38:12.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-41b6-8505-9fb8504b8c02', '2025-04-11 00:00:00.000000', '2025-04-11 01:05:23.000000', '2025-04-11 07:38:49.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-41bf-8048-1001f5efa89f', '2025-04-11 00:00:00.000000', '2025-04-11 01:07:07.000000', '2025-04-11 10:42:53.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-41c7-8db7-48dc9885862c', '2025-04-11 00:00:00.000000', '2025-04-11 01:08:13.000000', '2025-04-11 09:31:52.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-41cf-8f1b-201699c627b4', '2025-04-11 00:00:00.000000', '2025-04-11 01:10:43.000000', '2025-04-11 10:53:00.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-41d8-8b4b-af694cdfb9a8', '2025-04-11 00:00:00.000000', '2025-04-11 01:11:24.000000', '2025-04-11 10:44:03.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-41e1-8b89-a7dfbfc5d31b', '2025-04-11 00:00:00.000000', '2025-04-11 01:15:43.000000', '2025-04-11 10:49:06.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47c-41eb-806b-f9db192b54f6', '2025-04-11 00:00:00.000000', '2025-04-11 01:19:12.000000', '2025-04-11 11:22:13.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-41f5-812a-53fbced4a7ae', '2025-04-11 00:00:00.000000', '2025-04-11 01:19:28.000000', '2025-04-11 10:52:17.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-41fe-83fe-c73ce25badcd', '2025-04-11 00:00:00.000000', '2025-04-11 01:20:27.000000', '2025-04-11 10:53:59.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-4207-8d9d-a81f8595f5b8', '2025-04-11 00:00:00.000000', '2025-04-11 01:21:37.000000', '2025-04-11 10:54:37.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-4211-8353-b9c7074a197f', '2025-04-11 00:00:00.000000', '2025-04-11 01:25:52.000000', '2025-04-11 10:57:45.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-421a-8eb3-aa9b0859cd47', '2025-04-11 00:00:00.000000', '2025-04-11 01:34:09.000000', '2025-04-11 11:12:48.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-4223-8d03-925a6c95efa1', '2025-04-11 00:00:00.000000', '2025-04-11 01:35:18.000000', '2025-04-11 11:09:35.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-422c-8f7b-e0e1a3f11235', '2025-04-11 00:00:00.000000', '2025-04-11 01:37:14.000000', '2025-04-11 10:24:13.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47c-4236-82df-24a61511f859', '2025-04-11 00:00:00.000000', '2025-04-11 01:39:08.000000', '2025-04-11 06:37:58.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-4240-834e-af1db851e729', '2025-04-11 00:00:00.000000', '2025-04-11 01:41:07.000000', '2025-04-11 09:13:06.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-4249-855f-469a8c75d889', '2025-04-11 00:00:00.000000', '2025-04-11 01:45:21.000000', '2025-04-11 11:33:56.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-4252-888d-38eef6ae9240', '2025-04-11 00:00:00.000000', '2025-04-11 01:46:48.000000', '2025-04-11 11:14:23.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-425b-834d-d2286a577963', '2025-04-11 00:00:00.000000', '2025-04-11 01:52:51.000000', '2025-04-11 11:28:10.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-4264-8fa3-0c0556bb746b', '2025-04-11 00:00:00.000000', '2025-04-11 02:11:35.000000', '2025-04-11 09:02:05.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-426d-890f-4c9602ba82eb', '2025-04-11 00:00:00.000000', '2025-04-11 02:31:23.000000', '2025-04-11 10:24:27.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-4275-8eb3-a5ea87506ba7', '2025-04-11 00:00:00.000000', '2025-04-11 04:27:17.000000', '2025-04-11 07:50:06.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-427e-8432-33f9bad379a4', '2025-04-11 00:00:00.000000', '2025-04-11 04:55:06.000000', '2025-04-11 08:18:41.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47c-4287-8108-5f20244083ca', '2025-04-11 00:00:00.000000', '2025-04-11 06:29:26.000000', NULL, 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-428f-82df-004439806329', '2025-04-12 00:00:00.000000', '2025-04-12 00:25:31.000000', NULL, 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-4297-83b2-3ad323f2a4b3', '2025-04-12 00:00:00.000000', '2025-04-12 01:27:58.000000', '2025-04-12 11:29:57.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-429f-8011-f029ed7c7120', '2025-04-14 00:00:00.000000', '2025-04-14 00:04:02.000000', '2025-04-14 23:36:20.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-42ac-819f-3494f6a27a42', '2025-04-14 00:00:00.000000', '2025-04-14 00:39:15.000000', '2025-04-14 10:15:32.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-42b3-8f20-0697a908ecb5', '2025-04-14 00:00:00.000000', '2025-04-14 00:40:38.000000', '2025-04-14 10:33:53.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-42bb-886c-228657b011c5', '2025-04-14 00:00:00.000000', '2025-04-14 00:44:55.000000', '2025-04-14 10:36:24.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-42c2-8a63-bd7cc0e25b5d', '2025-04-14 00:00:00.000000', '2025-04-14 00:47:19.000000', '2025-04-14 10:42:42.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47c-42ce-8c43-c82fb164fa60', '2025-04-14 00:00:00.000000', '2025-04-14 00:51:15.000000', '2025-04-14 09:09:11.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-42d9-8816-a81e8299268b', '2025-04-14 00:00:00.000000', '2025-04-14 00:54:07.000000', '2025-04-14 09:58:35.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-42e3-8f5e-cf3f34260579', '2025-04-14 00:00:00.000000', '2025-04-14 00:55:45.000000', '2025-04-14 10:32:18.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47c-42ec-8cab-4b85f5e23426', '2025-04-14 00:00:00.000000', '2025-04-14 00:57:51.000000', '2025-04-14 10:19:40.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-42fa-8bfd-2ec7461aa096', '2025-04-14 00:00:00.000000', '2025-04-14 00:59:38.000000', '2025-04-14 07:38:59.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-4304-811c-2705e1b9471a', '2025-04-14 00:00:00.000000', '2025-04-14 01:00:25.000000', '2025-04-14 10:34:15.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-430c-807e-988d792b26e0', '2025-04-14 00:00:00.000000', '2025-04-14 01:01:39.000000', '2025-04-14 10:10:05.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-4315-870f-17153c708d86', '2025-04-14 00:00:00.000000', '2025-04-14 01:01:50.000000', '2025-04-14 10:46:31.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-4320-815b-c665895997fc', '2025-04-14 00:00:00.000000', '2025-04-14 01:03:54.000000', '2025-04-14 10:37:27.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-4329-80fc-57bb2d964cd4', '2025-04-14 00:00:00.000000', '2025-04-14 01:05:02.000000', '2025-04-14 11:03:13.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-4335-8f4c-21db40b6b28d', '2025-04-14 00:00:00.000000', '2025-04-14 01:05:37.000000', '2025-04-14 11:36:05.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-4342-864a-6ae32becf8ab', '2025-04-14 00:00:00.000000', '2025-04-14 01:06:27.000000', '2025-04-14 10:39:51.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-434e-8775-80cb2fc9d7e0', '2025-04-14 00:00:00.000000', '2025-04-14 01:07:37.000000', '2025-04-14 10:35:01.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-435b-8459-009b75fd9f96', '2025-04-14 00:00:00.000000', '2025-04-14 01:11:25.000000', '2025-04-14 10:44:21.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-436d-8964-6f7668ce83b3', '2025-04-14 00:00:00.000000', '2025-04-14 01:16:24.000000', '2025-04-14 09:54:39.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-437b-82e9-ed997a892ef4', '2025-04-14 00:00:00.000000', '2025-04-14 01:18:46.000000', '2025-04-14 10:53:09.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-4387-825d-e06879f25ade', '2025-04-14 00:00:00.000000', '2025-04-14 01:19:25.000000', '2025-04-14 10:55:01.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-4392-890f-4f823b53dba7', '2025-04-14 00:00:00.000000', '2025-04-14 01:19:51.000000', '2025-04-14 05:04:10.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-439d-8704-a23fa37e955f', '2025-04-14 00:00:00.000000', '2025-04-14 01:20:43.000000', '2025-04-14 10:43:37.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-43b0-8022-b45e2c74b45f', '2025-04-14 00:00:00.000000', '2025-04-14 01:22:59.000000', '2025-04-14 10:54:13.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-43bd-806c-ce7e11c8ef66', '2025-04-14 00:00:00.000000', '2025-04-14 01:24:33.000000', '2025-04-14 11:10:43.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-43cb-8f83-79650ee0b880', '2025-04-14 00:00:00.000000', '2025-04-14 01:27:48.000000', '2025-04-14 11:39:46.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-43dd-822c-2d21317f7109', '2025-04-14 00:00:00.000000', '2025-04-14 01:32:34.000000', '2025-04-14 10:33:08.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47c-43ed-8372-1442fbfee772', '2025-04-14 00:00:00.000000', '2025-04-14 01:52:35.000000', '2025-04-14 11:17:11.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-43ff-83d1-8f9cce5944ab', '2025-04-14 00:00:00.000000', '2025-04-14 01:52:56.000000', '2025-04-14 10:46:56.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-440f-8c4b-38829183c018', '2025-04-14 00:00:00.000000', '2025-04-14 01:54:50.000000', '2025-04-14 10:12:27.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-4420-803f-902cbf750a0a', '2025-04-14 00:00:00.000000', '2025-04-14 01:56:33.000000', '2025-04-14 11:34:52.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-442f-8a24-abb599d18280', '2025-04-14 00:00:00.000000', '2025-04-14 01:57:03.000000', '2025-04-14 12:25:45.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47c-4440-8119-5b9d102a5a0e', '2025-04-14 00:00:00.000000', '2025-04-14 01:58:32.000000', '2025-04-14 08:40:45.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-4450-82a5-c5c847e193a2', '2025-04-14 00:00:00.000000', '2025-04-14 02:47:57.000000', '2025-04-14 09:59:43.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-445f-8a7b-f5d0d4454455', '2025-04-14 00:00:00.000000', '2025-04-14 02:54:44.000000', '2025-04-14 09:48:25.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-446f-8aeb-e6a4d15e0750', '2025-04-15 00:00:00.000000', '2025-04-15 00:15:03.000000', '2025-04-15 09:32:20.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-447f-8b98-fc05522bf34a', '2025-04-15 00:00:00.000000', '2025-04-15 00:17:47.000000', '2025-04-15 10:35:30.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-448e-8688-7754260a9c93', '2025-04-15 00:00:00.000000', '2025-04-15 00:40:36.000000', '2025-04-15 10:33:24.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47c-449c-873b-23cbcae74db5', '2025-04-15 00:00:00.000000', '2025-04-15 00:47:18.000000', '2025-04-15 10:35:47.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-44ab-81d2-29da794061ee', '2025-04-15 00:00:00.000000', '2025-04-15 00:52:02.000000', '2025-04-15 08:16:14.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-44bb-8560-8a730fbb67bb', '2025-04-15 00:00:00.000000', '2025-04-15 00:53:09.000000', '2025-04-15 10:07:12.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-44cd-84bf-de6e071da768', '2025-04-15 00:00:00.000000', '2025-04-15 00:53:46.000000', '2025-04-15 10:44:04.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-44de-8e06-1d3490f07a8c', '2025-04-15 00:00:00.000000', '2025-04-15 00:55:12.000000', '2025-04-15 10:37:45.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-44ef-8e01-2419d97655d6', '2025-04-15 00:00:00.000000', '2025-04-15 00:58:05.000000', '2025-04-15 09:31:43.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-4539-8a18-5bed964b9da2', '2025-04-15 00:00:00.000000', '2025-04-15 01:02:16.000000', '2025-04-15 10:45:00.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-45bd-8e49-a624660a529b', '2025-04-15 00:00:00.000000', '2025-04-15 01:02:50.000000', '2025-04-15 10:37:30.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-45d1-82de-1c5a74219af3', '2025-04-15 00:00:00.000000', '2025-04-15 01:03:11.000000', '2025-04-15 10:57:43.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-45db-8d7f-33d2ce480d85', '2025-04-15 00:00:00.000000', '2025-04-15 01:06:35.000000', '2025-04-15 10:42:38.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-45e8-80b2-77c56dea9880', '2025-04-15 00:00:00.000000', '2025-04-15 01:10:45.000000', '2025-04-15 11:06:01.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-45fa-8832-c22d732a2a85', '2025-04-15 00:00:00.000000', '2025-04-15 01:12:01.000000', '2025-04-15 07:04:35.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-4605-83f2-d2ffce0ca2c5', '2025-04-15 00:00:00.000000', '2025-04-15 01:12:46.000000', '2025-04-15 11:11:20.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47c-4613-8d96-31f047409876', '2025-04-15 00:00:00.000000', '2025-04-15 01:14:54.000000', '2025-04-15 02:38:04.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-461f-86ce-00a20ce658eb', '2025-04-15 00:00:00.000000', '2025-04-15 01:15:00.000000', '2025-04-15 10:48:08.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-462a-84db-4c2d8241e8ec', '2025-04-15 00:00:00.000000', '2025-04-15 01:18:17.000000', '2025-04-15 10:51:10.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-4633-8ec8-17bd43b80760', '2025-04-15 00:00:00.000000', '2025-04-15 01:21:47.000000', '2025-04-15 10:39:56.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47c-463d-8c73-b70710aaba47', '2025-04-15 00:00:00.000000', '2025-04-15 01:22:03.000000', '2025-04-15 10:57:13.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-4649-83cb-2ad6c626324a', '2025-04-15 00:00:00.000000', '2025-04-15 01:28:18.000000', '2025-04-15 09:57:59.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-4655-8605-a4bf72b8aacf', '2025-04-15 00:00:00.000000', '2025-04-15 01:35:26.000000', '2025-04-15 11:01:34.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-4660-82fd-666e90663669', '2025-04-15 00:00:00.000000', '2025-04-15 01:38:04.000000', '2025-04-15 11:26:15.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-4669-8c30-d6f1acef708f', '2025-04-15 00:00:00.000000', '2025-04-15 01:44:00.000000', '2025-04-15 11:25:12.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-4677-8fda-e185f235a6bc', '2025-04-15 00:00:00.000000', '2025-04-15 01:46:11.000000', '2025-04-15 11:22:43.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-4683-81dc-430676f17304', '2025-04-15 00:00:00.000000', '2025-04-15 01:48:56.000000', '2025-04-15 11:34:41.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-46c4-8218-e04a54d63632', '2025-04-15 00:00:00.000000', '2025-04-15 01:54:05.000000', '2025-04-15 11:28:49.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-4717-8282-2c4064ae45b4', '2025-04-15 00:00:00.000000', '2025-04-15 01:55:29.000000', '2025-04-15 11:10:20.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-472f-864e-28feffe6482f', '2025-04-15 00:00:00.000000', '2025-04-15 01:57:11.000000', '2025-04-15 13:05:01.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47c-473d-8fb7-1358769977e9', '2025-04-15 00:00:00.000000', '2025-04-15 01:59:06.000000', '2025-04-15 07:09:41.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47c-474f-8e1d-7addf41bc6a5', '2025-04-15 00:00:00.000000', '2025-04-15 02:00:35.000000', '2025-04-15 10:33:06.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-475b-885f-97c1938d2162', '2025-04-15 00:00:00.000000', '2025-04-15 02:15:42.000000', '2025-04-15 07:01:32.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-4766-8776-f244e09b0bf3', '2025-04-15 00:00:00.000000', '2025-04-15 02:19:09.000000', '2025-04-15 05:32:14.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-4770-81c3-49f58be64c99', '2025-04-15 00:00:00.000000', '2025-04-15 03:07:42.000000', '2025-04-15 08:18:39.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-478e-860c-19366806e027', '2025-04-15 00:00:00.000000', '2025-04-15 03:35:05.000000', '2025-04-15 11:08:22.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-47a1-8a92-744c370816f6', '2025-04-15 00:00:00.000000', '2025-04-15 03:54:25.000000', '2025-04-15 10:36:35.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-47b1-8db6-ecb260aa2c9b', '2025-04-16 00:00:00.000000', '2025-04-16 00:06:48.000000', '2025-04-16 08:40:42.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-47c2-8de3-f8c8fedb347d', '2025-04-16 00:00:00.000000', '2025-04-16 00:31:04.000000', '2025-04-16 10:36:06.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-47d3-8bd2-859e916080d1', '2025-04-16 00:00:00.000000', '2025-04-16 00:34:39.000000', '2025-04-16 09:18:35.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-47f6-8e57-82b066d45b13', '2025-04-16 00:00:00.000000', '2025-04-16 00:35:41.000000', '2025-04-16 10:38:40.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-480c-8dc0-c0523e075727', '2025-04-16 00:00:00.000000', '2025-04-16 00:48:58.000000', '2025-04-16 10:34:03.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-481e-8205-03d999fbbacd', '2025-04-16 00:00:00.000000', '2025-04-16 00:50:33.000000', '2025-04-16 10:56:23.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-4830-8d56-00734b5cdedc', '2025-04-16 00:00:00.000000', '2025-04-16 00:52:48.000000', '2025-04-16 09:05:11.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-4844-80e1-2314fcb8079c', '2025-04-16 00:00:00.000000', '2025-04-16 00:57:42.000000', '2025-04-16 08:54:19.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-4855-8ada-3b82138148c5', '2025-04-16 00:00:00.000000', '2025-04-16 00:59:22.000000', '2025-04-16 10:39:04.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-4867-80cc-be2ec21878bf', '2025-04-16 00:00:00.000000', '2025-04-16 01:03:01.000000', '2025-04-16 09:30:07.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-4878-81f9-068a94dfa8e9', '2025-04-16 00:00:00.000000', '2025-04-16 01:03:41.000000', '2025-04-16 10:37:55.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-488a-8b09-e46abdf01292', '2025-04-16 00:00:00.000000', '2025-04-16 01:04:39.000000', '2025-04-16 10:09:36.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-4898-87bd-ef7e99a6ddc1', '2025-04-16 00:00:00.000000', '2025-04-16 01:05:58.000000', '2025-04-16 10:49:46.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47c-48a3-8eb3-c7a64904d64f', '2025-04-16 00:00:00.000000', '2025-04-16 01:08:58.000000', '2025-04-16 10:28:58.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-48ae-8b18-de463d108562', '2025-04-16 00:00:00.000000', '2025-04-16 01:11:46.000000', '2025-04-16 09:59:45.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-48bd-891e-3eb19a63d432', '2025-04-16 00:00:00.000000', '2025-04-16 01:13:40.000000', '2025-04-16 09:32:11.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-48c9-862e-d49ba1d5d657', '2025-04-16 00:00:00.000000', '2025-04-16 01:16:00.000000', '2025-04-16 09:09:20.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-48d3-88cd-db949f042472', '2025-04-16 00:00:00.000000', '2025-04-16 01:16:57.000000', '2025-04-16 10:51:04.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-48dc-8ffc-7815e72ff54c', '2025-04-16 00:00:00.000000', '2025-04-16 01:19:17.000000', '2025-04-16 10:54:22.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-48e6-8c99-ab6d93ee72bb', '2025-04-16 00:00:00.000000', '2025-04-16 01:21:59.000000', '2025-04-16 10:57:56.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-48f0-8cbb-0a7755d51dbf', '2025-04-16 00:00:00.000000', '2025-04-16 01:22:17.000000', '2025-04-16 08:49:25.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-4901-8b90-71212c32b940', '2025-04-16 00:00:00.000000', '2025-04-16 01:26:38.000000', '2025-04-16 11:39:13.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47c-4912-8a5e-d13fd8925645', '2025-04-16 00:00:00.000000', '2025-04-16 01:36:08.000000', '2025-04-16 10:28:06.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-4922-8752-f91c22b806d0', '2025-04-16 00:00:00.000000', '2025-04-16 01:40:31.000000', '2025-04-16 11:38:43.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-4933-855d-13359cad0a55', '2025-04-16 00:00:00.000000', '2025-04-16 01:43:59.000000', '2025-04-16 10:55:54.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-4943-8255-8e71a7842ca2', '2025-04-16 00:00:00.000000', '2025-04-16 01:44:36.000000', '2025-04-16 11:31:12.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-4951-89f5-6b82d79b541b', '2025-04-16 00:00:00.000000', '2025-04-16 01:52:50.000000', '2025-04-16 09:17:54.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-4960-89c2-4142a16c6fdc', '2025-04-16 00:00:00.000000', '2025-04-16 01:53:01.000000', '2025-04-16 11:28:35.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-4971-868d-bcd4af10d724', '2025-04-16 00:00:00.000000', '2025-04-16 01:54:02.000000', '2025-04-16 10:31:14.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47c-4984-868d-53bec1bbed66', '2025-04-16 00:00:00.000000', '2025-04-16 02:02:16.000000', '2025-04-16 10:04:42.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-4996-85b6-2a0540aa8984', '2025-04-16 00:00:00.000000', '2025-04-16 02:03:35.000000', '2025-04-16 08:51:45.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-49ac-810b-794a8d01b0b1', '2025-04-16 00:00:00.000000', '2025-04-16 02:07:41.000000', '2025-04-16 11:28:58.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-49b8-8b6b-41c246071a9c', '2025-04-16 00:00:00.000000', '2025-04-16 04:01:58.000000', '2025-04-16 10:48:31.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-49c5-8b9a-aee9cfc75d75', '2025-04-16 00:00:00.000000', '2025-04-16 04:07:34.000000', '2025-04-16 09:45:29.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-49d6-86b5-3fb21ff89efe', '2025-04-16 00:00:00.000000', '2025-04-16 06:27:48.000000', '2025-04-16 10:06:24.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-49e2-8fdc-9105f9a3fe15', '2025-04-17 00:00:00.000000', '2025-04-17 00:16:01.000000', '2025-04-17 23:50:24.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-49fc-8329-469b4784c1dc', '2025-04-17 00:00:00.000000', '2025-04-17 00:29:16.000000', '2025-04-17 10:43:34.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-4a0e-811b-625ed9285e1b', '2025-04-17 00:00:00.000000', '2025-04-17 00:31:29.000000', '2025-04-17 08:10:40.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47c-4a1c-8b2b-a8d95f6a01c3', '2025-04-17 00:00:00.000000', '2025-04-17 00:37:59.000000', '2025-04-17 09:33:22.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-4a2b-8a74-c3e3b21816f3', '2025-04-17 00:00:00.000000', '2025-04-17 00:50:21.000000', '2025-04-17 10:34:18.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-4a39-87e8-3c60bd7b0a6f', '2025-04-17 00:00:00.000000', '2025-04-17 00:55:08.000000', '2025-04-17 04:59:38.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47c-4a48-82f9-1fc5c6bbaff2', '2025-04-17 00:00:00.000000', '2025-04-17 00:56:25.000000', '2025-04-17 10:10:41.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47c-4a59-8518-6f28d21f5557', '2025-04-17 00:00:00.000000', '2025-04-17 00:56:51.000000', '2025-04-17 10:35:52.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-4a69-8299-47097f6d6838', '2025-04-17 00:00:00.000000', '2025-04-17 00:57:26.000000', '2025-04-17 10:36:45.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47c-4a76-8cf6-b8ab332f23d7', '2025-04-17 00:00:00.000000', '2025-04-17 00:58:00.000000', '2025-04-17 10:33:59.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-4a83-8c4a-f65b9f919a17', '2025-04-17 00:00:00.000000', '2025-04-17 01:00:41.000000', '2025-04-17 10:26:45.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47c-4a92-8f29-6f29a9333d6c', '2025-04-17 00:00:00.000000', '2025-04-17 01:02:27.000000', '2025-04-17 10:11:40.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47c-4aa1-899d-a1616623976d', '2025-04-17 00:00:00.000000', '2025-04-17 01:04:06.000000', '2025-04-17 10:40:52.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47c-4ab0-8033-787ceb8c453a', '2025-04-17 00:00:00.000000', '2025-04-17 01:04:25.000000', '2025-04-17 10:42:06.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47c-4ac0-85d8-4a5af3248b77', '2025-04-17 00:00:00.000000', '2025-04-17 01:05:38.000000', '2025-04-17 10:38:45.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47c-4ad4-829c-b3187a2a572f', '2025-04-17 00:00:00.000000', '2025-04-17 01:09:49.000000', '2025-04-17 09:51:24.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47c-4ae1-8d29-33163c215a07', '2025-04-17 00:00:00.000000', '2025-04-17 01:14:13.000000', '2025-04-17 08:29:20.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47c-4aec-8456-b52b27744c8d', '2025-04-17 00:00:00.000000', '2025-04-17 01:15:12.000000', '2025-04-17 10:42:29.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47c-4af9-8e71-5ff149012835', '2025-04-17 00:00:00.000000', '2025-04-17 01:15:26.000000', '2025-04-17 11:26:33.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47c-4b0e-8636-18b5e385dddc', '2025-04-17 00:00:00.000000', '2025-04-17 01:18:17.000000', '2025-04-17 08:47:54.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47c-4b22-8e4b-626e96231e09', '2025-04-17 00:00:00.000000', '2025-04-17 01:20:27.000000', '2025-04-17 10:31:35.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47c-4b34-8d1d-7438aee268c1', '2025-04-17 00:00:00.000000', '2025-04-17 01:21:51.000000', '2025-04-17 09:39:24.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47c-4b47-80bd-1200b5a6804a', '2025-04-17 00:00:00.000000', '2025-04-17 01:22:10.000000', '2025-04-17 11:32:33.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47c-4b58-8aa1-126ece73e0b9', '2025-04-17 00:00:00.000000', '2025-04-17 01:22:35.000000', '2025-04-17 10:58:05.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47c-4b6a-8868-db0fee03d922', '2025-04-17 00:00:00.000000', '2025-04-17 01:36:48.000000', '2025-04-17 11:38:54.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47c-4b7c-852f-e5f21eb7ea04', '2025-04-17 00:00:00.000000', '2025-04-17 01:38:24.000000', '2025-04-17 11:17:04.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47c-4b8c-819e-344593757613', '2025-04-17 00:00:00.000000', '2025-04-17 01:44:15.000000', '2025-04-17 11:25:59.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47c-4ba1-8afd-4057b945d9a4', '2025-04-17 00:00:00.000000', '2025-04-17 01:49:44.000000', '2025-04-17 11:03:59.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47c-4bb2-8cad-433920bafb17', '2025-04-17 00:00:00.000000', '2025-04-17 01:51:23.000000', '2025-04-17 09:43:19.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47c-4bc8-8036-742704581c13', '2025-04-17 00:00:00.000000', '2025-04-17 01:55:31.000000', '2025-04-17 12:16:48.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47c-4ee3-85b3-e46e941d6756', '2025-04-17 00:00:00.000000', '2025-04-17 02:04:41.000000', '2025-04-17 10:15:35.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47c-4f1f-8d68-5030c0b441f8', '2025-04-17 00:00:00.000000', '2025-04-17 02:08:36.000000', '2025-04-17 10:25:01.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47c-4f34-8fbf-94177698f193', '2025-04-17 00:00:00.000000', '2025-04-17 02:10:42.000000', '2025-04-17 09:22:22.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47c-4f4a-80a1-428b33a21c01', '2025-04-17 00:00:00.000000', '2025-04-17 02:24:14.000000', '2025-04-17 12:09:39.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47c-4f5d-89b5-71343705ce00', '2025-04-17 00:00:00.000000', '2025-04-17 02:31:11.000000', '2025-04-17 11:01:32.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47c-4f6c-8017-1a005ce11f8c', '2025-04-17 00:00:00.000000', '2025-04-17 03:36:53.000000', '2025-04-17 12:10:25.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47c-4f77-8d88-d73c734a6405', '2025-04-17 00:00:00.000000', '2025-04-17 04:10:45.000000', '2025-04-17 10:09:59.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47c-4f85-8db5-64f2c61470c9', '2025-04-18 00:00:00.000000', '2025-04-18 00:32:57.000000', '2025-04-18 10:01:11.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47c-4f98-862b-34c2a7abef72', '2025-04-18 00:00:00.000000', '2025-04-18 00:34:42.000000', '2025-04-18 07:53:08.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47c-4fb3-88e7-d2daf972e54e', '2025-04-18 00:00:00.000000', '2025-04-18 00:38:09.000000', '2025-04-18 09:57:56.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47c-4fc4-897f-196db1b52adf', '2025-04-18 00:00:00.000000', '2025-04-18 00:49:54.000000', '2025-04-18 09:17:05.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47c-4fd4-8abf-c0edff89fcff', '2025-04-18 00:00:00.000000', '2025-04-18 00:55:52.000000', '2025-04-18 03:34:45.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47c-4fe1-896f-86947d01e115', '2025-04-18 00:00:00.000000', '2025-04-18 00:58:16.000000', '2025-04-18 09:04:43.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47c-4fec-8398-d6d90832ae73', '2025-04-18 00:00:00.000000', '2025-04-18 00:59:27.000000', '2025-04-18 08:13:35.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47d-4001-8dfa-b05f541daddf', '2025-04-18 00:00:00.000000', '2025-04-18 01:00:11.000000', '2025-04-18 10:02:58.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47d-4010-8205-e1f0abee576c', '2025-04-18 00:00:00.000000', '2025-04-18 01:01:29.000000', '2025-04-18 07:45:03.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47d-4172-8d48-32858f58f92e', '2025-04-18 00:00:00.000000', '2025-04-18 01:04:08.000000', '2025-04-18 08:26:50.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47d-4266-835c-e2ed9791793b', '2025-04-18 00:00:00.000000', '2025-04-18 01:04:55.000000', '2025-04-18 09:38:30.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47d-4387-8e11-87756a8268ce', '2025-04-18 00:00:00.000000', '2025-04-18 01:05:12.000000', '2025-04-18 10:44:45.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47d-43b1-8f62-6dc934c3278a', '2025-04-18 00:00:00.000000', '2025-04-18 01:05:31.000000', '2025-04-18 08:09:51.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47d-43c6-8fb3-5155682d9128', '2025-04-18 00:00:00.000000', '2025-04-18 01:08:55.000000', '2025-04-18 08:35:37.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47d-43dd-8a44-c3097e25acc2', '2025-04-18 00:00:00.000000', '2025-04-18 01:09:25.000000', '2025-04-18 08:36:22.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47d-43ef-8015-72d5de801f52', '2025-04-18 00:00:00.000000', '2025-04-18 01:12:21.000000', '2025-04-18 01:17:25.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47d-4400-81ab-3136348cc58d', '2025-04-18 00:00:00.000000', '2025-04-18 01:13:51.000000', '2025-04-18 10:49:39.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47d-4411-848b-a450f0438d91', '2025-04-18 00:00:00.000000', '2025-04-18 01:14:15.000000', '2025-04-18 09:02:13.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47d-4423-8a85-320c103c6411', '2025-04-18 00:00:00.000000', '2025-04-18 01:16:57.000000', '2025-04-18 08:43:34.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47d-443f-8ef5-a3a78eea3d9a', '2025-04-18 00:00:00.000000', '2025-04-18 01:20:17.000000', '2025-04-18 09:31:04.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47d-4450-8fec-0b6f44c1d742', '2025-04-18 00:00:00.000000', '2025-04-18 01:21:04.000000', '2025-04-18 10:00:43.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47d-4461-83ec-5286bf67f3d2', '2025-04-18 00:00:00.000000', '2025-04-18 01:21:22.000000', '2025-04-18 08:50:23.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47d-4471-86b6-2285a59fa1de', '2025-04-18 00:00:00.000000', '2025-04-18 01:21:48.000000', '2025-04-18 11:20:46.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47d-4483-86e1-c66c877ad727', '2025-04-18 00:00:00.000000', '2025-04-18 01:32:25.000000', '2025-04-18 09:18:04.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47d-4494-815d-1370b1b01ebe', '2025-04-18 00:00:00.000000', '2025-04-18 01:32:41.000000', '2025-04-18 09:24:58.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47d-44a6-8918-21905a6c8661', '2025-04-18 00:00:00.000000', '2025-04-18 01:37:12.000000', '2025-04-18 08:45:07.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47d-44b7-8dcf-7a7437b62119', '2025-04-18 00:00:00.000000', '2025-04-18 01:38:12.000000', '2025-04-18 10:39:55.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47d-44cb-8e8d-7a063b3cc524', '2025-04-18 00:00:00.000000', '2025-04-18 01:40:00.000000', '2025-04-18 09:56:49.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47d-44dd-82b3-550b2a1ccfe8', '2025-04-18 00:00:00.000000', '2025-04-18 01:40:56.000000', '2025-04-18 11:15:37.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47d-45d9-8174-64d8834881fa', '2025-04-18 00:00:00.000000', '2025-04-18 01:44:16.000000', '2025-04-18 11:25:18.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47d-4600-8d07-f29b0490d77a', '2025-04-18 00:00:00.000000', '2025-04-18 01:50:08.000000', '2025-04-18 10:02:02.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47d-460e-8f47-ddbbfed2b822', '2025-04-18 00:00:00.000000', '2025-04-18 02:05:09.000000', '2025-04-18 12:03:51.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47d-461f-8504-bffd89aaa27e', '2025-04-18 00:00:00.000000', '2025-04-18 03:07:39.000000', '2025-04-18 09:33:24.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47d-4634-8d08-0529d331e6bc', '2025-04-18 00:00:00.000000', '2025-04-18 03:28:23.000000', '2025-04-18 09:26:52.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47d-463f-8e9f-5ecfaaddb165', '2025-04-18 00:00:00.000000', '2025-04-18 03:37:49.000000', '2025-04-18 07:55:31.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47d-464a-86f1-c58ca04ed02e', '2025-04-18 00:00:00.000000', '2025-04-18 07:01:05.000000', '2025-04-18 11:07:51.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47d-4655-8c3b-3aa23a31447a', '2025-04-19 00:00:00.000000', '2025-04-19 01:24:41.000000', '2025-04-19 02:10:23.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47d-4661-860b-d0ffc8008c75', '2025-04-21 00:00:00.000000', '2025-04-21 00:07:15.000000', '2025-04-21 10:35:14.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47d-466c-8144-e96c49795e24', '2025-04-21 00:00:00.000000', '2025-04-21 00:23:13.000000', '2025-04-21 10:34:44.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47d-4677-8044-f2ace7e7e107', '2025-04-21 00:00:00.000000', '2025-04-21 00:36:30.000000', NULL, 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47d-4682-8325-4d2e15ee896b', '2025-04-21 00:00:00.000000', '2025-04-21 00:42:08.000000', '2025-04-21 10:32:00.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47d-468d-868d-2dfa39aca059', '2025-04-21 00:00:00.000000', '2025-04-21 00:43:48.000000', '2025-04-21 09:28:26.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47d-4698-8e4c-2d1047e8522a', '2025-04-21 00:00:00.000000', '2025-04-21 00:48:24.000000', '2025-04-21 08:23:23.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47d-46a2-8c98-92f754f53d0f', '2025-04-21 00:00:00.000000', '2025-04-21 00:49:45.000000', '2025-04-21 10:09:37.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47d-46b0-8f93-57c253e97476', '2025-04-21 00:00:00.000000', '2025-04-21 00:57:01.000000', '2025-04-21 07:25:31.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47d-46bd-872a-9a78a93c11d6', '2025-04-21 00:00:00.000000', '2025-04-21 00:58:48.000000', '2025-04-21 10:23:49.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47d-46c7-813a-da2fd82fbcb3', '2025-04-21 00:00:00.000000', '2025-04-21 01:06:12.000000', '2025-04-21 10:14:13.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47d-46d0-85ce-6757734770e3', '2025-04-21 00:00:00.000000', '2025-04-21 01:08:33.000000', '2025-04-21 10:32:57.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47d-46d9-89ff-3844a993b1af', '2025-04-21 00:00:00.000000', '2025-04-21 01:10:00.000000', '2025-04-21 10:49:13.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47d-46e3-8fac-0283115ce356', '2025-04-21 00:00:00.000000', '2025-04-21 01:12:09.000000', '2025-04-21 10:48:37.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47d-46ed-8ba8-0feeb0bce837', '2025-04-21 00:00:00.000000', '2025-04-21 01:13:09.000000', '2025-04-21 10:49:56.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47d-46f7-8a8a-0ec33ec76795', '2025-04-21 00:00:00.000000', '2025-04-21 01:14:15.000000', '2025-04-21 10:08:09.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47d-4701-8cfb-730674e3a330', '2025-04-21 00:00:00.000000', '2025-04-21 01:19:03.000000', '2025-04-21 10:52:30.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47d-470c-8d5f-f28710bf4abb', '2025-04-21 00:00:00.000000', '2025-04-21 01:20:41.000000', '2025-04-21 10:52:43.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47d-474a-85ae-bbdf0292d31a', '2025-04-21 00:00:00.000000', '2025-04-21 01:21:14.000000', '2025-04-21 11:43:41.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47d-4767-8aa3-635cba7f8905', '2025-04-21 00:00:00.000000', '2025-04-21 01:21:46.000000', '2025-04-21 10:57:08.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47d-4779-8457-191ea72e767d', '2025-04-21 00:00:00.000000', '2025-04-21 01:22:14.000000', '2025-04-21 11:05:43.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47d-478e-8bc8-641c59610998', '2025-04-21 00:00:00.000000', '2025-04-21 01:23:09.000000', '2025-04-21 11:03:11.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47d-47a0-81c6-44635d6a0c06', '2025-04-21 00:00:00.000000', '2025-04-21 01:28:31.000000', '2025-04-21 11:01:50.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47d-47b0-87ae-8df61b4328cc', '2025-04-21 00:00:00.000000', '2025-04-21 01:29:56.000000', '2025-04-21 10:33:55.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47d-47c1-8b9e-b0982b30e100', '2025-04-21 00:00:00.000000', '2025-04-21 01:30:20.000000', '2025-04-21 10:14:42.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47d-47d3-8326-38f5e15f8364', '2025-04-21 00:00:00.000000', '2025-04-21 01:30:49.000000', '2025-04-21 10:34:12.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47d-47e5-8574-2c88a42557ac', '2025-04-21 00:00:00.000000', '2025-04-21 01:35:43.000000', '2025-04-21 10:47:40.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47d-4816-8df6-b7cc8e7f82ab', '2025-04-21 00:00:00.000000', '2025-04-21 01:39:49.000000', '2025-04-21 10:49:34.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47d-4828-83db-3106f60dbd6a', '2025-04-21 00:00:00.000000', '2025-04-21 01:45:19.000000', '2025-04-21 11:54:54.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47d-483a-80d1-09b2dedb9809', '2025-04-21 00:00:00.000000', '2025-04-21 01:48:49.000000', '2025-04-21 11:25:56.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47d-484d-865c-97c654af1a8a', '2025-04-21 00:00:00.000000', '2025-04-21 01:49:37.000000', '2025-04-21 10:28:29.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47d-485e-8ce1-a38939fa8670', '2025-04-21 00:00:00.000000', '2025-04-21 01:55:34.000000', '2025-04-21 11:27:50.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47d-4870-8197-31756b6de339', '2025-04-21 00:00:00.000000', '2025-04-21 01:57:16.000000', '2025-04-21 11:32:04.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47d-4881-8f74-43f702ce658f', '2025-04-21 00:00:00.000000', '2025-04-21 02:05:14.000000', '2025-04-21 11:36:59.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47d-4894-8b65-9adc97d5fd21', '2025-04-21 00:00:00.000000', '2025-04-21 02:05:53.000000', '2025-04-21 12:51:14.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47d-48ae-8b61-b285f65dc111', '2025-04-21 00:00:00.000000', '2025-04-21 02:22:56.000000', '2025-04-21 11:38:36.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47d-4cff-85f6-9775ad174b6e', '2025-04-21 00:00:00.000000', '2025-04-21 02:34:24.000000', '2025-04-21 10:47:23.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47d-4d29-807e-f4803ced0318', '2025-04-21 00:00:00.000000', '2025-04-21 06:10:51.000000', '2025-04-21 11:26:46.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b47d-4d39-8124-20e3056f68e5', '2025-04-22 00:00:00.000000', '2025-04-22 00:13:28.000000', '2025-04-22 07:53:08.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47d-4d4b-8cd4-a920f967014e', '2025-04-22 00:00:00.000000', '2025-04-22 00:27:39.000000', '2025-04-22 10:39:40.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47d-4d84-88e7-5f4c64da8d6a', '2025-04-22 00:00:00.000000', '2025-04-22 00:41:10.000000', '2025-04-22 09:33:55.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47d-4dba-8859-5014243d32f0', '2025-04-22 00:00:00.000000', '2025-04-22 00:47:11.000000', '2025-04-22 09:34:40.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47d-4dc9-8b83-1607586827b4', '2025-04-22 00:00:00.000000', '2025-04-22 00:51:32.000000', '2025-04-22 09:43:56.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47d-4dd8-80fb-4b26565eb10b', '2025-04-22 00:00:00.000000', '2025-04-22 00:52:42.000000', '2025-04-22 10:24:59.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47d-4e58-8e9f-249c25b7e3cf', '2025-04-22 00:00:00.000000', '2025-04-22 00:55:24.000000', '2025-04-22 11:17:11.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47d-4e79-827d-4fafbefc2cc0', '2025-04-22 00:00:00.000000', '2025-04-22 00:59:36.000000', '2025-04-22 10:42:23.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b47d-4e8b-8178-1286705659d3', '2025-04-22 00:00:00.000000', '2025-04-22 01:03:53.000000', '2025-04-22 10:47:12.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b47d-4e9b-8e23-d3c4c1610ddf', '2025-04-22 00:00:00.000000', '2025-04-22 01:04:51.000000', '2025-04-22 08:38:29.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47d-4eb1-8bc9-abb91bc155c1', '2025-04-22 00:00:00.000000', '2025-04-22 01:08:16.000000', '2025-04-22 09:23:56.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47d-4ec3-8db4-ee61f31af6eb', '2025-04-22 00:00:00.000000', '2025-04-22 01:08:57.000000', '2025-04-22 10:41:09.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b47d-4ed4-8ce7-fab6db503da6', '2025-04-22 00:00:00.000000', '2025-04-22 01:10:33.000000', '2025-04-22 08:48:22.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b47d-4ee5-8df2-ce381de6e2ae', '2025-04-22 00:00:00.000000', '2025-04-22 01:11:12.000000', '2025-04-22 10:56:45.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47d-4ef7-8944-2ea03a6b845d', '2025-04-22 00:00:00.000000', '2025-04-22 01:11:44.000000', '2025-04-22 10:44:03.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b47d-4f08-81ce-3f42174beeee', '2025-04-22 00:00:00.000000', '2025-04-22 01:13:08.000000', '2025-04-22 10:07:49.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b47d-4f18-8c18-273cdcca09b4', '2025-04-22 00:00:00.000000', '2025-04-22 01:14:25.000000', '2025-04-22 09:59:30.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47d-4f28-8d11-6ba110131c14', '2025-04-22 00:00:00.000000', '2025-04-22 01:16:34.000000', '2025-04-22 10:50:42.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b47d-4f3b-8431-409efb19c02b', '2025-04-22 00:00:00.000000', '2025-04-22 01:18:39.000000', '2025-04-22 11:03:49.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b47d-4f4c-89ad-bb115eca38fb', '2025-04-22 00:00:00.000000', '2025-04-22 01:19:52.000000', '2025-04-22 10:51:07.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b47d-4f70-8b7d-c9094d6b7548', '2025-04-22 00:00:00.000000', '2025-04-22 01:21:11.000000', '2025-04-22 10:54:51.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b47d-4f82-8cf6-31687cb2bad0', '2025-04-22 00:00:00.000000', '2025-04-22 01:21:18.000000', '2025-04-22 09:08:15.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b47d-4f94-812e-83b7fbb42dd2', '2025-04-22 00:00:00.000000', '2025-04-22 01:29:42.000000', '2025-04-22 08:40:28.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b47d-4fa7-8c08-93d9244530a9', '2025-04-22 00:00:00.000000', '2025-04-22 01:30:53.000000', '2025-04-22 11:34:53.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b47e-400f-8928-72914b27340a', '2025-04-22 00:00:00.000000', '2025-04-22 01:32:02.000000', '2025-04-22 10:03:26.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b47e-4030-8b3f-f802d61e730b', '2025-04-22 00:00:00.000000', '2025-04-22 01:32:47.000000', '2025-04-22 11:14:32.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b47e-403f-8498-7ac36f9eecd5', '2025-04-22 00:00:00.000000', '2025-04-22 01:46:38.000000', '2025-04-22 11:43:40.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b47e-404f-8fa7-04bf08637cb3', '2025-04-22 00:00:00.000000', '2025-04-22 01:51:07.000000', '2025-04-22 11:34:41.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47e-405d-8099-e27f105eef71', '2025-04-22 00:00:00.000000', '2025-04-22 01:53:21.000000', '2025-04-22 11:28:24.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b47e-4069-8631-f6fa5b6ffb93', '2025-04-22 00:00:00.000000', '2025-04-22 01:55:42.000000', '2025-04-22 10:58:14.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b47e-4075-873b-17d665a396e6', '2025-04-22 00:00:00.000000', '2025-04-22 02:10:06.000000', '2025-04-22 09:54:57.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b47e-4082-87dc-d534654145b1', '2025-04-22 00:00:00.000000', '2025-04-22 02:20:23.000000', '2025-04-22 11:14:12.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b47e-4090-839f-881da101aa3a', '2025-04-22 00:00:00.000000', '2025-04-22 02:29:48.000000', '2025-04-22 11:45:36.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b47e-409b-8b43-b6db9dab00b3', '2025-04-22 00:00:00.000000', '2025-04-22 03:09:36.000000', '2025-04-22 10:37:51.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47e-40a6-844e-06be90e8fe68', '2025-04-22 00:00:00.000000', '2025-04-22 03:31:08.000000', '2025-04-22 11:42:45.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b47e-40b1-8816-af3bf38222a0', '2025-04-22 00:00:00.000000', '2025-04-22 05:06:23.000000', '2025-04-22 11:26:22.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e');
INSERT INTO `timesheets` (`Id`, `Date`, `StartTime`, `EndTime`, `WorkedMinutes`, `IsActive`, `UserId`) VALUES
('08dd9d0f-b47e-40be-832d-129f8ff2ed6f', '2025-04-22 00:00:00.000000', '2025-04-22 06:09:40.000000', '2025-04-22 10:02:05.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b47e-40cb-829d-7cd127441b00', '2025-04-23 00:00:00.000000', '2025-04-23 00:01:45.000000', '2025-04-23 08:32:53.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b47e-40d6-884c-4cd64a30b31f', '2025-04-23 00:00:00.000000', '2025-04-23 00:34:48.000000', '2025-04-23 10:38:05.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b47e-40e0-8ff6-cdefb6ff2546', '2025-04-23 00:00:00.000000', '2025-04-23 00:39:22.000000', '2025-04-23 05:43:57.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b47e-40ec-8912-f119f23ce90e', '2025-04-23 00:00:00.000000', '2025-04-23 00:46:16.000000', '2025-04-23 10:33:52.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b47e-40f7-899f-3ef422542055', '2025-04-23 00:00:00.000000', '2025-04-23 00:46:56.000000', '2025-04-23 10:40:22.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b47e-4101-8ff4-7dbdcec20395', '2025-04-23 00:00:00.000000', '2025-04-23 00:48:10.000000', '2025-04-23 09:16:34.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b47e-410d-89f0-26b855c7615c', '2025-04-23 00:00:00.000000', '2025-04-23 00:49:33.000000', '2025-04-23 10:07:18.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b47e-4119-836d-da497d8337b1', '2025-04-23 00:00:00.000000', '2025-04-23 00:50:24.000000', '2025-04-23 11:31:53.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b47e-4124-8819-b202a3b21c6a', '2025-04-23 00:00:00.000000', '2025-04-23 00:55:12.000000', '2025-04-23 11:04:19.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b47e-4130-8944-3218b14653be', '2025-04-23 00:00:00.000000', '2025-04-23 00:56:30.000000', '2025-04-23 10:46:14.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b47e-413b-80f2-b28aafee8def', '2025-04-23 00:00:00.000000', '2025-04-23 00:59:27.000000', '2025-04-23 10:07:00.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b47e-4146-8b07-4db5963718b7', '2025-04-23 00:00:00.000000', '2025-04-23 01:00:42.000000', '2025-04-23 10:41:07.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b47e-4154-8f74-6ca340b3c940', '2025-04-23 00:00:00.000000', '2025-04-23 01:03:01.000000', '2025-04-23 07:45:34.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b47e-4185-89f8-097afc742ffa', '2025-04-23 00:00:00.000000', '2025-04-23 01:07:16.000000', '2025-04-23 10:41:54.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b480-4674-8758-412556b8e2f3', '2025-04-23 00:00:00.000000', '2025-04-23 01:09:23.000000', '2025-04-23 09:15:05.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b480-47af-8421-543f82f28e41', '2025-04-23 00:00:00.000000', '2025-04-23 01:10:01.000000', '2025-04-23 03:25:50.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b480-487e-8f88-fa42eee35a45', '2025-04-23 00:00:00.000000', '2025-04-23 01:11:26.000000', '2025-04-23 10:48:06.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b480-49d2-85eb-fe4a1ca96b04', '2025-04-23 00:00:00.000000', '2025-04-23 01:12:39.000000', '2025-04-23 11:11:45.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b480-4a1c-8a2f-0eb104bb5ccd', '2025-04-23 00:00:00.000000', '2025-04-23 01:15:58.000000', '2025-04-23 10:50:31.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b480-4a34-89f6-0ad14ae2001f', '2025-04-23 00:00:00.000000', '2025-04-23 01:16:35.000000', '2025-04-23 10:49:54.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b480-4b90-8473-b03062a9c434', '2025-04-23 00:00:00.000000', '2025-04-23 01:17:22.000000', '2025-04-23 10:32:28.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b480-4bb7-8260-32e4d7757913', '2025-04-23 00:00:00.000000', '2025-04-23 01:17:30.000000', '2025-04-23 10:50:43.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b480-4bc4-8a99-944ebd6dd556', '2025-04-23 00:00:00.000000', '2025-04-23 01:19:59.000000', '2025-04-23 06:08:22.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b480-4bcf-895a-4f0442b346ca', '2025-04-23 00:00:00.000000', '2025-04-23 01:22:17.000000', '2025-04-23 10:54:03.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b480-4bdb-86a0-05a0a6ed9de6', '2025-04-23 00:00:00.000000', '2025-04-23 01:26:19.000000', '2025-04-23 10:44:50.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b480-4bf5-8d18-b6dc73fcd008', '2025-04-23 00:00:00.000000', '2025-04-23 01:31:15.000000', '2025-04-23 09:10:38.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b480-4c67-8dfc-6aec992e5887', '2025-04-23 00:00:00.000000', '2025-04-23 01:31:32.000000', '2025-04-23 11:54:00.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b480-4c85-8a0d-d88e07e92e14', '2025-04-23 00:00:00.000000', '2025-04-23 01:36:29.000000', '2025-04-23 11:21:44.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b480-4c96-8150-f95c758169ff', '2025-04-23 00:00:00.000000', '2025-04-23 01:39:35.000000', '2025-04-23 10:11:52.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b480-4ca4-84b1-d5fa8a12f1a5', '2025-04-23 00:00:00.000000', '2025-04-23 01:46:45.000000', '2025-04-23 11:24:39.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b480-4cb0-8a36-804f7164d675', '2025-04-23 00:00:00.000000', '2025-04-23 01:56:08.000000', '2025-04-23 11:28:23.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b480-4cbb-8e83-6ff6ad4be453', '2025-04-23 00:00:00.000000', '2025-04-23 02:05:18.000000', '2025-04-23 11:02:08.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b480-4cd9-85d3-bfe9cf3179fb', '2025-04-23 00:00:00.000000', '2025-04-23 02:07:54.000000', '2025-04-23 06:28:12.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b480-4ce7-82bc-e76a550b606f', '2025-04-23 00:00:00.000000', '2025-04-23 02:09:34.000000', '2025-04-23 11:42:27.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b480-4cf4-878b-40798ed963a7', '2025-04-23 00:00:00.000000', '2025-04-23 02:42:11.000000', '2025-04-23 11:36:04.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b480-4cff-8cee-ef7ed1966d32', '2025-04-23 00:00:00.000000', '2025-04-23 05:40:37.000000', '2025-04-23 11:40:47.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b480-4d0a-8a9c-5342ff2effb3', '2025-04-24 00:00:00.000000', '2025-04-24 00:01:41.000000', '2025-04-24 10:35:21.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b480-4d16-8680-23bbd17a2c11', '2025-04-24 00:00:00.000000', '2025-04-24 00:17:58.000000', '2025-04-24 08:13:40.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b480-4d25-8473-222aa0df5f5a', '2025-04-24 00:00:00.000000', '2025-04-24 00:45:29.000000', '2025-04-24 11:07:03.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b480-4d3f-8674-87fdba814cd3', '2025-04-24 00:00:00.000000', '2025-04-24 00:48:07.000000', '2025-04-24 11:12:37.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b480-4d67-8528-a5e2a941dbd6', '2025-04-24 00:00:00.000000', '2025-04-24 00:49:59.000000', '2025-04-24 08:52:14.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b480-4d7c-88cc-f47aa1f2e199', '2025-04-24 00:00:00.000000', '2025-04-24 00:50:48.000000', '2025-04-24 10:45:51.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b480-4d96-81bf-bb684bd9cdc5', '2025-04-24 00:00:00.000000', '2025-04-24 00:52:08.000000', '2025-04-24 04:47:14.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b480-4dc1-8a57-ab84974e8469', '2025-04-24 00:00:00.000000', '2025-04-24 00:58:46.000000', '2025-04-24 10:53:23.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b480-4dda-8eeb-1c4919ea8097', '2025-04-24 00:00:00.000000', '2025-04-24 00:59:50.000000', '2025-04-24 10:51:03.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b480-4deb-8d35-5bc54e342baa', '2025-04-24 00:00:00.000000', '2025-04-24 01:00:37.000000', '2025-04-24 10:57:25.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b480-4e04-8438-a2aa04d246de', '2025-04-24 00:00:00.000000', '2025-04-24 01:01:25.000000', '2025-04-24 10:37:49.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b480-4eda-8652-617e1bbb4c5e', '2025-04-24 00:00:00.000000', '2025-04-24 01:03:10.000000', '2025-04-24 08:20:54.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b480-4f1f-8aee-cd09529d17b2', '2025-04-24 00:00:00.000000', '2025-04-24 01:07:01.000000', '2025-04-24 10:15:18.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b480-4f35-8722-0c951e92bb0b', '2025-04-24 00:00:00.000000', '2025-04-24 01:09:21.000000', '2025-04-24 10:55:19.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b480-4f4e-8973-13ec96098e39', '2025-04-24 00:00:00.000000', '2025-04-24 01:10:06.000000', '2025-04-24 10:41:23.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b480-4f59-802d-3a60e3bb20ce', '2025-04-24 00:00:00.000000', '2025-04-24 01:10:48.000000', '2025-04-24 10:26:25.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b480-4f62-8b43-74e3ae175f23', '2025-04-24 00:00:00.000000', '2025-04-24 01:13:44.000000', '2025-04-24 10:47:25.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b480-4f6b-8ff1-6f6744522d78', '2025-04-24 00:00:00.000000', '2025-04-24 01:14:27.000000', '2025-04-24 11:08:17.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b480-4f77-8369-4b74be96dffb', '2025-04-24 00:00:00.000000', '2025-04-24 01:15:30.000000', '2025-04-24 10:47:58.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b480-4f81-82e2-61560bebc4aa', '2025-04-24 00:00:00.000000', '2025-04-24 01:18:07.000000', '2025-04-24 10:50:38.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b480-4f8a-8386-a7f6af65ec2d', '2025-04-24 00:00:00.000000', '2025-04-24 01:18:58.000000', '2025-04-24 10:56:03.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b480-4f93-821f-9844a178e52c', '2025-04-24 00:00:00.000000', '2025-04-24 01:22:59.000000', '2025-04-24 10:54:58.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b480-4f9f-87ae-65def21a13ba', '2025-04-24 00:00:00.000000', '2025-04-24 01:24:39.000000', '2025-04-24 10:59:41.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b480-4fa8-86d9-53534f766a50', '2025-04-24 00:00:00.000000', '2025-04-24 01:27:29.000000', '2025-04-24 11:52:36.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b480-4fb1-8ac0-2270394d92ac', '2025-04-24 00:00:00.000000', '2025-04-24 01:32:40.000000', '2025-04-24 10:29:10.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b480-4fba-8a58-d8a881b0fe6d', '2025-04-24 00:00:00.000000', '2025-04-24 01:38:03.000000', '2025-04-24 10:38:07.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b480-4fc4-8404-d46813d355e2', '2025-04-24 00:00:00.000000', '2025-04-24 01:46:35.000000', '2025-04-24 11:06:40.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b480-4fe8-8504-4dca3538a05e', '2025-04-24 00:00:00.000000', '2025-04-24 01:47:28.000000', '2025-04-24 10:46:27.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b481-4003-8b23-a80a2e5b0eb1', '2025-04-24 00:00:00.000000', '2025-04-24 01:57:51.000000', '2025-04-24 11:34:19.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b481-4013-8243-0888bab02b42', '2025-04-24 00:00:00.000000', '2025-04-24 02:06:23.000000', '2025-04-24 10:33:08.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b481-4023-889e-f8e6f324d246', '2025-04-24 00:00:00.000000', '2025-04-24 02:06:29.000000', '2025-04-24 11:37:00.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b481-402d-88b8-06485552ba5c', '2025-04-24 00:00:00.000000', '2025-04-24 02:07:39.000000', '2025-04-24 11:39:34.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b481-4037-8498-6db103f47e11', '2025-04-24 00:00:00.000000', '2025-04-24 03:31:09.000000', '2025-04-24 11:08:23.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b481-4040-8859-65d4d13b50da', '2025-04-24 00:00:00.000000', '2025-04-24 04:17:27.000000', '2025-04-24 11:22:58.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b481-404b-81fa-4c62c8906343', '2025-04-24 00:00:00.000000', '2025-04-24 05:53:31.000000', '2025-04-24 10:58:06.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b481-4055-8e2a-68c41211445e', '2025-04-24 00:00:00.000000', '2025-04-24 07:52:51.000000', '2025-04-24 08:06:07.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b481-405f-8f32-0147b08fb3eb', '2025-04-24 00:00:00.000000', '2025-04-24 10:41:51.000000', NULL, 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b481-406a-8126-2df9eb84e63b', '2025-04-25 00:00:00.000000', '2025-04-25 00:35:36.000000', '2025-04-25 10:42:31.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b481-4076-8878-ef42a676e3d0', '2025-04-25 00:00:00.000000', '2025-04-25 00:41:35.000000', '2025-04-25 04:55:31.000000', 0, 1, 'd70a188e-33fe-428f-bb2a-cbf5aaaf3028'),
('08dd9d0f-b481-4080-87fe-6700df35c8bb', '2025-04-25 00:00:00.000000', '2025-04-25 00:45:43.000000', '2025-04-25 10:03:09.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b481-408a-89f7-5ea3f1858d64', '2025-04-25 00:00:00.000000', '2025-04-25 00:53:40.000000', '2025-04-25 09:33:10.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b481-409b-8000-3c3e7d6cca4a', '2025-04-25 00:00:00.000000', '2025-04-25 00:53:44.000000', '2025-04-25 10:01:26.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b481-40ad-8671-a888ecdd93f1', '2025-04-25 00:00:00.000000', '2025-04-25 00:57:26.000000', '2025-04-25 09:20:09.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b481-40ce-8a21-7f20d464d98a', '2025-04-25 00:00:00.000000', '2025-04-25 00:58:09.000000', '2025-04-25 08:50:37.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b481-40e9-8c6e-6e7723a6f559', '2025-04-25 00:00:00.000000', '2025-04-25 01:07:34.000000', '2025-04-25 10:50:51.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b481-40fa-84eb-d47ab96d491c', '2025-04-25 00:00:00.000000', '2025-04-25 01:10:51.000000', '2025-04-25 10:44:40.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b481-4109-82f3-31eadf3c23e9', '2025-04-25 00:00:00.000000', '2025-04-25 01:11:47.000000', '2025-04-25 09:40:43.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b481-416a-861f-db5d4c4c0c02', '2025-04-25 00:00:00.000000', '2025-04-25 01:12:49.000000', '2025-04-25 08:48:00.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b481-4180-815e-713aecd28a4d', '2025-04-25 00:00:00.000000', '2025-04-25 01:14:04.000000', '2025-04-25 10:46:04.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b481-418d-863f-66eeddff4895', '2025-04-25 00:00:00.000000', '2025-04-25 01:14:28.000000', '2025-04-25 10:47:43.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b481-4198-8fdd-7b8f462c1616', '2025-04-25 00:00:00.000000', '2025-04-25 01:15:17.000000', '2025-04-25 11:46:21.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b481-41a5-83e0-674119a452e5', '2025-04-25 00:00:00.000000', '2025-04-25 01:20:54.000000', '2025-04-25 09:13:41.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b481-41ae-8ce6-f90e331c7758', '2025-04-25 00:00:00.000000', '2025-04-25 01:23:54.000000', '2025-04-25 08:46:44.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b481-41be-829b-67f65c57d8c1', '2025-04-25 00:00:00.000000', '2025-04-25 01:24:20.000000', '2025-04-25 12:07:34.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b481-41cd-8725-32152a107cfe', '2025-04-25 00:00:00.000000', '2025-04-25 01:25:42.000000', '2025-04-25 11:02:57.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b481-4211-8f0d-a68fd6b4b28e', '2025-04-25 00:00:00.000000', '2025-04-25 01:27:11.000000', '2025-04-25 10:51:39.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b481-4248-86af-b094733d93b4', '2025-04-25 00:00:00.000000', '2025-04-25 01:27:32.000000', '2025-04-25 11:05:03.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b481-4262-8dfc-487941137163', '2025-04-25 00:00:00.000000', '2025-04-25 01:28:54.000000', '2025-04-25 09:33:29.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b481-4272-880d-862e00c4f60a', '2025-04-25 00:00:00.000000', '2025-04-25 01:31:05.000000', '2025-04-25 09:39:28.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b481-427d-8f5f-f3d5df3b4539', '2025-04-25 00:00:00.000000', '2025-04-25 01:32:38.000000', '2025-04-25 11:05:22.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b481-428d-87dc-3781d7c28244', '2025-04-25 00:00:00.000000', '2025-04-25 01:38:25.000000', '2025-04-25 10:02:15.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b481-4298-8e01-ef78b832efd1', '2025-04-25 00:00:00.000000', '2025-04-25 01:39:03.000000', '2025-04-25 09:51:57.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b481-42a3-8f29-6c0597ae894d', '2025-04-25 00:00:00.000000', '2025-04-25 01:40:16.000000', '2025-04-25 11:25:46.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b481-42ae-86ed-a3353073b799', '2025-04-25 00:00:00.000000', '2025-04-25 01:45:27.000000', '2025-04-25 08:33:44.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b481-42ba-874e-2c3c5087f67e', '2025-04-25 00:00:00.000000', '2025-04-25 01:46:53.000000', '2025-04-25 10:46:58.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b481-42d6-828e-06047d761b88', '2025-04-25 00:00:00.000000', '2025-04-25 01:54:11.000000', '2025-04-25 09:52:42.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b481-42ea-8f57-c4de24b74a46', '2025-04-25 00:00:00.000000', '2025-04-25 01:56:30.000000', '2025-04-25 11:30:53.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b481-42fe-8cbf-42265bfe56b7', '2025-04-25 00:00:00.000000', '2025-04-25 01:58:25.000000', '2025-04-25 08:28:28.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b481-4351-8649-af4ab51f1233', '2025-04-25 00:00:00.000000', '2025-04-25 02:01:29.000000', '2025-04-25 10:02:00.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b481-4365-829d-60b65576a16a', '2025-04-25 00:00:00.000000', '2025-04-25 02:03:55.000000', '2025-04-25 11:37:11.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b481-4371-8982-d111dae463ac', '2025-04-25 00:00:00.000000', '2025-04-25 02:08:03.000000', '2025-04-25 11:41:22.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b481-4381-8f37-c878eec3a88c', '2025-04-25 00:00:00.000000', '2025-04-25 02:48:57.000000', '2025-04-25 11:40:48.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b481-4390-8b51-cda7bb867f29', '2025-04-25 00:00:00.000000', '2025-04-25 02:58:04.000000', '2025-04-25 11:16:21.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b481-439b-8f8b-dcf147f33e51', '2025-04-25 00:00:00.000000', '2025-04-25 04:04:53.000000', '2025-04-25 10:45:08.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b481-43ac-8b43-c799b6dff8b3', '2025-04-26 00:00:00.000000', '2025-04-26 00:36:07.000000', '2025-04-26 09:28:04.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b481-43be-853c-b79c9c7e1368', '2025-04-26 00:00:00.000000', '2025-04-26 00:40:22.000000', '2025-04-26 10:57:38.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b481-43c9-85e7-7ecc937b9055', '2025-04-26 00:00:00.000000', '2025-04-26 01:00:03.000000', '2025-04-26 08:26:14.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b481-43d7-868b-d97bfb67ae31', '2025-04-26 00:00:00.000000', '2025-04-26 01:07:09.000000', '2025-04-26 05:09:31.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b481-43e4-8660-94a9ffc45490', '2025-04-26 00:00:00.000000', '2025-04-26 01:12:54.000000', '2025-04-26 10:51:27.000000', 0, 1, 'f4df1285-f06e-4b96-9f22-10336ed482e5'),
('08dd9d0f-b481-43f0-8b0d-e8950d3bebe8', '2025-04-26 00:00:00.000000', '2025-04-26 01:17:03.000000', '2025-04-26 09:44:04.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b481-43fc-8cf1-331136da61ac', '2025-04-26 00:00:00.000000', '2025-04-26 01:21:39.000000', '2025-04-26 09:42:29.000000', 0, 1, '00c0a23a-d208-4fef-b4c7-fa343e8f555d'),
('08dd9d0f-b481-440b-8ce1-dc9974039c96', '2025-04-26 00:00:00.000000', '2025-04-26 01:25:56.000000', '2025-04-26 11:01:28.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b481-4415-8ea8-98dc7c73b737', '2025-04-26 00:00:00.000000', '2025-04-26 01:30:42.000000', '2025-04-26 10:22:25.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b481-4420-8e66-5fa2a61096b3', '2025-04-26 00:00:00.000000', '2025-04-26 01:41:14.000000', '2025-04-26 11:17:04.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b481-442e-807e-bb3903b9c73c', '2025-04-26 00:00:00.000000', '2025-04-26 01:41:49.000000', '2025-04-26 09:27:08.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b481-4441-8a25-dbbc75e9632d', '2025-04-26 00:00:00.000000', '2025-04-26 01:45:33.000000', '2025-04-26 07:09:29.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b481-4453-8d74-c5274e5113d0', '2025-04-26 00:00:00.000000', '2025-04-26 01:49:34.000000', '2025-04-26 08:20:01.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b481-445f-8fc1-3745ca2ca629', '2025-04-26 00:00:00.000000', '2025-04-26 02:02:56.000000', '2025-04-26 11:40:31.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b481-446c-86d0-a480d8d67ec9', '2025-04-26 00:00:00.000000', '2025-04-26 02:14:30.000000', '2025-04-26 09:32:32.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b481-4478-8520-e94a388a10a9', '2025-04-26 00:00:00.000000', '2025-04-26 02:24:22.000000', '2025-04-26 10:05:51.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b481-4484-80d9-67aecfdf90e3', '2025-04-26 00:00:00.000000', '2025-04-26 02:30:52.000000', '2025-04-26 06:51:42.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b481-448f-87d3-3e6468ba1a99', '2025-04-26 00:00:00.000000', '2025-04-26 02:37:32.000000', '2025-04-26 10:56:24.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b481-449d-88e7-edf53467eb13', '2025-04-26 00:00:00.000000', '2025-04-26 02:45:11.000000', '2025-04-26 09:37:14.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b481-44a9-8a11-bdade2444b0a', '2025-04-26 00:00:00.000000', '2025-04-26 02:53:32.000000', '2025-04-26 11:37:20.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b481-44b4-8922-680e51a4b8a9', '2025-04-26 00:00:00.000000', '2025-04-26 02:57:56.000000', NULL, 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b481-44c3-88c6-901fee80e1bb', '2025-04-26 00:00:00.000000', '2025-04-26 02:59:42.000000', '2025-04-26 11:33:54.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b481-44d1-8ee4-4eee9d54edf3', '2025-04-26 00:00:00.000000', '2025-04-26 03:04:58.000000', '2025-04-26 11:24:37.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b481-44df-8e8a-0137711029ff', '2025-04-26 00:00:00.000000', '2025-04-26 03:06:05.000000', '2025-04-26 05:31:21.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b481-44ea-84e9-d59d359977ea', '2025-04-26 00:00:00.000000', '2025-04-26 03:44:31.000000', '2025-04-26 10:53:26.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b481-44f5-8677-f037b2826afc', '2025-04-26 00:00:00.000000', '2025-04-26 03:45:05.000000', '2025-04-26 10:05:04.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b481-4500-8cf7-ed5fd54f7ff5', '2025-04-26 00:00:00.000000', '2025-04-26 09:26:16.000000', '2025-04-26 09:35:32.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b481-450d-89b9-6e71f5f6f8ed', '2025-04-27 00:00:00.000000', '2025-04-27 00:57:33.000000', '2025-04-27 11:15:06.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b481-4519-80d5-636302e40c3d', '2025-04-28 00:00:00.000000', '2025-04-28 00:37:02.000000', '2025-04-28 10:34:04.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b481-4524-81c5-51b19b4e26ad', '2025-04-28 00:00:00.000000', '2025-04-28 00:37:56.000000', '2025-04-28 11:27:19.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b481-4530-8d77-b398e2748f49', '2025-04-28 00:00:00.000000', '2025-04-28 00:48:00.000000', '2025-04-28 09:35:37.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b481-453b-885b-7b6f6ae5290e', '2025-04-28 00:00:00.000000', '2025-04-28 00:49:02.000000', '2025-04-28 10:31:51.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b481-4545-88df-e0aee16e3ef4', '2025-04-28 00:00:00.000000', '2025-04-28 00:51:42.000000', '2025-04-28 10:38:28.000000', 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b481-4552-884c-6eab8cf34fa1', '2025-04-28 00:00:00.000000', '2025-04-28 00:52:29.000000', '2025-04-28 09:15:25.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b481-4566-81cb-bfd463c0043f', '2025-04-28 00:00:00.000000', '2025-04-28 00:55:21.000000', '2025-04-28 10:54:24.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b481-4572-8f36-c0071b1d0681', '2025-04-28 00:00:00.000000', '2025-04-28 00:57:00.000000', '2025-04-28 10:37:33.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b481-4582-8201-40819c38202e', '2025-04-28 00:00:00.000000', '2025-04-28 01:00:36.000000', '2025-04-28 06:59:01.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b481-458d-8d3b-d60fea553228', '2025-04-28 00:00:00.000000', '2025-04-28 01:01:55.000000', '2025-04-28 09:37:40.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b481-4598-8f6b-fd0696f8c53b', '2025-04-28 00:00:00.000000', '2025-04-28 01:04:20.000000', '2025-04-28 10:38:52.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b481-45ab-874f-69ef69c78609', '2025-04-28 00:00:00.000000', '2025-04-28 01:07:52.000000', '2025-04-28 10:53:53.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b481-45ba-8813-38c871b2cea7', '2025-04-28 00:00:00.000000', '2025-04-28 01:10:33.000000', '2025-04-28 11:06:05.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b481-45c6-829e-414c7ff67cb0', '2025-04-28 00:00:00.000000', '2025-04-28 01:16:54.000000', '2025-04-28 10:54:49.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b481-45d1-85f5-cabd534a2c03', '2025-04-28 00:00:00.000000', '2025-04-28 01:18:05.000000', '2025-04-28 10:16:58.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b481-45dc-85cd-3c2bc8440c2f', '2025-04-28 00:00:00.000000', '2025-04-28 01:19:24.000000', '2025-04-28 10:53:06.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b481-45e9-8b98-7554b3e1b7c6', '2025-04-28 00:00:00.000000', '2025-04-28 01:20:38.000000', '2025-04-28 07:55:22.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b481-45f4-8cba-6f190c372fcc', '2025-04-28 00:00:00.000000', '2025-04-28 01:24:23.000000', '2025-04-28 10:58:08.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b481-4600-87b5-5becbd0876c1', '2025-04-28 00:00:00.000000', '2025-04-28 01:26:52.000000', '2025-04-28 11:00:51.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05'),
('08dd9d0f-b481-460b-8a26-3fde375478fb', '2025-04-28 00:00:00.000000', '2025-04-28 01:32:28.000000', '2025-04-28 11:16:23.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b481-4617-85b5-139079894ea5', '2025-04-28 00:00:00.000000', '2025-04-28 01:35:50.000000', '2025-04-28 10:49:14.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b481-4623-8a03-8f15ce63844a', '2025-04-28 00:00:00.000000', '2025-04-28 01:38:47.000000', '2025-04-28 07:00:34.000000', 0, 1, '6b7f258f-53fc-4489-a46d-65566d931f8d'),
('08dd9d0f-b481-4630-89e1-5259572209b6', '2025-04-28 00:00:00.000000', '2025-04-28 01:46:46.000000', '2025-04-28 11:37:57.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b481-463b-8f00-4a8c2d120677', '2025-04-28 00:00:00.000000', '2025-04-28 01:47:18.000000', '2025-04-28 10:28:35.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b481-479e-8a07-43711069d7de', '2025-04-28 00:00:00.000000', '2025-04-28 01:51:21.000000', '2025-04-28 09:34:53.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b481-47e2-85ac-1d48830341d0', '2025-04-28 00:00:00.000000', '2025-04-28 01:52:47.000000', '2025-04-28 11:29:35.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b481-47f7-8ed6-5671b5d3f94f', '2025-04-28 00:00:00.000000', '2025-04-28 01:56:54.000000', '2025-04-28 11:43:17.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b481-4806-8952-121f02aa40c2', '2025-04-28 00:00:00.000000', '2025-04-28 01:58:06.000000', '2025-04-28 11:07:53.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b481-4824-86dc-af723b77c7ae', '2025-04-28 00:00:00.000000', '2025-04-28 02:03:24.000000', '2025-04-28 10:21:36.000000', 0, 1, '87b357f5-0929-421b-a5d0-efc735d65050'),
('08dd9d0f-b481-4844-8537-0c5c55f2d171', '2025-04-28 00:00:00.000000', '2025-04-28 02:05:36.000000', '2025-04-28 11:49:54.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b481-4856-8750-0e6975b1957f', '2025-04-28 00:00:00.000000', '2025-04-28 02:45:02.000000', '2025-04-28 11:34:36.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b481-4867-84d1-228545858134', '2025-04-28 00:00:00.000000', '2025-04-28 02:59:04.000000', '2025-04-28 09:33:04.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b481-487d-88f3-30ae1e1fb6f1', '2025-04-28 00:00:00.000000', '2025-04-28 04:12:31.000000', '2025-04-28 11:39:03.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b481-48a4-80a9-fe6afe65e4e2', '2025-04-28 00:00:00.000000', '2025-04-28 06:42:56.000000', '2025-04-28 10:50:56.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b481-48d2-87e2-2415a346c732', '2025-04-29 00:00:00.000000', '2025-04-29 00:37:05.000000', '2025-04-29 08:30:27.000000', 0, 1, '67486fce-a5f9-4a9c-8c70-887686ab5a35'),
('08dd9d0f-b481-4904-8040-77401f252b7f', '2025-04-29 00:00:00.000000', '2025-04-29 00:39:34.000000', '2025-04-29 10:22:39.000000', 0, 1, '22bb0018-cae7-400e-b055-c7498acef613'),
('08dd9d0f-b481-4919-89bc-61e498996199', '2025-04-29 00:00:00.000000', '2025-04-29 00:43:27.000000', '2025-04-29 10:34:33.000000', 0, 1, 'b4195aa9-5924-40fb-8baf-7105cad72735'),
('08dd9d0f-b481-4954-820a-614f2dfd1ba7', '2025-04-29 00:00:00.000000', '2025-04-29 00:48:46.000000', '2025-04-29 10:34:10.000000', 0, 1, '0871141b-c2f7-4f8d-b1f0-fc45729064af'),
('08dd9d0f-b481-4979-8f31-f015929649b3', '2025-04-29 00:00:00.000000', '2025-04-29 00:52:06.000000', NULL, 0, 1, 'da13f0c6-9d7d-4e63-8124-fbabb8603e54'),
('08dd9d0f-b481-499a-83d2-07017478f2d0', '2025-04-29 00:00:00.000000', '2025-04-29 00:53:33.000000', '2025-04-29 05:44:39.000000', 0, 1, '5303c036-6bf3-43a4-85ee-4012fbfc8abc'),
('08dd9d0f-b481-49aa-8af3-ec4f9486e86e', '2025-04-29 00:00:00.000000', '2025-04-29 00:55:49.000000', '2025-04-29 10:13:02.000000', 0, 1, '866960a5-a792-4343-bec2-380504c4b629'),
('08dd9d0f-b481-49bd-827c-e2ff1199acc4', '2025-04-29 00:00:00.000000', '2025-04-29 01:00:10.000000', '2025-04-29 10:37:08.000000', 0, 1, '24a71cb4-6861-44af-b731-61ac63a394dc'),
('08dd9d0f-b481-49cb-8f17-9d0e4f5b96db', '2025-04-29 00:00:00.000000', '2025-04-29 01:04:49.000000', '2025-04-29 06:28:14.000000', 0, 1, '571667ab-2080-4ab9-8aaa-3a73ff4cf3b6'),
('08dd9d0f-b481-49dd-829d-3c728ac6ab69', '2025-04-29 00:00:00.000000', '2025-04-29 01:05:12.000000', '2025-04-29 10:38:12.000000', 0, 1, '30933653-664d-4f59-b85e-9c34b98a0143'),
('08dd9d0f-b481-49ec-8490-21166faa99dd', '2025-04-29 00:00:00.000000', '2025-04-29 01:05:48.000000', '2025-04-29 10:38:42.000000', 0, 1, 'd31a29db-6f42-45cd-94c7-e1c09ff536ca'),
('08dd9d0f-b481-49fd-8b5e-bcc574bc42ac', '2025-04-29 00:00:00.000000', '2025-04-29 01:07:34.000000', '2025-04-29 10:51:55.000000', 0, 1, 'b6c6bfa3-ac44-4e84-96fe-388cf4b77ca7'),
('08dd9d0f-b481-4a10-8e08-4be994d649c0', '2025-04-29 00:00:00.000000', '2025-04-29 01:09:39.000000', '2025-04-29 10:43:23.000000', 0, 1, '10fddec3-9eff-4ba4-8ed2-1f09a61f3fdf'),
('08dd9d0f-b481-4a21-888a-9ee68ce9ce73', '2025-04-29 00:00:00.000000', '2025-04-29 01:09:53.000000', '2025-04-29 05:15:04.000000', 0, 1, '7a953140-2025-4fb5-bd1b-6bfe559440d0'),
('08dd9d0f-b481-4a30-8438-df2be125bbac', '2025-04-29 00:00:00.000000', '2025-04-29 01:16:45.000000', '2025-04-29 10:53:47.000000', 0, 1, '203312ce-95eb-48b4-a8f9-a2db51e2e4a1'),
('08dd9d0f-b481-4a40-8dfc-1f7800598588', '2025-04-29 00:00:00.000000', '2025-04-29 01:17:29.000000', '2025-04-29 05:05:19.000000', 0, 1, 'e8c512f4-0ce5-4779-8236-54284507b5d1'),
('08dd9d0f-b481-4a53-8b99-fd537a4583ad', '2025-04-29 00:00:00.000000', '2025-04-29 01:20:57.000000', '2025-04-29 09:36:28.000000', 0, 1, '7cff6920-7a31-46eb-884c-4062cca1e4a4'),
('08dd9d0f-b481-4a6d-8477-d1352e7ee3ef', '2025-04-29 00:00:00.000000', '2025-04-29 01:21:37.000000', '2025-04-29 10:56:36.000000', 0, 1, '16f8112d-f86c-488d-bd47-9d24420f6557'),
('08dd9d0f-b481-4a7c-8f1b-e068f8110626', '2025-04-29 00:00:00.000000', '2025-04-29 01:22:24.000000', '2025-04-29 10:54:40.000000', 0, 1, 'dbe03b44-8fe3-4f85-8074-02c6728e23c1'),
('08dd9d0f-b481-4a99-8c90-245871a341fe', '2025-04-29 00:00:00.000000', '2025-04-29 01:28:32.000000', '2025-04-29 11:19:09.000000', 0, 1, '5c7dfcc5-64f1-4b00-b8c4-5accaaf49b55'),
('08dd9d0f-b481-4ab6-8938-aabae6567e3c', '2025-04-29 00:00:00.000000', '2025-04-29 01:45:45.000000', '2025-04-29 11:24:19.000000', 0, 1, '920fc995-5422-4cef-bece-4087e9ddde42'),
('08dd9d0f-b481-4b5a-84d0-063ff1b6978b', '2025-04-29 00:00:00.000000', '2025-04-29 01:47:36.000000', '2025-04-29 08:11:22.000000', 0, 1, 'bbce749b-667b-4358-9271-ca892564cd90'),
('08dd9d0f-b481-4b86-80e5-7c8ecaf9252f', '2025-04-29 00:00:00.000000', '2025-04-29 01:48:06.000000', '2025-04-29 10:31:46.000000', 0, 1, 'a1dcffec-d57e-4d4a-a6b7-04abd6c06d17'),
('08dd9d0f-b481-4bba-86f7-971c81e00507', '2025-04-29 00:00:00.000000', '2025-04-29 01:53:13.000000', '2025-04-29 11:23:20.000000', 0, 1, '3d2a04c8-efe6-44f8-84d0-14becb4f9db0'),
('08dd9d0f-b481-4bd6-8d04-7d5c7bc5eb8a', '2025-04-29 00:00:00.000000', '2025-04-29 01:56:03.000000', '2025-04-29 10:41:51.000000', 0, 1, '58bdfcee-ec5f-43bd-92c6-f8811b98465b'),
('08dd9d0f-b481-4be8-8a5e-a515df5c4d5b', '2025-04-29 00:00:00.000000', '2025-04-29 01:56:58.000000', '2025-04-29 10:39:33.000000', 0, 1, 'a4052c3d-22e7-4a46-a20e-77c0401c3f8e'),
('08dd9d0f-b481-4bf4-845b-35525af5d14e', '2025-04-29 00:00:00.000000', '2025-04-29 02:03:12.000000', '2025-04-29 07:54:31.000000', 0, 1, '437064fd-b2ef-4ec7-888c-f7b0dec67d16'),
('08dd9d0f-b481-4c16-8fdc-c7bea17521aa', '2025-04-29 00:00:00.000000', '2025-04-29 02:05:54.000000', '2025-04-29 10:39:54.000000', 0, 1, '14950350-73d5-4681-a500-2046a6e41a58'),
('08dd9d0f-b481-4c49-8196-a96b5aa092f1', '2025-04-29 00:00:00.000000', '2025-04-29 02:09:53.000000', '2025-04-29 10:02:31.000000', 0, 1, '4965f420-e3be-4bcb-9f34-8a93a19a9fb5'),
('08dd9d0f-b481-4c84-8274-bf976039af51', '2025-04-29 00:00:00.000000', '2025-04-29 02:22:11.000000', '2025-04-29 08:14:17.000000', 0, 1, 'bb8fe972-04d7-43d4-94c5-76da887e4d80'),
('08dd9d0f-b481-4c93-853d-8fe800fc54b6', '2025-04-29 00:00:00.000000', '2025-04-29 04:43:04.000000', '2025-04-29 10:14:32.000000', 0, 1, 'bce414e4-70c8-407b-afb0-ed384678e08c'),
('08dd9d0f-b481-4cb4-85d8-3ec8921f3de7', '2025-04-29 00:00:00.000000', '2025-04-29 07:07:09.000000', '2025-04-29 10:40:58.000000', 0, 1, 'dc724111-a143-4f3f-8ff5-f5bfbcf79f05');

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
