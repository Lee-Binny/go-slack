package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"go-slack/controllers"
	"go-slack/db"
)

func main() {
	r := gin.Default()
	store := cookie.NewStore([]byte("secret"))
	store.Options(sessions.Options{MaxAge:   60 * 60 * 24}) // expire in a day
	r.Use(sessions.Sessions("mysession", store))

	db.ConnectDB()

	user := r.Group("/user")
	{
		user.GET("/", controllers.GetAllUsers) // 전체 유저 조회
		user.GET(":id", controllers.GetOneUser) // id로 유저 조회
		user.GET("/search/:name", controllers.GetOneUserByName) // name 유저 조
		user.POST("/signup", controllers.SignUp) // 회원가입
		user.POST("/signin", controllers.SignIn) // 로그인
		user.GET("/logout", controllers.Logout) // 로그인
	}

	channel := r.Group("/channel")
	{
		channel.GET("/", controllers.GetAllChannels) // 전체 채널 조호
		channel.POST("/", controllers.CreateChannel) // DM 채널 생성
		channel.POST("/group", controllers.CreateGroupChannel) // 그룹 채널 생성
		channel.PUT("/invite", controllers.InviteMembers) // 멤버 초대
	}
	r.Run()
}