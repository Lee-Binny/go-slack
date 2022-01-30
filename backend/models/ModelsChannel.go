package models

import (
	"time"
)

type Channels []Channel
type Channel struct {
	Id          int64     `gorm:"primaryKey;autoIncrement"`
	Name        string    `gorm:"size:45;not null"`
	IsDm        bool      `gorm:"not null"`
	MemberCount int       `gorm:"not null"`
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}

func NewChannel(name string, isDm bool, memCount int) *Channel {
	return &Channel{
		Name:        name,
		IsDm:        isDm,
		MemberCount: memCount,
	}
}