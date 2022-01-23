package models

import (
	"time"
)

type User struct {
	Id         int64  `gorm:"primaryKey;autoIncrement"`
	Uid        string `gorm:"size:15;not null"`
	Password   string `gorm:"size:15;not null"`
	Name       string `gorm:"size:7;not null"`
	ProfileUrl string `gorm:"size:256;default:''"`
	CreatedAt  time.Time `gorm:"autoCreateTime"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime"`
}