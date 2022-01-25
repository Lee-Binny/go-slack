package repositories

import (
	"go-slack/db"
	"go-slack/models"
)

func GetAllUsers() *models.Users {
	Users := models.Users{}
	db.DB.Find(&Users)
	return &Users
}

func GetOneUser(id string) (*models.User, error) {
	User := models.User{}
	err := db.DB.First(&User, id).Error
	return &User, err
}

func GetOneUserByUid(uid string) (*models.User, error) {
	User := models.User{}
	err := db.DB.Where("uid = ?", uid).Find(&User).Error
	return &User, err
}

func GetOneUserByName(name string) (*models.Users, error) {
	Users := models.Users{}
	err := db.DB.Where("name = ?", name).Find(&Users).Error
	return &Users, err
}

func CreateUser(user *models.User) (*models.User, error) {
	err := db.DB.Create(user).Error
	return user, err
}
