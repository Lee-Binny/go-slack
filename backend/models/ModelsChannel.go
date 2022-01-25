package models

import (
	"time"
)

type Channel struct {
	Id          int64     `gorm:"primaryKey;autoIncrement"`
	Name        string    `gorm:"size:45;not null"`
	MemberCount int       `gorm:"not null"`
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}