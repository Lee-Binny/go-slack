package dto

type CreateChannelDto struct {
	TargetId int64  `json:"target_id" binding:"required"`
	Name     string `json:"name" binding:"required"`
}

type CreateGroupChannelDto struct {
	TargetId int64         `json:"target_id" binding:"required"`
	Name     string        `json:"name" binding:"required"`
	Members  []int64       `json:"members" binding:"required"`
}

type InviteMembersDto struct {
	TargetId int64   `json:"target_id" binding:"required"`
	Members  []int64 `json:"members" binding:"required"`
}