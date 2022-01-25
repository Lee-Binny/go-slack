package controllers

import (
	"github.com/gin-gonic/gin"
	"go-slack/dto"
	"go-slack/services"
	"net/http"
)

func GetAllUsers(c *gin.Context) {
	ResponseOKWithObject(c, gin.H{
		"users": services.GetAllUsers(),
	})
}

func GetOneUser(c *gin.Context) {
	user, err := services.GetOneUser(c.Param("id"))
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
	req := &dto.SignUpDto{}
	err := c.Bind(req)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	user, err := services.SignUp(req)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOKWithObject(c, gin.H{
		"user": user,
	})
}

func SignIn(c *gin.Context) {
	req := &dto.SignInDto{}
	err := c.Bind(req)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	err = services.SignIn(req)
	if err != nil {
		ResponseErrorWithCode(c, http.StatusBadRequest, err)
		return
	}

	ResponseOK(c)
}