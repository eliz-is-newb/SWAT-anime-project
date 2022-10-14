class CreateEpisodes < ActiveRecord::Migration[6.1]
  def change
    create_table :episodes do |t|
      t.integer :anime_id
      t.integer :ep_num
      t.integer :link

      t.timestamps
    end
  end
end
