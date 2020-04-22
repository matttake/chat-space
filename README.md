# chat-space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :posts
- has_many :groups, through:  :users_groups
- has_many :users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :posts
- has_many :users, through:  :users_groups
- has_many :users_groups


## postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
### Association
- belong_to :user
- belong_to :group


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belong_to :users
- belong_to :group
