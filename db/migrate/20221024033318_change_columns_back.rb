class ChangeColumnsBack < ActiveRecord::Migration[6.1]
  def change
    remove_column(:lr_animes, :mal_id)
    remove_column(:lr_animes, :anime_image)
    remove_column(:lr_animes, :episodes)
    remove_column(:lr_animes, :lr_anime_title)


    add_column(:lr_animes, :mal_id, :text)
    add_column(:lr_animes, :anime_image, :text)
    add_column(:lr_animes, :episodes, :text)
    add_column(:lr_animes, :lr_anime_title, :text)

    remove_column(:weekly_top_animes, :mal_id)
    remove_column(:weekly_top_animes, :animeImg)
    remove_column(:weekly_top_animes, :score)
    remove_column(:weekly_top_animes, :animeTitle)

    add_column(:weekly_top_animes, :mal_id, :text)
    add_column(:weekly_top_animes, :animeImg, :text)
    add_column(:weekly_top_animes, :score, :text)
    add_column(:weekly_top_animes, :animeTitle, :text)
  end
end
