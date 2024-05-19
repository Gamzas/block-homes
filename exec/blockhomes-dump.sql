-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: block-homes.kr    Database: block-homes-dev
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `chat_no` int NOT NULL AUTO_INCREMENT,
  `chat_room_no` int NOT NULL,
  `image_no` int DEFAULT NULL,
  `wallet_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `message` varchar(255) NOT NULL,
  `message_type` enum('ENTER','TALK','INFO') NOT NULL,
  PRIMARY KEY (`chat_no`),
  UNIQUE KEY `UK_b5j2n2vx5l4iy5xcmpjbrmco3` (`image_no`),
  KEY `FKnketkr5ydatqd5kfxnh1itxp0` (`chat_room_no`),
  KEY `FKn8or8uhpixlgq0eai4nxydid9` (`wallet_no`),
  CONSTRAINT `FK1io9ka90xuopqoafxgegby51p` FOREIGN KEY (`image_no`) REFERENCES `image` (`image_no`),
  CONSTRAINT `FKn8or8uhpixlgq0eai4nxydid9` FOREIGN KEY (`wallet_no`) REFERENCES `wallet` (`wallet_no`),
  CONSTRAINT `FKnketkr5ydatqd5kfxnh1itxp0` FOREIGN KEY (`chat_room_no`) REFERENCES `chat_room` (`chat_room_no`)
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chat_provision`
--

DROP TABLE IF EXISTS `chat_provision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_provision` (
  `chat_provision_no` int NOT NULL AUTO_INCREMENT,
  `chat_room_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `special_provision` enum('LIMIT_ADDITIONAL_MORTGAGE','REPAIR_COSTS_TO_OWNER','DEPOSIT_UNCONDITIONALLY_RETURN','PETS_ALLOWED','TENANT_RESTORE_DAMAGE','MONTHLY_2_TERMINATION') NOT NULL,
  PRIMARY KEY (`chat_provision_no`),
  KEY `FK1qudtqbh2puvcajily4hr04xl` (`chat_room_no`),
  CONSTRAINT `FK1qudtqbh2puvcajily4hr04xl` FOREIGN KEY (`chat_room_no`) REFERENCES `chat_room` (`chat_room_no`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_provision`
--

LOCK TABLES `chat_provision` WRITE;
/*!40000 ALTER TABLE `chat_provision` DISABLE KEYS */;
INSERT INTO `chat_provision` VALUES (1,7,'2024-05-18 16:00:45.787215','2024-05-18 16:00:45.787236','LIMIT_ADDITIONAL_MORTGAGE'),(2,7,'2024-05-18 16:00:45.789124','2024-05-18 16:00:45.789137','REPAIR_COSTS_TO_OWNER'),(3,7,'2024-05-18 16:00:45.790718','2024-05-18 16:00:45.790731','DEPOSIT_UNCONDITIONALLY_RETURN'),(4,7,'2024-05-18 16:00:45.792246','2024-05-18 16:00:45.792260','PETS_ALLOWED'),(5,7,'2024-05-18 16:01:09.442765','2024-05-18 16:01:09.442781','TENANT_RESTORE_DAMAGE'),(6,19,'2024-05-18 16:04:24.170408','2024-05-18 16:04:24.170424','LIMIT_ADDITIONAL_MORTGAGE'),(7,19,'2024-05-18 16:04:24.172302','2024-05-18 16:04:24.172317','REPAIR_COSTS_TO_OWNER'),(8,19,'2024-05-18 16:04:24.173814','2024-05-18 16:04:24.173827','DEPOSIT_UNCONDITIONALLY_RETURN'),(9,19,'2024-05-18 16:04:24.175624','2024-05-18 16:04:24.175640','PETS_ALLOWED'),(10,17,'2024-05-18 16:12:28.314418','2024-05-18 16:12:28.314436','LIMIT_ADDITIONAL_MORTGAGE'),(11,17,'2024-05-18 16:12:28.316075','2024-05-18 16:12:28.316117','REPAIR_COSTS_TO_OWNER'),(12,17,'2024-05-18 16:12:28.317482','2024-05-18 16:12:28.317494','DEPOSIT_UNCONDITIONALLY_RETURN'),(13,17,'2024-05-18 16:12:28.318778','2024-05-18 16:12:28.318791','PETS_ALLOWED'),(14,17,'2024-05-18 16:12:28.320185','2024-05-18 16:12:28.320197','TENANT_RESTORE_DAMAGE'),(15,17,'2024-05-18 16:12:46.792095','2024-05-18 16:12:46.792114','MONTHLY_2_TERMINATION'),(16,22,'2024-05-18 16:36:08.948726','2024-05-18 16:36:08.948749','LIMIT_ADDITIONAL_MORTGAGE'),(17,22,'2024-05-18 16:36:08.950379','2024-05-18 16:36:08.950393','REPAIR_COSTS_TO_OWNER'),(18,22,'2024-05-18 16:36:08.951918','2024-05-18 16:36:08.951933','DEPOSIT_UNCONDITIONALLY_RETURN'),(19,22,'2024-05-18 16:36:08.953456','2024-05-18 16:36:08.953469','PETS_ALLOWED'),(20,22,'2024-05-18 16:36:08.954750','2024-05-18 16:36:08.954763','TENANT_RESTORE_DAMAGE'),(21,23,'2024-05-18 16:57:10.539295','2024-05-18 16:57:10.539317','LIMIT_ADDITIONAL_MORTGAGE'),(22,23,'2024-05-18 16:57:10.541059','2024-05-18 16:57:10.541071','REPAIR_COSTS_TO_OWNER'),(23,23,'2024-05-18 16:57:10.542497','2024-05-18 16:57:10.542509','DEPOSIT_UNCONDITIONALLY_RETURN'),(24,23,'2024-05-18 16:57:10.544060','2024-05-18 16:57:10.544074','PETS_ALLOWED'),(25,23,'2024-05-18 16:57:42.910136','2024-05-18 16:57:42.910158','TENANT_RESTORE_DAMAGE'),(26,23,'2024-05-18 16:57:42.911749','2024-05-18 16:57:42.911761','MONTHLY_2_TERMINATION'),(27,24,'2024-05-19 04:54:21.549981','2024-05-19 04:54:21.550007','LIMIT_ADDITIONAL_MORTGAGE'),(28,24,'2024-05-19 04:54:21.551554','2024-05-19 04:54:21.551567','DEPOSIT_UNCONDITIONALLY_RETURN'),(29,24,'2024-05-19 04:54:21.552886','2024-05-19 04:54:21.552898','TENANT_RESTORE_DAMAGE'),(30,24,'2024-05-19 04:54:55.029578','2024-05-19 04:54:55.029602','PETS_ALLOWED'),(31,25,'2024-05-19 05:42:30.356026','2024-05-19 05:42:30.356050','LIMIT_ADDITIONAL_MORTGAGE'),(32,25,'2024-05-19 05:42:30.358128','2024-05-19 05:42:30.358149','REPAIR_COSTS_TO_OWNER'),(33,25,'2024-05-19 05:42:30.360454','2024-05-19 05:42:30.360476','DEPOSIT_UNCONDITIONALLY_RETURN'),(34,25,'2024-05-19 05:42:30.362461','2024-05-19 05:42:30.362487','PETS_ALLOWED'),(35,25,'2024-05-19 05:42:30.364678','2024-05-19 05:42:30.364699','TENANT_RESTORE_DAMAGE'),(36,25,'2024-05-19 05:42:30.366507','2024-05-19 05:42:30.366528','MONTHLY_2_TERMINATION'),(37,26,'2024-05-19 05:49:42.594108','2024-05-19 05:49:42.594126','LIMIT_ADDITIONAL_MORTGAGE'),(38,26,'2024-05-19 05:49:42.596021','2024-05-19 05:49:42.596035','REPAIR_COSTS_TO_OWNER'),(39,26,'2024-05-19 05:49:42.597598','2024-05-19 05:49:42.597612','DEPOSIT_UNCONDITIONALLY_RETURN'),(40,26,'2024-05-19 05:49:42.599185','2024-05-19 05:49:42.599199','PETS_ALLOWED'),(41,27,'2024-05-19 05:55:36.546367','2024-05-19 05:55:36.546387','LIMIT_ADDITIONAL_MORTGAGE'),(42,27,'2024-05-19 05:55:36.548284','2024-05-19 05:55:36.548298','REPAIR_COSTS_TO_OWNER'),(43,27,'2024-05-19 05:55:36.549935','2024-05-19 05:55:36.549950','PETS_ALLOWED'),(44,27,'2024-05-19 05:55:36.551667','2024-05-19 05:55:36.551680','TENANT_RESTORE_DAMAGE'),(45,28,'2024-05-19 05:59:13.357824','2024-05-19 05:59:13.357845','LIMIT_ADDITIONAL_MORTGAGE'),(46,28,'2024-05-19 05:59:13.359719','2024-05-19 05:59:13.359762','REPAIR_COSTS_TO_OWNER'),(47,28,'2024-05-19 05:59:13.361213','2024-05-19 05:59:13.361233','PETS_ALLOWED'),(48,28,'2024-05-19 05:59:13.362684','2024-05-19 05:59:13.362700','TENANT_RESTORE_DAMAGE'),(49,11,'2024-05-19 06:40:08.036282','2024-05-19 06:40:08.036353','LIMIT_ADDITIONAL_MORTGAGE'),(50,11,'2024-05-19 06:40:08.068281','2024-05-19 06:40:08.068296','REPAIR_COSTS_TO_OWNER'),(51,11,'2024-05-19 06:40:08.085320','2024-05-19 06:40:08.085336','DEPOSIT_UNCONDITIONALLY_RETURN'),(52,31,'2024-05-19 06:48:06.350107','2024-05-19 06:48:06.350128','DEPOSIT_UNCONDITIONALLY_RETURN'),(53,31,'2024-05-19 06:48:06.351956','2024-05-19 06:48:06.351969','PETS_ALLOWED'),(54,31,'2024-05-19 06:48:12.650174','2024-05-19 06:48:12.650197','TENANT_RESTORE_DAMAGE');
/*!40000 ALTER TABLE `chat_provision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_room`
--

DROP TABLE IF EXISTS `chat_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_room` (
  `chat_room_no` int NOT NULL AUTO_INCREMENT,
  `item_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `contract_step` enum('CONTRACT_CREATED','BUYER_CONTRACT_REQUEST','SELLER_CONTRACT_ACCEPTED','BUYER_SPECIAL_PROVISION_REQUEST','SELLER_SPECIAL_PROVISION_REQUEST','BUYER_CONTRACT_SIGNED','SELLER_CONTRACT_SIGNED','BUYER_FINAL_CHECKED','SELLER_FINAL_CHECKED') NOT NULL,
  `temp_contract_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chat_room_no`),
  KEY `FKt9xp747c443q9tqvgbhyltdcm` (`item_no`),
  CONSTRAINT `FKt9xp747c443q9tqvgbhyltdcm` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `contract_no` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `contract_address` varchar(255) NOT NULL,
  PRIMARY KEY (`contract_no`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_no` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `image_url` varchar(500) NOT NULL,
  PRIMARY KEY (`image_no`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'2024-05-16 22:45:53.382441','2024-05-16 22:45:53.382472','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/1/f32a786a-b489-41b1-ba2e-ec6b3d65e20c.jpg'),(2,'2024-05-17 07:56:36.928600','2024-05-17 07:56:36.928632','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/3/74fb13c8-6bd3-4305-98c7-0cfbc36336c3.jpg'),(3,'2024-05-17 11:34:45.443091','2024-05-17 11:34:45.443160','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/13/ea8db170-2846-4302-81a8-02e8e8978e0b.jpg'),(4,'2024-05-17 12:08:46.370187','2024-05-17 12:08:46.370224','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/14/0f96999d-ec3b-4c79-90e2-d622ceabb9d2.jpg'),(5,'2024-05-17 13:21:01.919649','2024-05-17 13:21:01.919676','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/17/59f651f8-cc2a-4a7c-9d40-8bbfda90f347.jpg'),(6,'2024-05-17 13:57:04.839149','2024-05-17 13:57:04.839189','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/18/9eefc6ac-1954-48bb-ab46-0eab648a519a.jpg'),(7,'2024-05-17 14:07:07.704812','2024-05-17 14:07:07.704853','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/19/17e43fd8-ce7a-4a18-ad80-0a93a20796a6.jpg'),(8,'2024-05-17 14:15:24.431753','2024-05-17 14:15:24.431817','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/20/9d002d4e-52f7-414e-9a44-5ae1c9533252.jpg'),(9,'2024-05-17 14:23:40.046250','2024-05-17 14:23:40.046280','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/21/0f9a73cd-983d-43a8-a8c0-300f32b993a9.jpg'),(10,'2024-05-17 14:38:11.325029','2024-05-17 14:38:11.325054','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/22/199a8a77-3ded-4111-9d61-192b9647b9a5.jpg'),(11,'2024-05-17 14:45:56.003898','2024-05-17 14:45:56.003947','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/23/554f8632-9c3a-4250-9ae8-162075b20be2.jpg'),(12,'2024-05-17 15:00:13.278583','2024-05-17 15:00:13.278632','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/24/9b03a2e9-c59f-4a8b-b25f-ad64b2e9c4b1.jpg'),(13,'2024-05-17 15:00:13.282667','2024-05-17 15:00:13.282695','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/24/2e374e12-eedc-465e-a155-0498fbee0112.jpg'),(14,'2024-05-17 15:00:13.285390','2024-05-17 15:00:13.285416','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/24/3ea246c1-6886-463c-8106-a0aabe6c3167.jpg'),(15,'2024-05-17 15:00:13.288105','2024-05-17 15:00:13.288131','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/24/5512e3fb-973f-4aa0-8847-a49146a99ead.webp'),(16,'2024-05-17 15:00:13.290484','2024-05-17 15:00:13.290518','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/24/bcbdb74a-681d-4618-92dc-9273816c7ea6.jpg'),(17,'2024-05-17 17:18:27.670008','2024-05-17 17:18:27.670036','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/25/3edc7a2e-c0c9-4700-a060-acb4fc9c3e05.jpg'),(18,'2024-05-17 17:18:27.673341','2024-05-17 17:18:27.673358','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/25/6f742a91-e4d1-4d7d-aaaa-9eab71536528.jpg'),(19,'2024-05-17 17:18:27.674968','2024-05-17 17:18:27.674982','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/25/dd0fadb0-da9e-4a9a-94a3-d666a6865296.jpg'),(20,'2024-05-17 17:18:27.676841','2024-05-17 17:18:27.676855','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/25/234128dd-0291-452a-b0fb-a04020c87972.jpg'),(21,'2024-05-17 17:18:27.678403','2024-05-17 17:18:27.678416','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/25/8a19ee87-9f33-4702-9bab-dc8d642a9068.jpg'),(22,'2024-05-17 17:20:45.282841','2024-05-17 17:20:45.282867','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/26/e6605d29-2703-49d7-8b3f-e8171f97b609.jpg'),(23,'2024-05-17 17:20:45.285532','2024-05-17 17:20:45.285535','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/26/81273689-40e3-4b98-8d45-af481423f4d7.jpg'),(24,'2024-05-17 17:20:45.287073','2024-05-17 17:20:45.287085','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/26/7ef744e9-10a0-4b6c-b62b-dba9df206a5e.jpg'),(25,'2024-05-17 17:20:45.288760','2024-05-17 17:20:45.288772','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/26/4565c3d3-4268-4365-aab8-c582f68c460b.jpg'),(26,'2024-05-17 17:20:45.290463','2024-05-17 17:20:45.290477','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/26/f1af24d6-8261-48b2-ba63-b33e9e3d6dbf.jpg'),(27,'2024-05-17 22:04:44.348238','2024-05-17 22:04:44.348286','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/27/8e5149e5-8122-4a71-b9ab-2cf201c80ac5.jpg'),(28,'2024-05-17 22:04:44.351920','2024-05-17 22:04:44.351945','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/27/1b9729ee-5b67-4a00-bbdf-e6dd6e40559d.jpg'),(29,'2024-05-17 22:04:44.353983','2024-05-17 22:04:44.354007','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/27/4ffd76ce-b054-4895-9961-dfeca69dc68a.jpg'),(30,'2024-05-17 22:04:44.356162','2024-05-17 22:04:44.356187','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/27/ddf0fb87-4e83-4bad-a2c4-17e7da0b848b.jpg'),(31,'2024-05-17 22:04:44.358055','2024-05-17 22:04:44.358081','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/27/7fcca0c0-9576-4b83-9543-c6f040c43543.jpeg'),(32,'2024-05-17 22:05:42.550651','2024-05-17 22:05:42.550715','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/28/7231f20e-66bb-4dff-89cb-abdb943a9d53.jpg'),(33,'2024-05-17 22:05:42.553601','2024-05-17 22:05:42.553625','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/28/5f7eaa73-5259-4c69-9456-13ba4b47e224.jpg'),(34,'2024-05-17 22:05:42.555513','2024-05-17 22:05:42.555536','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/28/320f21cb-3c42-479b-81c3-3d0f024f4707.jpg'),(35,'2024-05-17 22:05:42.557622','2024-05-17 22:05:42.557644','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/28/fbd5742f-4a84-4a33-8ee3-eb45f2f7387b.jpg'),(36,'2024-05-17 22:05:42.559693','2024-05-17 22:05:42.559718','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/28/f9d15d65-4857-49b0-9b29-3fdac6dbe0d7.jpeg'),(37,'2024-05-17 22:06:03.443290','2024-05-17 22:06:03.443331','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/29/2b4692e8-9605-409b-96f1-ca85d691b17b.jpg'),(38,'2024-05-17 22:06:03.446594','2024-05-17 22:06:03.446615','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/29/155d0ba6-e4a6-4485-8846-d8ba8a244c59.jpg'),(39,'2024-05-17 22:06:03.448581','2024-05-17 22:06:03.448601','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/29/28713724-d7c8-4037-b8e5-d204dddcda2a.jpg'),(40,'2024-05-17 22:06:03.450682','2024-05-17 22:06:03.450702','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/29/e01f8aaf-a8d6-4b03-8055-a1111bbc725a.jpg'),(41,'2024-05-17 22:06:03.452665','2024-05-17 22:06:03.452732','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/29/8d3fa812-ccae-40d0-84d8-18d5bbf92738.jpeg'),(42,'2024-05-17 22:06:34.082580','2024-05-17 22:06:34.082624','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/30/e6793487-c7b5-451d-b35e-0293eb087022.jpg'),(43,'2024-05-17 22:06:34.085139','2024-05-17 22:06:34.085159','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/30/b49d9866-aa21-4bcd-bf4c-805d75511d86.jpg'),(44,'2024-05-17 22:06:34.086870','2024-05-17 22:06:34.086889','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/30/dc70c34f-1bb2-4a9c-ae54-da5dcda06ceb.jpg'),(45,'2024-05-17 22:06:34.088690','2024-05-17 22:06:34.088709','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/30/0dd270c9-9b5e-43e3-a3cb-c71b98beb52a.jpg'),(46,'2024-05-17 22:06:34.090665','2024-05-17 22:06:34.090726','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/30/12eaf190-d30c-4d22-8cc4-3afc0e046786.jpeg'),(47,'2024-05-17 22:06:46.718348','2024-05-17 22:06:46.718386','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/31/02d1f20e-1c39-4f68-bd59-13164b4b61c2.jpg'),(48,'2024-05-17 22:06:46.721013','2024-05-17 22:06:46.721032','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/31/e9cd0eaa-14b5-49d8-a0b5-fecac5cd7415.jpg'),(49,'2024-05-17 22:06:46.722779','2024-05-17 22:06:46.722799','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/31/58e0c6ce-2ea5-41a1-87b4-e8eff5a0243b.jpg'),(50,'2024-05-17 22:06:46.724817','2024-05-17 22:06:46.724836','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/31/764154e5-2b71-4f41-9b8b-37449d651aa4.jpg'),(51,'2024-05-17 22:06:46.726542','2024-05-17 22:06:46.726561','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/31/1dd84362-0b20-4a15-97a3-17bdb14ea192.jpeg'),(52,'2024-05-17 23:54:53.792052','2024-05-17 23:54:53.792080','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/32/1c6d96f0-c64a-48ed-ae8b-869a941c4e51.jpg'),(53,'2024-05-17 23:54:53.795083','2024-05-17 23:54:53.795097','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/32/66225851-6210-4b2e-ae84-a66807c653f1.jpg'),(54,'2024-05-17 23:54:53.797031','2024-05-17 23:54:53.797043','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/32/c94f22a7-5a69-4ea2-a115-e2f2ee6a3d55.jpg'),(55,'2024-05-18 00:31:11.513101','2024-05-18 00:31:11.513147','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/33/837f4d42-6e95-41e4-8780-25e383aa3260.jpeg'),(56,'2024-05-18 00:50:49.689991','2024-05-18 00:50:49.690019','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/34/701208ad-2a5a-4020-b9e1-38a0cdd0008c.jpg'),(57,'2024-05-18 15:12:08.958603','2024-05-18 15:12:08.958655','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/35/e02f5b4f-7d36-4c0b-b357-e1e9eeee3a21.jpeg'),(58,'2024-05-18 13:55:00.693828','2024-05-18 13:55:00.693854','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/36/c79b1978-ba2c-4b8a-880d-130b35ce6730.jpeg'),(59,'2024-05-18 15:44:37.035409','2024-05-18 15:44:37.035429','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/37/ef897b7f-601b-4831-9060-1c7599743562.jpeg'),(60,'2024-05-19 06:46:36.633357','2024-05-19 06:46:36.633381','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/38/2e03bc97-b7d1-41ff-89b1-67c4b84db567.jpeg'),(61,'2024-05-19 06:46:36.635870','2024-05-19 06:46:36.635883','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/38/66634b8f-1043-47a1-bcd2-4caedebefc65.jpeg'),(62,'2024-05-19 06:46:36.637337','2024-05-19 06:46:36.637349','https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/items/38/500be028-a706-4c50-87b2-e07afccf648f.jpeg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `administration_cost` int NOT NULL,
  `area` double NOT NULL,
  `building_floor` int NOT NULL,
  `contract_months` int NOT NULL,
  `have_elevator` bit(1) NOT NULL,
  `item_floor` int NOT NULL,
  `item_no` int NOT NULL AUTO_INCREMENT,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `monthly_price` int NOT NULL,
  `parking_rate` double NOT NULL,
  `room_number` int NOT NULL,
  `toilet_number` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `move_in_date` datetime(6) NOT NULL,
  `price` bigint NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `real_estate_did` varchar(255) NOT NULL,
  `road_name_address` varchar(255) NOT NULL,
  `real_estate_type` enum('APARTMENT','VILLA','ONE_ROOM','OFFICE_TEL') NOT NULL,
  `report_rank` enum('SAFE','NORMAL','DANGER') NOT NULL,
  `transaction_status` enum('READY','ON_TRANSACTION','COMPLETED') NOT NULL,
  `transaction_type` enum('MONTHLY_RENT','LONG_TERM_RENT','TRADING') NOT NULL,
  `owner_wallet_no` int NOT NULL,
  PRIMARY KEY (`item_no`),
  KEY `FKs2t3srf7uvo55l1bnsdktqx5d` (`owner_wallet_no`),
  CONSTRAINT `FKs2t3srf7uvo55l1bnsdktqx5d` FOREIGN KEY (`owner_wallet_no`) REFERENCES `wallet` (`wallet_no`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (5,33,3,12,_binary '\0',3,1,35.1900186143141,126.813377377676,30,0,1,1,'2024-05-16 22:45:52.992280','2024-05-31 00:00:00.000000',200,'2024-05-16 22:45:52.992369','좋은매물입니다.','did:klay:0x00','광주광역시 광산구 장신로 20번길 13-12','APARTMENT','SAFE','READY','MONTHLY_RENT',4),(15,60,9,24,_binary '',4,13,35.1937234411548,126.814311998746,0,1.5,3,1,'2024-05-17 11:34:45.076670','2024-06-27 00:00:00.000000',2000,'2024-05-17 11:34:45.076759','주변 환경이 좋은 매물입니다. 연락주세요!!','did:klay:0x001111','광주광역시 광산구 장덕로50번길 12-3','APARTMENT','DANGER','READY','LONG_TERM_RENT',4),(20,90,22,0,_binary '',11,14,35.194070996462,126.814484257286,0,2,3,2,'2024-05-17 12:08:46.230973','2024-08-28 00:00:00.000000',23000,'2024-05-17 12:08:46.230996','연락주세요','did:klay:0x001112221','광주광역시 광산구 장덕로50번길 8','APARTMENT','NORMAL','READY','TRADING',4),(5,73,3,12,_binary '',2,17,35.1937234411548,126.814311998746,12,0,2,1,'2024-05-17 13:21:01.760125','2024-05-30 00:00:00.000000',122,'2024-05-17 13:21:01.760147','안녕하세요','did:klay:0xDDD00','광주광역시 광산구 장덕로50번길 12-3','APARTMENT','NORMAL','READY','MONTHLY_RENT',4),(5,33,3,24,_binary '\0',2,32,35.1900186143141,126.813377377676,5,0,2,1,'2024-05-17 23:54:53.395690','2024-05-30 00:00:00.000000',200,'2024-05-17 23:54:53.395714','편의점이 50분 거리에 있어요','did:klay:0x0ewfwefqewqfew0','광주광역시 광산구 장신로 20번길 13-12','APARTMENT','SAFE','READY','LONG_TERM_RENT',18),(3,23,4,6,_binary '\0',3,35,35.1932733602922,126.81381935382,30,1,1,1,'2024-05-18 15:12:08.662917','2024-05-30 00:00:00.000000',300,'2024-05-18 15:12:08.662948','크고 좋아요','did:klay:0x5cf9f8c31624c63759c152d733b46f48f9d37954','광주 광산구 풍영로229번안길 2-14','ONE_ROOM','SAFE','READY','MONTHLY_RENT',18),(0,15,3,12,_binary '\0',2,36,35.1937152451003,126.814316080085,35,1,1,1,'2024-05-18 13:55:00.570155','2024-05-24 15:00:00.000000',200,'2024-05-18 13:55:00.570174','버스 정류장 5분거리!','did:klay:0x3cac061cd8c688ffa5fa14a6d644b907e29e0fc4','광주 광산구 장덕로50번길 12-3','ONE_ROOM','SAFE','READY','MONTHLY_RENT',18),(0,25,4,12,_binary '\0',2,37,35.1933895644221,126.813656362164,0,1,1,1,'2024-05-18 15:44:36.712949','2024-05-22 15:00:00.000000',200000,'2024-05-18 15:44:36.712972','공원이 가까워요','did:klay:0x0a750ee0800feb821b3e1cd8b9174bc736b65329','광주 광산구 풍영로229번안길 2-16','ONE_ROOM','SAFE','READY','LONG_TERM_RENT',18),(0,23,1,6,_binary '\0',1,38,35.1932733602922,126.81381935382,0,0,1,1,'2024-05-19 06:46:36.251717','2024-05-24 15:00:00.000000',1,'2024-05-19 06:46:36.251739','1','did:klay:0x5cf9f8c31624c63759c152d733b46f48f9d37954','광주 광산구 풍영로229번안길 2-14','ONE_ROOM','SAFE','READY','LONG_TERM_RENT',18);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_additional_option`
--

DROP TABLE IF EXISTS `item_additional_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_additional_option` (
  `item_additional_option_no` int NOT NULL AUTO_INCREMENT,
  `item_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `option_name` enum('AIR_CONDITIONER','REFRIGERATOR','WASHING_MACHINE','GAS_RANGE','INDUCTION','MICROWAVE','DESK','BOOKSHELF','BED','CLOSET','SHOE_CLOSET','SINK') NOT NULL,
  PRIMARY KEY (`item_additional_option_no`),
  KEY `FK7dinr7rhgs00vdydijhbgnorq` (`item_no`),
  CONSTRAINT `FK7dinr7rhgs00vdydijhbgnorq` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_additional_option`
--

LOCK TABLES `item_additional_option` WRITE;
/*!40000 ALTER TABLE `item_additional_option` DISABLE KEYS */;
INSERT INTO `item_additional_option` VALUES (18,13,'2024-05-17 11:34:45.112026','2024-05-17 11:34:45.112048','AIR_CONDITIONER'),(19,13,'2024-05-17 11:34:45.114632','2024-05-17 11:34:45.114653','REFRIGERATOR'),(20,13,'2024-05-17 11:34:45.117257','2024-05-17 11:34:45.117284','INDUCTION'),(21,13,'2024-05-17 11:34:45.120329','2024-05-17 11:34:45.120359','SHOE_CLOSET'),(22,13,'2024-05-17 11:34:45.122672','2024-05-17 11:34:45.122701','SINK'),(23,14,'2024-05-17 12:08:46.240283','2024-05-17 12:08:46.240303','AIR_CONDITIONER'),(24,14,'2024-05-17 12:08:46.242219','2024-05-17 12:08:46.242238','REFRIGERATOR'),(25,14,'2024-05-17 12:08:46.244026','2024-05-17 12:08:46.244044','CLOSET'),(26,14,'2024-05-17 12:08:46.245749','2024-05-17 12:08:46.245768','SHOE_CLOSET'),(27,14,'2024-05-17 12:08:46.247610','2024-05-17 12:08:46.247629','SINK'),(28,17,'2024-05-17 13:21:01.768973','2024-05-17 13:21:01.768991','AIR_CONDITIONER'),(29,17,'2024-05-17 13:21:01.771996','2024-05-17 13:21:01.772010','INDUCTION'),(30,17,'2024-05-17 13:21:01.774025','2024-05-17 13:21:01.774040','BED'),(31,17,'2024-05-17 13:21:01.776076','2024-05-17 13:21:01.776095','CLOSET'),(88,32,'2024-05-17 23:54:53.406426','2024-05-17 23:54:53.406444','AIR_CONDITIONER'),(89,32,'2024-05-17 23:54:53.408321','2024-05-17 23:54:53.408339','REFRIGERATOR'),(90,32,'2024-05-17 23:54:53.410585','2024-05-17 23:54:53.410627','WASHING_MACHINE'),(91,32,'2024-05-17 23:54:53.412646','2024-05-17 23:54:53.412673','GAS_RANGE'),(92,32,'2024-05-17 23:54:53.414451','2024-05-17 23:54:53.414472','MICROWAVE'),(93,32,'2024-05-17 23:54:53.416323','2024-05-17 23:54:53.416338','CLOSET'),(94,32,'2024-05-17 23:54:53.418181','2024-05-17 23:54:53.418196','SHOE_CLOSET'),(95,32,'2024-05-17 23:54:53.420033','2024-05-17 23:54:53.420048','SINK'),(108,35,'2024-05-18 15:12:08.675344','2024-05-18 15:12:08.675361','AIR_CONDITIONER'),(109,35,'2024-05-18 15:12:08.677250','2024-05-18 15:12:08.677266','REFRIGERATOR'),(110,35,'2024-05-18 15:12:08.679064','2024-05-18 15:12:08.679087','WASHING_MACHINE'),(111,35,'2024-05-18 15:12:08.681089','2024-05-18 15:12:08.681114','GAS_RANGE'),(112,35,'2024-05-18 15:12:08.683099','2024-05-18 15:12:08.683122','SHOE_CLOSET'),(113,35,'2024-05-18 15:12:08.685026','2024-05-18 15:12:08.685041','SINK'),(114,36,'2024-05-18 13:55:00.574457','2024-05-18 13:55:00.574471','AIR_CONDITIONER'),(115,36,'2024-05-18 13:55:00.576083','2024-05-18 13:55:00.576090','REFRIGERATOR'),(116,36,'2024-05-18 13:55:00.577858','2024-05-18 13:55:00.577871','WASHING_MACHINE'),(117,36,'2024-05-18 13:55:00.579425','2024-05-18 13:55:00.579438','GAS_RANGE'),(118,36,'2024-05-18 13:55:00.581087','2024-05-18 13:55:00.581099','SHOE_CLOSET'),(119,36,'2024-05-18 13:55:00.582695','2024-05-18 13:55:00.582708','SINK'),(120,37,'2024-05-18 15:44:36.717543','2024-05-18 15:44:36.717560','AIR_CONDITIONER'),(121,37,'2024-05-18 15:44:36.719136','2024-05-18 15:44:36.719150','REFRIGERATOR'),(122,37,'2024-05-18 15:44:36.720656','2024-05-18 15:44:36.720671','WASHING_MACHINE'),(123,37,'2024-05-18 15:44:36.722131','2024-05-18 15:44:36.722145','GAS_RANGE'),(124,37,'2024-05-18 15:44:36.723615','2024-05-18 15:44:36.723637','CLOSET'),(125,37,'2024-05-18 15:44:36.725150','2024-05-18 15:44:36.725164','SHOE_CLOSET'),(126,37,'2024-05-18 15:44:36.726613','2024-05-18 15:44:36.726629','SINK'),(127,38,'2024-05-19 06:46:36.255238','2024-05-19 06:46:36.255251','GAS_RANGE');
/*!40000 ALTER TABLE `item_additional_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_administration_fee`
--

DROP TABLE IF EXISTS `item_administration_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_administration_fee` (
  `item_administration_fee_no` int NOT NULL AUTO_INCREMENT,
  `item_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `fee_detail` enum('ELECTRIC','GAS','WATER','INTERNET','TV') NOT NULL,
  PRIMARY KEY (`item_administration_fee_no`),
  KEY `FK1vdr9bop0rjye94cqb18yu2pv` (`item_no`),
  CONSTRAINT `FK1vdr9bop0rjye94cqb18yu2pv` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_administration_fee`
--

LOCK TABLES `item_administration_fee` WRITE;
/*!40000 ALTER TABLE `item_administration_fee` DISABLE KEYS */;
INSERT INTO `item_administration_fee` VALUES (9,13,'2024-05-17 11:34:45.102002','2024-05-17 11:34:45.102044','ELECTRIC'),(10,13,'2024-05-17 11:34:45.105456','2024-05-17 11:34:45.105478','GAS'),(11,13,'2024-05-17 11:34:45.108219','2024-05-17 11:34:45.108241','WATER'),(12,14,'2024-05-17 12:08:46.234261','2024-05-17 12:08:46.234284','ELECTRIC'),(13,14,'2024-05-17 12:08:46.236325','2024-05-17 12:08:46.236345','GAS'),(14,14,'2024-05-17 12:08:46.238121','2024-05-17 12:08:46.238140','WATER'),(15,17,'2024-05-17 13:21:01.762892','2024-05-17 13:21:01.762909','ELECTRIC'),(16,17,'2024-05-17 13:21:01.764889','2024-05-17 13:21:01.764905','GAS'),(17,17,'2024-05-17 13:21:01.766892','2024-05-17 13:21:01.766908','WATER'),(48,32,'2024-05-17 23:54:53.401648','2024-05-17 23:54:53.401672','WATER'),(49,32,'2024-05-17 23:54:53.403883','2024-05-17 23:54:53.403901','INTERNET'),(52,35,'2024-05-18 15:12:08.668109','2024-05-18 15:12:08.668128','WATER'),(53,35,'2024-05-18 15:12:08.670603','2024-05-18 15:12:08.670620','INTERNET'),(54,35,'2024-05-18 15:12:08.672544','2024-05-18 15:12:08.672572','TV');
/*!40000 ALTER TABLE `item_administration_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_image`
--

DROP TABLE IF EXISTS `item_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_image` (
  `image_no` int NOT NULL,
  `item_image_no` int NOT NULL AUTO_INCREMENT,
  `item_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `item_image_category` enum('MAIN','ROOMS','KITCHEN_TOILET') NOT NULL,
  PRIMARY KEY (`item_image_no`),
  KEY `FK8ogjrm4rxljoo8x2di42s731x` (`image_no`),
  KEY `FKphe2ewoqi03ilspr9m0toylcu` (`item_no`),
  CONSTRAINT `FK8ogjrm4rxljoo8x2di42s731x` FOREIGN KEY (`image_no`) REFERENCES `image` (`image_no`),
  CONSTRAINT `FKphe2ewoqi03ilspr9m0toylcu` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_image`
--

LOCK TABLES `item_image` WRITE;
/*!40000 ALTER TABLE `item_image` DISABLE KEYS */;
INSERT INTO `item_image` VALUES (3,3,13,'2024-05-17 11:34:45.447162','2024-05-17 11:34:45.447184','MAIN'),(4,4,14,'2024-05-17 12:08:46.373057','2024-05-17 12:08:46.373078','MAIN'),(5,5,17,'2024-05-17 13:21:01.922843','2024-05-17 13:21:01.922858','MAIN'),(52,52,32,'2024-05-17 23:54:53.801554','2024-05-17 23:54:53.801571','MAIN'),(53,53,32,'2024-05-17 23:54:53.803470','2024-05-17 23:54:53.803484','ROOMS'),(54,54,32,'2024-05-17 23:54:53.805246','2024-05-17 23:54:53.805260','KITCHEN_TOILET'),(57,57,35,'2024-05-18 15:12:08.962003','2024-05-18 15:12:08.962018','MAIN'),(58,58,36,'2024-05-18 13:55:00.697421','2024-05-18 13:55:00.697434','MAIN'),(59,59,37,'2024-05-18 15:44:37.038614','2024-05-18 15:44:37.038631','MAIN'),(60,60,38,'2024-05-19 06:46:36.639006','2024-05-19 06:46:36.639018','MAIN'),(61,61,38,'2024-05-19 06:46:36.640394','2024-05-19 06:46:36.640407','ROOMS'),(62,62,38,'2024-05-19 06:46:36.642023','2024-05-19 06:46:36.642038','KITCHEN_TOILET');
/*!40000 ALTER TABLE `item_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `item_no` int NOT NULL,
  `likes_no` int NOT NULL AUTO_INCREMENT,
  `wallet_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`likes_no`),
  KEY `FK836m20fef8t4jypnp4yvo5hds` (`item_no`),
  KEY `FKc4wnxy543qhanoto0a3rycdjk` (`wallet_no`),
  CONSTRAINT `FK836m20fef8t4jypnp4yvo5hds` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`),
  CONSTRAINT `FKc4wnxy543qhanoto0a3rycdjk` FOREIGN KEY (`wallet_no`) REFERENCES `wallet` (`wallet_no`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (13,6,4,'2024-05-17 21:00:28.436416','2024-05-17 12:00:28.436438'),(14,7,4,'2024-05-17 22:23:06.902544','2024-05-17 13:23:06.902564'),(35,18,12,'2024-05-19 04:51:50.989105','2024-05-19 04:51:50.989135');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `wallet_no` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `enc_private_key` varchar(1500) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `user_did` varchar(255) NOT NULL,
  `wallet_address` varchar(255) NOT NULL,
  PRIMARY KEY (`wallet_no`),
  UNIQUE KEY `UK_gmpk6r83ibc2ioearmri23urg` (`user_did`),
  UNIQUE KEY `UK_tm81brji43mlwi1y0wkio3nkn` (`wallet_address`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1,'2024-05-16 10:43:34.639051','2024-05-16 19:43:34.639079','{\"address\":\"15b84a76cd54e0d086fe0e40cb3eac3db3e9a593\",\"id\":\"ef94f18d-3cbb-471c-a2cc-7156880c0184\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"a4bcf66f8a90ce8ec65a005be7fb84e0\"},\"ciphertext\":\"5ab03437b8cdc46851c9f7ecd1a930afc009f2ebed3ec8d8526189f1451aae47\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"76428a72965fa0e3fe5229973479e6111a3b5f64d4ca4bc6ebcec7301172313f\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"dfe43db9968a85e6a11a1532176f61629a8dbca31c0eb3654b39e238ab9bd821\"}}','송강산','01050543624','did:klay:0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a593','0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a593'),(2,'2024-05-16 13:49:09.720125','2024-05-16 22:49:09.720226','{\"address\":\"1dd8fbfba5067c9db9a6c621fb0ddb14672e699c\",\"id\":\"80e5fcd0-a256-476c-b937-bf561e0cd8b0\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"2488088b3f26fb7993748c0e24a33d42\"},\"ciphertext\":\"90fe04384681241edd88257372b00d255fff6c4bfcb16b4632362c8be465f11e\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"2abb8a44b621790f19b54bb93c599ec56e41794096d6c237d94087a45a0f2a1f\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"879e3d3d0d61f7f5224dc9e5d17f7c85807e83041732b782337b8b0f0f60df9d\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T04-49-09.0Z--1dd8fbfba5067c9db9a6c621fb0ddb14672e699c\",\"mnemonicCounter\":\"dd95ce118b346341ab4b5f98fe32e701\",\"mnemonicCiphertext\":\"e45c7b2a6afa454a38df5af8c08db9fd\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','고성현','01020105910','did:klay:0x1DD8FbFbA5067C9dB9A6c621FB0ddb14672E699C','0x1DD8FbFbA5067C9dB9A6c621FB0ddb14672E699C'),(4,'2024-05-16 14:21:11.297286','2024-05-16 23:21:11.297378','{\"address\":\"e0fa92495dfa8e7188e72f593ef2f2988b6b5a87\",\"id\":\"96039205-afbb-48f4-9c5a-1be82a6fb6d2\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"303822874a4e8b8aab01a842e06afaf2\"},\"ciphertext\":\"b693ceeb1014145b6874cf43b735d3cd485ebf26ab44a6919ad43237fa8b6cc3\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"526f89f7126234cd7dc08921bc664fad647b758bb550b0eef4a69a737989a580\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"7d00afe86d4dc2198b3fbe584ec9cb96a48c4199a25b4750d1a44c5e9084ec5b\"}}','정유나','01090546008','did:klay:0xe0Fa92495DFa8E7188E72F593ef2F2988B6b5A87','0xe0Fa92495DFa8E7188E72F593ef2F2988B6b5A87'),(5,'2024-05-16 14:23:15.890911','2024-05-16 23:23:15.890957','{\"address\":\"dcb514da532854ca22f07920515f275217d15c6e\",\"id\":\"197b8217-41a8-4b55-a031-c7f08217042b\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"898c78f36525b8c8e15a314ccaabae89\"},\"ciphertext\":\"617a0548b9bbcbeeef30591948052bae56b255b5c0607d297edb68fa2dcb2eb4\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"6612b8ad84390576eaef30c5a85d8fac5bdca92c211c87b3686466568cf5770f\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"386e7eaaf4aba60b1aba28b0aaebab49106f6789d414c3fc8849406b89ab4c82\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T05-23-14.0Z--dcb514da532854ca22f07920515f275217d15c6e\",\"mnemonicCounter\":\"027deffcfc90592041c332225097476d\",\"mnemonicCiphertext\":\"a68d7a076e84205543b255dda10efbba\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','오기선','01011111111','did:klay:0xdcb514da532854cA22F07920515f275217d15c6e','0xdcb514da532854cA22F07920515f275217d15c6e'),(6,'2024-05-16 14:24:21.509965','2024-05-16 23:24:21.510011','{\"address\":\"ed739565d59219a4bdac5a958a803ec4bdd07b45\",\"id\":\"1b816f6a-9062-4dbe-bcf1-da84789e28eb\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"0694907dd8123f186a269f1499dfa60c\"},\"ciphertext\":\"602a98b709e5d5918e784272c8912f74527fb4e246450db4e5ce3bf9b118b382\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"df13ca56a3b88f8bbf5fdcddd88b218b1b9efca184edc112cfd16ecbe2479f6a\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"e8ceb75a712a76d4a691bbe4346a5c9df97e07ebae0c182c10d5b6eda0208b16\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T05-24-20.0Z--ed739565d59219a4bdac5a958a803ec4bdd07b45\",\"mnemonicCounter\":\"f14a4ee90e6f4c3af4817d46735f475c\",\"mnemonicCiphertext\":\"b9b737855cd7ade1aab7de07daca74e2\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김덕배','01011111111','did:klay:0xeD739565D59219A4bDac5A958A803ec4bdD07b45','0xeD739565D59219A4bDac5A958A803ec4bdD07b45'),(7,'2024-05-16 15:55:15.902943','2024-05-17 00:55:15.902973','{\"address\":\"0a389783706776acff2c6205e7eaa0d34f2271e0\",\"id\":\"55b027d0-3f12-469c-aa4a-757cb83c857d\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"5e240339622e3349deed0f9ca073312d\"},\"ciphertext\":\"6ec0b7ee320f508313e4c1fa9ee8f44302cec4e381d44d49bf66c49dfa11e0c3\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"3f017460f57b99a24cba5be4a765aaf2a23d361cd2ebd4f361ad327c5e7a0b3e\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"f0834beee9daae4a45b8f5f58faa29528372b651d7d47798bc92822b11528eb6\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T06-55-14.0Z--0a389783706776acff2c6205e7eaa0d34f2271e0\",\"mnemonicCounter\":\"daa5e8f3e4d8d252d721466075a94e41\",\"mnemonicCiphertext\":\"8d6b09cb30be8be7a93ff789d501a4df\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','송아람','01066689811','did:klay:0x0a389783706776acfF2C6205E7EaA0D34F2271e0','0x0a389783706776acfF2C6205E7EaA0D34F2271e0'),(9,'2024-05-16 20:43:56.018074','2024-05-17 05:43:56.018202','{\"address\":\"a7036441c32731c660ee9a00c4bffc8578a37533\",\"id\":\"c1d31018-1016-49fe-9133-3f37235a62e1\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"ffc7bb93c3d34e4af110bee83ea16d9e\"},\"ciphertext\":\"4484e5f3a90539d53bf9692030aef7286141eb89fbed5706ceb6f9aa8408f7e6\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"394cfad2f147ef3dbd5c7bba7590f03a13771b411f4f1edacdd08a81d5fc0b7f\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"adce60e3a54ee92ec59239f9586d5900addaec36ffe66cae29d8ce1f1dd4ba0f\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T11-43-55.0Z--a7036441c32731c660ee9a00c4bffc8578a37533\",\"mnemonicCounter\":\"0c53b76dc9222bee417ed4183ce357e2\",\"mnemonicCiphertext\":\"1cf1e271731b69b4dccd3078a0827755\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김무열','01011111111','did:klay:0xa7036441C32731c660ee9a00C4BFFC8578A37533','0xa7036441C32731c660ee9a00C4BFFC8578A37533'),(10,'2024-05-16 20:45:02.314313','2024-05-17 05:45:02.314360','{\"address\":\"0655bb0c1a760bbc6bc0970ede5d9c8f687185f3\",\"id\":\"69d470a5-0f2f-4c5e-a152-154ae315e7e4\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"e08185234981cb88ac2ca7b595058407\"},\"ciphertext\":\"da954ecb8f05a6e3c856b68321dc93a7515863e3683c427b12836cf65b1dcac6\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"5ea6af207dc76e7293a2e0f4086f21987475aca0815e716b6a1678d520051d81\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"bd24442c937fe1364ac8e836c340165a2663a781b32749e56f7a86c493352e05\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T11-45-02.0Z--0655bb0c1a760bbc6bc0970ede5d9c8f687185f3\",\"mnemonicCounter\":\"52fec02fe7b500045ed38f8506cd6bf5\",\"mnemonicCiphertext\":\"b20c46840dcbafa9545af09cdf14b9ee\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김동덕','01011111111','did:klay:0x0655bB0C1A760BbC6bC0970eDe5d9C8f687185f3','0x0655bB0C1A760BbC6bC0970eDe5d9C8f687185f3'),(11,'2024-05-16 23:23:02.227560','2024-05-17 08:23:02.227834','{\"address\":\"5284f4173abf035687436fac2a2a5c879c93d281\",\"id\":\"8ab00359-1aa6-4b71-a4a5-a4aae206f93d\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"63095c99a1d54359448484d0d420b0de\"},\"ciphertext\":\"bbc6e501af1a11b795448dbc1633bcf32fb460dec263de3760754e76b7f607e0\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"b8fd1fcff371ac9dfe5148f14a090d5536825cb85f9b3ca58e40e8ea338957cb\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"1701a6823561b508b2a39c86047ca444b6dcd1ea6948a0f18e0cf1a919a498ad\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T14-23-00.0Z--5284f4173abf035687436fac2a2a5c879c93d281\",\"mnemonicCounter\":\"34b3013a14c397d5a0a5d5e9a3ac2547\",\"mnemonicCiphertext\":\"b748fe346f9d2ffed96ed7d7a96167be\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김현지','01062015333','did:klay:0x5284f4173AbF035687436FAc2a2a5C879c93d281','0x5284f4173AbF035687436FAc2a2a5C879c93d281'),(12,'2024-05-16 23:23:44.694767','2024-05-17 08:23:44.694837','{\"address\":\"f0223afabd5a625d1838e967871aac18f2f689b6\",\"id\":\"24ad3e8e-c3e4-4305-960a-29850107e272\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"4de565303b6a9e9703ba7d834f734587\"},\"ciphertext\":\"7f0d48e61a94e128408c87c817ca62753c7a515fd2c9c5fb104c4b6f6feb8e54\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"c0a0b30d6365d4a669911b196bb6f618e551c35ae73388a6f54556aff2dfdbaf\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"a588c0fe767a4da7590ee73abbf72143b73b137955e1983bcccb3394fa4858af\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T14-23-44.0Z--f0223afabd5a625d1838e967871aac18f2f689b6\",\"mnemonicCounter\":\"753b1ea6ec8359390327c1ab86ff55cf\",\"mnemonicCiphertext\":\"374f9301496bfc64b9e6a82b549f86f4\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김지현','01012345678','did:klay:0xF0223AFaBD5a625d1838e967871AAC18F2f689B6','0xF0223AFaBD5a625d1838e967871AAC18F2f689B6'),(13,'2024-05-16 23:33:53.358575','2024-05-17 08:33:53.358617','{\"address\":\"8f247d1c0ccc957a615f198f245387cdd392e3d0\",\"id\":\"ac04e562-5051-4bf4-90db-9e02027b54f0\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"a970608b4ea8c778a962ec539748fdb2\"},\"ciphertext\":\"f5b19c6a8526b3ed3e5ea7f185d9443ab169182d2570ca216690fbabdfd12590\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"f87499f5dc4f83a7d86cd349f624fbb9345238384cccae61811565f90a5eae93\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"2e32860174ae75bbeaddd4d87e7e21404a115fd71392f3111536a8c0eadbba36\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-16T14-33-53.0Z--8f247d1c0ccc957a615f198f245387cdd392e3d0\",\"mnemonicCounter\":\"86cfad7c73be424d3e0c6653495d81e7\",\"mnemonicCiphertext\":\"acb0c099e29171e0d05211db663a5b04\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김재훈','01035820486','did:klay:0x8f247D1c0Ccc957A615f198F245387CDd392e3D0','0x8f247D1c0Ccc957A615f198F245387CDd392e3D0'),(18,'2024-05-17 10:48:14.445305','2024-05-17 19:48:14.445333','{\"address\":\"68bdec4da58ab08cfb72c815fe695fabac8f2588\",\"id\":\"bcfb416f-44f2-4e98-bc7f-84523f1845b9\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"f78f2f8d483ad141b21fac8caf0c851e\"},\"ciphertext\":\"3a66036e090064df99346109b92130882aabf80cd3fb014f996ebefb2bc005b2\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"8656c67fc5ddd4a345f2ae9891b7bb98fdaa0da57c8e5d4289b05ee9430f85b8\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"9c95f2b8165011b79c035787e04e0bf11260dd0f8377d2345bd67ddddfb8914d\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T01-48-14.0Z--68bdec4da58ab08cfb72c815fe695fabac8f2588\",\"mnemonicCounter\":\"1c61e3fbfb4667aade3e6cc91a234c3b\",\"mnemonicCiphertext\":\"2d4caa1d172f32292221c1a7edb90dc2\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','김싸피','01012341234','did:klay:0x68Bdec4DA58ab08cFb72c815Fe695FABac8F2588','0x68Bdec4DA58ab08cFb72c815Fe695FABac8F2588'),(22,'2024-05-17 13:30:46.419731','2024-05-17 22:30:46.419828','{\"address\":\"97c0c08468e96e9935b57d350926c7d4d81f3c34\",\"id\":\"58ee0383-1219-47bf-81e4-1593d89dc636\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"a4830de08b0b1bec411df26aa1fa037b\"},\"ciphertext\":\"255ea2925207bf977226d04820661d254376d9a80b5caddff7a129055d204dd9\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"d41f65b32d58a46b31e73a06ec915ca6e12d79fa07925fc900b021b07f76e985\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"274f1cf1b79b603a2b988622cd67efc2397f10443835c1a1916732fdb422079d\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T04-30-45.0Z--97c0c08468e96e9935b57d350926c7d4d81f3c34\",\"mnemonicCounter\":\"33741ebc0b491a2c6c7ba321e6847a07\",\"mnemonicCiphertext\":\"222117816ac7a3ed6724e22a8678d751\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','11','11111111111','did:klay:0x97c0c08468e96e9935b57d350926c7d4d81f3C34','0x97c0c08468e96e9935b57d350926c7d4d81f3C34'),(23,'2024-05-17 13:37:38.939369','2024-05-17 22:37:38.939411','{\"address\":\"b741dc9994c017a03fa351a75c64f8eec3c8998c\",\"id\":\"c965ed2b-a3e0-43e8-8c7f-eb1f4eee1a03\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"24a3fede9cc757a794f1ab78a148403f\"},\"ciphertext\":\"6e3f8d1a629fcaadf759a55b52a6fb7dbe7b84c388baf3d07de77259e6639dbc\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"53dafd6a48d78921e15b0efa27c00595bf72ef449c1e60692b05a62cb868edb7\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"d1ac9539a70207a2242f431b0b24de164232b9f4fe294b45100b9787b6921a03\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T04-37-37.0Z--b741dc9994c017a03fa351a75c64f8eec3c8998c\",\"mnemonicCounter\":\"22412ec4f979f3cf61dc809e7c43756f\",\"mnemonicCiphertext\":\"eb4a6ad50d040363f2f1cdf88065ae88\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','1','11111111111','did:klay:0xB741dC9994C017A03fa351a75c64F8eEc3C8998C','0xB741dC9994C017A03fa351a75c64F8eEc3C8998C'),(24,'2024-05-17 13:38:38.592457','2024-05-17 22:38:38.592484','{\"address\":\"a1b5206aaa978c2387bef8b9e435e5627c37d959\",\"id\":\"a66e7276-f416-4bc8-ab87-7dca966dadf0\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"7116d447111b03b4e042fd761e417110\"},\"ciphertext\":\"3c45b7aba2b13b15053c9475372707447aa9e16563a66722cf4ff38d2b5bbb5d\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"3f06e1e7bcfc5d663d28c726f5e8c4bc2eb08907e1db6ba8c5c005d94e386f87\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"9da0ca6bf5a168ea10ddc1d084d5151cdc440e5aa4f85aa0093a0a3c93ffb49f\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T04-38-37.0Z--a1b5206aaa978c2387bef8b9e435e5627c37d959\",\"mnemonicCounter\":\"1c5699001088d97ebe6e16ada367a741\",\"mnemonicCiphertext\":\"45c91b0611138a464ba54c72d2640647\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','2','22222222222','did:klay:0xA1B5206AAa978c2387bef8b9E435e5627C37D959','0xA1B5206AAa978c2387bef8b9E435e5627C37D959'),(25,'2024-05-17 13:39:21.141182','2024-05-17 22:39:21.141208','{\"address\":\"e96df8fb44b12dc7e3b2222d90a9b4413ea498b3\",\"id\":\"c2413c20-6e10-422c-9bbe-19d520cfabaa\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"147a671d9a5ca58d3b3b7618c14d3533\"},\"ciphertext\":\"bb1b0a94e2f5ab78cd623b02fbc275466036efbce60cf67ff848401f9075f3c9\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"8f8b50b90afd6c3ad38da275d6b5ed3394585646303a4f020822d77583c4796b\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"07273c9a8f8201c329424f9fd5c0cf8015ff0bedf09fe0b89222b99145b7767b\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T04-39-20.0Z--e96df8fb44b12dc7e3b2222d90a9b4413ea498b3\",\"mnemonicCounter\":\"4da0e24d7e2aa9eee92b2f38f25c105e\",\"mnemonicCiphertext\":\"d9ad1624882850336843ea9a32f1202b\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','3','33333333333','did:klay:0xE96df8fB44B12dC7E3B2222d90a9B4413ea498B3','0xE96df8fB44B12dC7E3B2222d90a9B4413ea498B3'),(26,'2024-05-17 13:40:07.820092','2024-05-17 22:40:07.820118','{\"address\":\"e827ea8c0e99ddee23b2504efcb709a2ce8b94d5\",\"id\":\"b655c4ff-00ae-471f-b10d-29ce87477acc\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"91554685c2c3d2eac86f844da3221153\"},\"ciphertext\":\"70dd587c8525eb9bf58859d276c3e7947927ed90fc47b0f7d32448e7c0fa304b\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"da500cb728f7d18fdc7a1faf3367b27a5552ed37bd72be9d537b9fcffb592092\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"4bff7b46478b13886d24da85d38ac156e5414f18adf837db6f2da5ed8e3d9ac8\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-17T04-40-06.0Z--e827ea8c0e99ddee23b2504efcb709a2ce8b94d5\",\"mnemonicCounter\":\"bb6e8c211d6fcc2bd6678390aa262a25\",\"mnemonicCiphertext\":\"57351fe14c8ea865766bf7530cf4d7ac\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','4','44444444444','did:klay:0xe827EA8c0E99ddEe23B2504efcB709A2ce8b94D5','0xe827EA8c0E99ddEe23B2504efcB709A2ce8b94D5'),(27,'2024-05-18 11:15:17.921916','2024-05-18 11:15:17.921988','{\"address\":\"1c083f413c3d5dba70d728ff99177900d2fef16c\",\"id\":\"73c4d2c3-4ff8-42b2-8f70-0a04b55a38ce\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"af1210446633289c93d920bad584b503\"},\"ciphertext\":\"73f35700be3be259bbb078f8ee4c0766928ef2579b45302637e92b408b2624ae\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"b2c52dbd53a7d24c9d58742b62b39c3a651071111304a54524d9f613a9d6df79\",\"n\":131072,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"e49292d3ac855fe968b4a10e75bef08b362f7d02e12e22194d8e94833cadbc82\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2024-05-18T11-15-17.0Z--1c083f413c3d5dba70d728ff99177900d2fef16c\",\"mnemonicCounter\":\"42c567be8cb1cb3f2d672583ed49ad01\",\"mnemonicCiphertext\":\"bc0d35e0113128c4b81d63188c1e1f6a\",\"path\":\"m/44\'/60\'/0\'/0/0\",\"locale\":\"en\",\"version\":\"0.1\"}}','정유경','01093866007','did:klay:0x1C083f413C3D5dBa70d728ff99177900D2FEf16c','0x1C083f413C3D5dBa70d728ff99177900D2FEf16c');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_chat_room`
--

DROP TABLE IF EXISTS `wallet_chat_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_chat_room` (
  `chat_room_no` int NOT NULL,
  `wallet_chat_room_no` int NOT NULL AUTO_INCREMENT,
  `wallet_no` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `role` enum('BUYER','SELLER') NOT NULL,
  PRIMARY KEY (`wallet_chat_room_no`),
  KEY `FKb4rveudlgw2b7yqn2twtnks8x` (`wallet_no`),
  KEY `FKst4s3byf5nphl75dkv5t2tckw` (`chat_room_no`),
  CONSTRAINT `FKb4rveudlgw2b7yqn2twtnks8x` FOREIGN KEY (`wallet_no`) REFERENCES `wallet` (`wallet_no`),
  CONSTRAINT `FKst4s3byf5nphl75dkv5t2tckw` FOREIGN KEY (`chat_room_no`) REFERENCES `chat_room` (`chat_room_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_chat_room`
--

LOCK TABLES `wallet_chat_room` WRITE;
/*!40000 ALTER TABLE `wallet_chat_room` DISABLE KEYS */;
INSERT INTO `wallet_chat_room` VALUES (7,13,11,'2024-05-17 15:01:28.758260','2024-05-17 15:01:28.758287','BUYER'),(7,14,4,'2024-05-17 15:01:28.760989','2024-05-17 15:01:28.761015','SELLER'),(11,21,4,'2024-05-18 12:01:34.722601','2024-05-18 12:01:34.722620','BUYER'),(11,22,18,'2024-05-18 12:01:34.724716','2024-05-18 12:01:34.724732','SELLER'),(13,25,11,'2024-05-18 14:03:04.997603','2024-05-18 14:03:04.997642','BUYER'),(13,26,4,'2024-05-18 14:03:05.002121','2024-05-18 14:03:05.002155','SELLER'),(14,27,11,'2024-05-18 14:11:11.017194','2024-05-18 14:11:11.017213','BUYER'),(14,28,18,'2024-05-18 14:11:11.019190','2024-05-18 14:11:11.019210','SELLER'),(15,29,1,'2024-05-18 14:31:34.080888','2024-05-18 14:31:34.080903','BUYER'),(15,30,4,'2024-05-18 14:31:34.083565','2024-05-18 14:31:34.083580','SELLER'),(17,33,6,'2024-05-18 15:19:29.700014','2024-05-18 15:19:29.700029','BUYER'),(17,34,18,'2024-05-18 15:19:29.702059','2024-05-18 15:19:29.702076','SELLER'),(18,35,12,'2024-05-18 15:47:34.940915','2024-05-18 15:47:34.940929','BUYER'),(18,36,18,'2024-05-18 15:47:34.947470','2024-05-18 15:47:34.947485','SELLER'),(19,37,11,'2024-05-18 16:03:01.456486','2024-05-18 16:03:01.456499','BUYER'),(19,38,4,'2024-05-18 16:03:01.457986','2024-05-18 16:03:01.457999','SELLER'),(20,39,6,'2024-05-18 16:11:11.796074','2024-05-18 16:11:11.796099','BUYER'),(20,40,18,'2024-05-18 16:11:11.797530','2024-05-18 16:11:11.797542','SELLER'),(21,41,6,'2024-05-18 16:11:19.332257','2024-05-18 16:11:19.332271','BUYER'),(21,42,18,'2024-05-18 16:11:19.333804','2024-05-18 16:11:19.333817','SELLER'),(22,43,11,'2024-05-18 16:32:58.325983','2024-05-18 16:32:58.325996','BUYER'),(22,44,18,'2024-05-18 16:32:58.327531','2024-05-18 16:32:58.327544','SELLER'),(23,45,11,'2024-05-18 16:56:28.601145','2024-05-18 16:56:28.601149','BUYER'),(23,46,18,'2024-05-18 16:56:28.602641','2024-05-18 16:56:28.602654','SELLER'),(24,47,12,'2024-05-19 04:52:07.729199','2024-05-19 04:52:07.729212','BUYER'),(24,48,18,'2024-05-19 04:52:07.730518','2024-05-19 04:52:07.730530','SELLER'),(25,49,5,'2024-05-19 05:41:24.993853','2024-05-19 05:41:24.993890','BUYER'),(25,50,18,'2024-05-19 05:41:24.998480','2024-05-19 05:41:24.998505','SELLER'),(26,51,18,'2024-05-19 05:47:34.064726','2024-05-19 05:47:34.064741','BUYER'),(26,52,4,'2024-05-19 05:47:34.066569','2024-05-19 05:47:34.066583','SELLER'),(27,53,18,'2024-05-19 05:54:57.402615','2024-05-19 05:54:57.402629','BUYER'),(27,54,4,'2024-05-19 05:54:57.404401','2024-05-19 05:54:57.404420','SELLER'),(28,55,18,'2024-05-19 05:58:32.258142','2024-05-19 05:58:32.258156','BUYER'),(28,56,4,'2024-05-19 05:58:32.259753','2024-05-19 05:58:32.259767','SELLER'),(29,57,4,'2024-05-19 06:06:31.916440','2024-05-19 06:06:31.916456','BUYER'),(29,58,18,'2024-05-19 06:06:31.918140','2024-05-19 06:06:31.918153','SELLER'),(30,59,4,'2024-05-19 06:09:00.142502','2024-05-19 06:09:00.142516','BUYER'),(30,60,18,'2024-05-19 06:09:00.144169','2024-05-19 06:09:00.144182','SELLER'),(31,61,6,'2024-05-19 06:47:44.589025','2024-05-19 06:47:44.589056','BUYER'),(31,62,18,'2024-05-19 06:47:44.592381','2024-05-19 06:47:44.592409','SELLER');
/*!40000 ALTER TABLE `wallet_chat_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_contract`
--

DROP TABLE IF EXISTS `wallet_contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_contract` (
  `wallet_contract_no` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `role` enum('BUYER','SELLER') NOT NULL,
  `contract_no` int NOT NULL,
  `wallet_no` int NOT NULL,
  PRIMARY KEY (`wallet_contract_no`),
  KEY `FK6qhaffy5elp8n4pfmp1od1a28` (`contract_no`),
  KEY `FKm41g3c7fev3oe5cia07a6onlj` (`wallet_no`),
  CONSTRAINT `FK6qhaffy5elp8n4pfmp1od1a28` FOREIGN KEY (`contract_no`) REFERENCES `contract` (`contract_no`),
  CONSTRAINT `FKm41g3c7fev3oe5cia07a6onlj` FOREIGN KEY (`wallet_no`) REFERENCES `wallet` (`wallet_no`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_contract`
--

LOCK TABLES `wallet_contract` WRITE;
/*!40000 ALTER TABLE `wallet_contract` DISABLE KEYS */;
INSERT INTO `wallet_contract` VALUES (1,'2024-05-18 16:42:43.212504','2024-05-18 16:42:43.212517','BUYER',1,6),(2,'2024-05-18 16:42:43.213958','2024-05-18 16:42:43.213979','SELLER',1,18),(3,'2024-05-18 16:42:48.135921','2024-05-18 16:42:48.135934','BUYER',2,6),(4,'2024-05-18 16:42:48.137309','2024-05-18 16:42:48.137321','SELLER',2,18),(5,'2024-05-18 16:42:49.283631','2024-05-18 16:42:49.283644','BUYER',3,6),(6,'2024-05-18 16:42:49.285105','2024-05-18 16:42:49.285117','SELLER',3,18),(7,'2024-05-18 16:43:03.804227','2024-05-18 16:43:03.804240','BUYER',4,6),(8,'2024-05-18 16:43:03.805641','2024-05-18 16:43:03.805654','SELLER',4,18),(9,'2024-05-18 16:52:33.557035','2024-05-18 16:52:33.557048','BUYER',5,6),(10,'2024-05-18 16:52:33.558530','2024-05-18 16:52:33.558543','SELLER',5,18),(11,'2024-05-18 16:53:38.031309','2024-05-18 16:53:38.031323','BUYER',6,6),(12,'2024-05-18 16:53:38.032822','2024-05-18 16:53:38.032834','SELLER',6,18),(13,'2024-05-18 18:18:51.438956','2024-05-18 18:18:51.438968','BUYER',7,6),(14,'2024-05-18 18:18:51.440442','2024-05-18 18:18:51.440453','SELLER',7,18);
/*!40000 ALTER TABLE `wallet_contract` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-19 15:50:31
