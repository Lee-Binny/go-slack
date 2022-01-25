package dto

import "golang.org/x/crypto/bcrypt"

type SignUpDto struct {
	Uid      string `json:"uid" binding:"required"`
	Password string `json:"password" binding:"required"`
	Name     string `json:"name" binding:"required"`
}

func (d *SignUpDto) HashPassword() error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(d.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	d.Password = string(hashedPassword)
	return nil
}

type SignInDto struct {
	Uid      string `json:"uid" binding:"required"`
	Password string `json:"password" binding:"required"`
}