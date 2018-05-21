-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema financedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `financedb` ;

-- -----------------------------------------------------
-- Schema financedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `financedb` DEFAULT CHARACTER SET utf8 ;
USE `financedb` ;

-- -----------------------------------------------------
-- Table `expenses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expenses` ;

CREATE TABLE IF NOT EXISTS `expenses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NULL,
  `amount` DECIMAL(8,2) NULL,
  `date` VARCHAR(45) NULL,
  `expected` VARCHAR(45) NULL,
  `impulse` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO user@localhost;
 DROP USER user@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'senorWombat';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `expenses`
-- -----------------------------------------------------
START TRANSACTION;
USE `financedb`;
INSERT INTO `expenses` (`id`, `category`, `amount`, `date`, `expected`, `impulse`) VALUES (1, 'Rent', 750.00, '5/1/18', 'YES', NULL);
INSERT INTO `expenses` (`id`, `category`, `amount`, `date`, `expected`, `impulse`) VALUES (2, 'Gas/Transportation', 38.46, '5/5/18', 'YES', NULL);
INSERT INTO `expenses` (`id`, `category`, `amount`, `date`, `expected`, `impulse`) VALUES (3, 'Groceries', 50.25, '5/6/18', 'YES', NULL);
INSERT INTO `expenses` (`id`, `category`, `amount`, `date`, `expected`, `impulse`) VALUES (4, 'Clothing', 75.00, '5/7/18', 'NO', NULL);

COMMIT;

