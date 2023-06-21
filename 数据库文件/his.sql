/*
 Navicat Premium Data Transfer

 Source Server         : his
 Source Server Type    : MySQL
 Source Server Version : 50562 (5.5.62-log)
 Source Host           : hujiahui.top:3306
 Source Schema         : his

 Target Server Type    : MySQL
 Target Server Version : 50562 (5.5.62-log)
 File Encoding         : 65001

 Date: 11/06/2023 14:39:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `director` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (1, '内科', '医生1号');
INSERT INTO `department` VALUES (2, '外科', '医生1号');
INSERT INTO `department` VALUES (3, '妇产科', '');
INSERT INTO `department` VALUES (4, '儿科', '');
INSERT INTO `department` VALUES (5, '眼科', '');
INSERT INTO `department` VALUES (6, '耳鼻喉科', '无');

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES (1, '医生1号', '男', 55, '123123', '主任医师', '/uploads/2023060610421513378.jpg');
INSERT INTO `doctor` VALUES (2, '唐昊', '男', 55, '123456789', '主任医师', '/uploads/2023060721123315213.jpg');
INSERT INTO `doctor` VALUES (12, '21', '女', 99, '12345678915', '助理医师', '');
INSERT INTO `doctor` VALUES (4, '何浩', '女', 55, '4561234861', '主任医师', '/uploads/2023060721132614969.jpg');
INSERT INTO `doctor` VALUES (8, '2', '女', 3, '44', '助理医师', '');
INSERT INTO `doctor` VALUES (10, '测试医生2号', '女', 66, 'undefined', '副主任医师', '/uploads/2023061101440412280.jpeg');

-- ----------------------------
-- Table structure for patient
-- ----------------------------
DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient`  (
  `patientid` int(11) NOT NULL AUTO_INCREMENT COMMENT '患者id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '患者姓名',
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '患者性别',
  `age` int(11) NULL DEFAULT NULL COMMENT '患者年龄',
  `contact` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '患者联系方式',
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '患者照片',
  PRIMARY KEY (`patientid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of patient
-- ----------------------------
INSERT INTO `patient` VALUES (1, '张三', '男', 26, '156138321', '/uploads/2023052919354910648.jpg');
INSERT INTO `patient` VALUES (8, '', '男', 0, '', '');
INSERT INTO `patient` VALUES (5, 'a', '女', 25, '12345678985', '/uploads/2023060609113116755.jpg');
INSERT INTO `patient` VALUES (7, '测试2', '男', 66, '44', '/uploads/2023061101460716150.jpeg');

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patient` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `doctor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `department` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `diagnosis` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `remarks` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (19, 'a', '医生1号', '内科', '2023-06-11 12:40:24', '打啊是的12531；‘怕【；’', '对对对');
INSERT INTO `record` VALUES (18, '张三', '医生1号', '内科', '2023-06-11 12:33:59', '123135阿萨德VB啊世纪东方v啊是打发\r\n电饭锅部分居委会不放假后我被 阿萨德', '');
INSERT INTO `record` VALUES (17, '张三', '医生1号', '内科', '2023-06-11 11:38:06', '发多少东方闪电123415‘；‘；‘；’‘’’’', '');
INSERT INTO `record` VALUES (16, '张三', '医生1号', '内科', '', '', '');
INSERT INTO `record` VALUES (15, '张三', '医生1号', '内科', '', '', '');

-- ----------------------------
-- Table structure for title
-- ----------------------------
DROP TABLE IF EXISTS `title`;
CREATE TABLE `title`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of title
-- ----------------------------
INSERT INTO `title` VALUES (1, '助理医师');
INSERT INTO `title` VALUES (2, '住院医师');
INSERT INTO `title` VALUES (3, '主治医师');
INSERT INTO `title` VALUES (4, '副主任医师');
INSERT INTO `title` VALUES (5, '主任医师');
INSERT INTO `title` VALUES (6, '其他');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `Identification` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色权限',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `portrait` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10004 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'admin', 'admin', '管理员', 'admin', '/uploads/2023061112471314347.jpeg');
INSERT INTO `user` VALUES (10003, '45678915', 'zhangsan都是', '123', '普通用户', '15478254965', '/uploads/2023061113083615061.jpeg');
INSERT INTO `user` VALUES (10001, 'GuYue', '胡', '123456', '管理员', '19114868364', '/uploads/2023061113100312908.jpeg');
INSERT INTO `user` VALUES (10002, '1', 'zhangsan', '123', '普通用户', '12345678952', '/uploads/2023061113481117953.jpg');

-- ----------------------------
-- Triggers structure for table department
-- ----------------------------
DROP TRIGGER IF EXISTS `update_department_name`;
delimiter ;;
CREATE TRIGGER `update_department_name` AFTER UPDATE ON `department` FOR EACH ROW BEGIN
    UPDATE record SET department = NEW.name WHERE department = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table department
-- ----------------------------
DROP TRIGGER IF EXISTS `delete_department`;
delimiter ;;
CREATE TRIGGER `delete_department` AFTER DELETE ON `department` FOR EACH ROW BEGIN
    UPDATE record SET department = '其他' WHERE department = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table doctor
-- ----------------------------
DROP TRIGGER IF EXISTS `update_doctor_name`;
delimiter ;;
CREATE TRIGGER `update_doctor_name` AFTER UPDATE ON `doctor` FOR EACH ROW BEGIN
    UPDATE record SET doctor = NEW.name WHERE doctor = OLD.name;
    UPDATE department SET director = NEW.name WHERE director = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table doctor
-- ----------------------------
DROP TRIGGER IF EXISTS `delete_doctor`;
delimiter ;;
CREATE TRIGGER `delete_doctor` AFTER DELETE ON `doctor` FOR EACH ROW BEGIN
    UPDATE record SET doctor = '其他医生' WHERE doctor = OLD.name;
    UPDATE department SET director = '无' WHERE director = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table patient
-- ----------------------------
DROP TRIGGER IF EXISTS `update_patient_name`;
delimiter ;;
CREATE TRIGGER `update_patient_name` AFTER UPDATE ON `patient` FOR EACH ROW BEGIN
    UPDATE record SET patient = NEW.name WHERE patient = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table patient
-- ----------------------------
DROP TRIGGER IF EXISTS `delete_patient`;
delimiter ;;
CREATE TRIGGER `delete_patient` AFTER DELETE ON `patient` FOR EACH ROW BEGIN
    UPDATE record SET remarks = CONCAT('该病人已结束治疗，', remarks) WHERE patient = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table title
-- ----------------------------
DROP TRIGGER IF EXISTS `update_title_name`;
delimiter ;;
CREATE TRIGGER `update_title_name` AFTER UPDATE ON `title` FOR EACH ROW BEGIN
    UPDATE doctor SET title = NEW.name WHERE title = OLD.name;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table title
-- ----------------------------
DROP TRIGGER IF EXISTS `delete_title`;
delimiter ;;
CREATE TRIGGER `delete_title` AFTER DELETE ON `title` FOR EACH ROW BEGIN
    UPDATE doctor SET title = '其他' WHERE title = OLD.name;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
