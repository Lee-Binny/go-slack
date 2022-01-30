package services

import (
	"errors"
	"go-slack/dto"
	"go-slack/models"
	"go-slack/repositories"
)

func GetAllUsers() *models.Users {
	return repositories.GetAllUsers()
}

func GetOneUser(id int64) (*models.User, error) {
	return repositories.GetOneUser(id)
}

func GetOneUserByName(name string) (*models.Users, error) {
	return repositories.GetOneUserByName(name)
}

func SignUp(dto *dto.SignUpDto) (*models.User, error) {
	err := dto.HashPassword()
	if err != nil {
		return nil, err
	}

	newUser := models.NewUser(dto.Uid, dto.Password, dto.Name)
	user, err := repositories.CreateUser(newUser)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func SignIn(dto *dto.SignInDto) (*models.User, error) {
	user, err := repositories.GetOneUserByUid(dto.Uid)
	if err != nil {
		return nil, err
	}

	err = user.IsMatchedPassword(dto.Password)
	if err != nil {
		return nil, errors.New("not matched password")
	}

	// TODO 토큰 생성

	return user, nil
}