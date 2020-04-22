# chat-space DB設計

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|
|chat-group_id|integer|null: false,foreign_key: true|
### Association
- has_many :posts
- has_many :ChatGroup, through:  :posts_tags
- has_many :Users_ChatGroup


## ChatGroupテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|member|string|null: false|
|users_id|integer|null: false,foreign_key: true|
### Association
- has_many :posts
- has_many :users
- has_many :Users_ChatGroup


## Postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
### Association
- belong_to :users
- belong_to :ChatGroup


## Users_ChatGroupテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|ChatGroup_id|integer|null: false, foreign_key: true|
### Association
- belong_to :users
- belong_to :ChatGroup
