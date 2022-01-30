package repositories

import (
	"go-slack/db"
	"go-slack/models"
)

func GetAllChannelMembers() *models.ChannelMembers {
	channelMembers := models.ChannelMembers{}
	db.DB.Find(&channelMembers)
	return &channelMembers
}

func CreateChannelMember(member *models.ChannelMember) error {
	return db.DB.Create(member).Error
}

func CreateChannelMembers(members *models.ChannelMembers) error {
	for _, member := range *members {
		err := db.DB.Create(&member).Error
		if err != nil {
			return err
		}
	}
	return nil
}