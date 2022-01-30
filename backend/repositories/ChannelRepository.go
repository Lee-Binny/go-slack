package repositories

import (
	"go-slack/db"
	"go-slack/models"
	"gorm.io/gorm"
)

func GetAllChannels(userId int64) *models.Channels {
	channels := models.Channels{}
	db.DB.Find(&channels, userId)
	return &channels
}

func GetChannel(channelId int64) (*models.Channel, error) {
	channel := models.Channel{}
	err := db.DB.First(&channel, channelId).Error
	if err != nil {
		return nil, err
	}
	return &channel, nil
}

func CreateChannel(channel *models.Channel) (*models.Channel, error) {
	err := db.DB.Create(channel).Error
	return channel, err
}

func UpdateMemberCount(channelId int64, increment int) error {
	return db.DB.Model(&models.Channel{}).
		Where("id = ?", channelId).
		Update("member_count", gorm.Expr("member_count + ?", increment)).
		Error

}