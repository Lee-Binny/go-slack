package models

import (
	"time"
)

type ChannelMember struct {
	Id        int64     `gorm:"primaryKey;autoIncrement;index:idx_channel;index:idx_user_channel"`
	UserId    int64     `gorm:"not null;index:idx_user_channel"`
	ChannelId int64     `gorm:"not null;index:idx_channel"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}