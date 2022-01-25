package models

import "time"

type Thread struct {
	Id        int64     `gorm:"primaryKey;autoIncrement;index:idx_chat"`
	ChatId    int64     `gorm:"not null;index:idx_chat"`
	UserId    int64     `gorm:"not null"`
	Message   string    `gorm:"not null"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}