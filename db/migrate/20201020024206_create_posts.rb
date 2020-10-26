class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      
      t.string :title
      t.string :string
      t.string :img_url
      t.string :username
      t.timestamp :created_at
      t.timestamp :updated_at
    end
  end
end
