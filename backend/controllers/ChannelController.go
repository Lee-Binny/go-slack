package controllers

import (
	"errors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"go-slack/dto"
	"go-slack/services"
	"net/http"
)

func GetAllChannels(c *gin.Context) {
	session := sessions.Default(c)
	userId := session.Get("userId")
	if userId == nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, errors.New("expired session"))
		return
	}

	ResponseOKWithObject(c, gin.H{
		"channels": services.GetAllChannels(userId.(int64)),
	})
}

func CreateChannel(c *gin.Context) {
	dto := &dto.CreateChannelDto{}
	err := c.Bind(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	session := sessions.Default(c)
	userId := session.Get("userId")
	if userId == nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, errors.New("expired session"))
		return
	}

	channel, err := services.CreateChannel(dto, userId.(int64))
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"channel": channel,
	})
}

func CreateGroupChannel(c *gin.Context) {
	dto := &dto.CreateGroupChannelDto{}
	err := c.Bind(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	session := sessions.Default(c)
	userId := session.Get("userId")
	if userId == nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, errors.New("expired session"))
		return
	}

	channel, err := services.CreateGroupChannel(dto, userId.(int64))
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"channel": channel,
	})
}

func InviteMembers(c *gin.Context) {
	dto := &dto.InviteMembersDto{}
	err := c.Bind(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	users, err := services.InviteMembers(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"users": users,
	})
}