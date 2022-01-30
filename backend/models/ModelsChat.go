package models

import "time"

type Chat struct {
	Id        int64     `gorm:"primaryKey;autoIncrement;index:idx_user_target"`
	UserId    int64     `gorm:"size:45;not null;index:idx_user_target"`
	Message   string    `gorm:"not null"`
	TargetId  int64     `gorm:"not null;index:idx_user_target"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}