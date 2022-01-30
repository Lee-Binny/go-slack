package models

import (
	"time"
)

type ChannelMembers []ChannelMember
type ChannelMember struct {
	Id        int64     `gorm:"primaryKey;autoIncrement;index:idx_channel;index:idx_user_channel"`
	UserId    int64     `gorm:"not null;index:idx_user_channel"`
	ChannelId int64     `gorm:"not null;index:idx_channel"`
	ReadAt    time.Time `gorm:"not null"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}

func NewChannelMember(userId int64, channelId int64) *ChannelMember {
	return &ChannelMember{
		UserId:    userId,
		ChannelId: channelId,
		ReadAt:    time.Now(),
	}
}