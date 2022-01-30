package controllers

import (
	"errors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"go-slack/dto"
	"go-slack/services"
	"net/http"
	"strconv"
)

func GetAllUsers(c *gin.Context) {
	ResponseOKWithObject(c, gin.H{
		"users": services.GetAllUsers(),
	})
}

func GetOneUser(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		panic(err)
	}

	user, err := services.GetOneUser(id)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusNotFound, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"user": user,
	})
}

func GetOneUserByName(c *gin.Context) {
	users, err := services.GetOneUserByName(c.Param("name"))
	if err != nil {
		ResponseErrorWithCode(c, http.StatusNotFound, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"users": users,
	})
}

func SignUp(c *gin.Context) {
	dto := &dto.SignUpDto{}
	err := c.Bind(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	user, err := services.SignUp(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"user": user,
	})
}

func SignIn(c *gin.Context) {
	dto := &dto.SignInDto{}
	err := c.Bind(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	user, err := services.SignIn(dto)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	session := sessions.Default(c)
	session.Set("userId", user.Id)
	session.Set("userUid", user.Uid)
	session.Set("userName", user.Name)
	err = session.Save()
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, errors.New("session doesn't save"))
		return
	}

	ResponseOKWithObject(c, gin.H{
		"user": user,
	})
}

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	session.Save()
}