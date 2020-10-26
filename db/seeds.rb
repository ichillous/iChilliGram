# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Destroy goes here 
Post.destroy_all
Comment.destroy_all
Tag.destroy_all

@tag1 = Tag.create!(name: 'Tag1', category: 'Lame')
@tag2 = Tag.create!(name: 'Tag2', category: 'Cool')
@tag3 = Tag.create!(name: 'Tag3', category: 'Thats hard')
@tag4 = Tag.create!(name: 'Tag4', category: 'Damn Son, how you do that!?')

@post = Post.create!(title: 'Hope you like season 4!', string: 'n/a', img_url: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/11/stranger-things-season-3-83cae06.jpg?quality=90&resize=620%2C413.png', username: '@StrangerThings', tag: @tag4 )

@comment = Comment.create!(username: '@StrangerThings', content: 'Add a like!', like: true, post: @post)

