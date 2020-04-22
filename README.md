# chat-space DB設計

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :posts
- has_many :ChatGroup, through:  :Users_ChatGroup
- has_many :Users_ChatGroup


## ChatGroupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :posts
- has_many :users, through:  :Users_ChatGroup
- has_many :Users_ChatGroup


## Postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
### Association
- belong_to :user
- belong_to :ChatGroup


## Users_ChatGroupテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|ChatGroup_id|integer|null: false, foreign_key: true|
### Association
- belong_to :users
- belong_to :ChatGroup
