class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.text :name
      t.text :username
      t.text :email
      t.text :password_digest
      t.text :bio 
      t.text :profile_picture 

      t.timestamps
    end
  end
end
