package services

import (
	"go-slack/dto"
	"go-slack/models"
	"go-slack/repositories"
)

func GetAllChannels(userId int64) *models.Channels {
	return repositories.GetAllChannels(userId)
}

func CreateChannel(dto *dto.CreateChannelDto, userId int64) (*models.Channel, error) {
	channel := models.NewChannel(dto.Name, true, 1)
	newChannel, err := repositories.CreateChannel(channel)
	if err != nil {
		return nil, err
	}

	member := models.NewChannelMember(userId, newChannel.Id)
	err = repositories.CreateChannelMember(member)
	if err != nil {
		return nil, err
	}

	opntMember := models.NewChannelMember(dto.TargetId, newChannel.Id)
	err = repositories.CreateChannelMember(opntMember)
	if err != nil {
		return nil, err
	}

	return newChannel, nil
}

func CreateGroupChannel(dto *dto.CreateGroupChannelDto, userId int64) (*models.Channel, error) {
	channel := models.NewChannel(dto.Name, false, len(dto.Members))
	newChannel, err := repositories.CreateChannel(channel)
	if err != nil {
		return nil, err
	}

	dto.Members = append(dto.Members, userId)

	members := models.ChannelMembers{}
	for _, id := range dto.Members {
		member := models.NewChannelMember(id, newChannel.Id)
		members = append(members, *member)
	}

	err = repositories.CreateChannelMembers(&members)
	if err != nil {
		return nil, err
	}

	return newChannel, nil
}

func InviteMembers(dto *dto.InviteMembersDto) (*models.Users, error) {
	members := models.ChannelMembers{}
	for _, id := range dto.Members {
		member := models.NewChannelMember(id, dto.TargetId)
		members = append(members, *member)
	}

	err := repositories.CreateChannelMembers(&members)
	if err != nil {
		return nil, err
	}

	err = repositories.UpdateMemberCount(dto.TargetId, len(dto.Members))
	if err != nil {
		return nil, err
	}

	users, err := repositories.GetUsersName(dto.Members)
	if err != nil {
		return nil, err
	}

	return users, nil
}

