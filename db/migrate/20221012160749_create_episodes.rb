class CreateEpisodes < ActiveRecord::Migration[6.1]
  def change
    create_table :episodes do |t|
      t.integer :anime_id
      t.text :anime_title
      t.text :ep_num
      t.text :links, array: true, default:[] 
      t.text :mal_id 
      t.timestamps
    end
  end
end
