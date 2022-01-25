package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func ResponseOK(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"ok": "true",
	})
}

func ResponseOKWithObject(c *gin.Context, obj map[string]interface{}) {
	res := map[string]interface{}{"ok": "true"}
	for key, value := range obj {
		res[key] = value
	}
	c.JSON(http.StatusOK, res)
}

func ResponseErrorWithCode(c *gin.Context, code int, err error) {
	c.JSON(code, gin.H{
		"error": err.Error(),
	})
}