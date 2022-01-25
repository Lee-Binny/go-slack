package models

import (
	"time"
	"golang.org/x/crypto/bcrypt"
)

type Users []User

type User struct {
	Id         int64  `gorm:"primaryKey;autoIncrement"`
	Uid        string `gorm:"size:15;not null"`
	Password   string `gorm:"size:100;not null"`
	Name       string `gorm:"size:7;not null"`
	ProfileUrl string `gorm:"size:256;default:''"`
	CreatedAt  time.Time `gorm:"autoCreateTime"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime"`
}

func NewUser(uid, password, name string) *User {
	return &User{
		Uid:        uid,
		Password:   password,
		Name:       name,
	}
}

func (u *User) IsMatchedPassword(password string) error {
	return bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password))
}