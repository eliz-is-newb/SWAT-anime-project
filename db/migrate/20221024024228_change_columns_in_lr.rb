class ChangeColumnsInLr < ActiveRecord::Migration[6.1]
  def change
    remove_column(:lr_animes, :mal_id)
    remove_column(:lr_animes, :anime_image)
    remove_column(:lr_animes, :episodes)
    remove_column(:lr_animes, :lr_anime_title)


    add_column(:lr_animes, :mal_id, :string, default: [], array: true)
    add_column(:lr_animes, :anime_image, :string, default: [], array: true)
    add_column(:lr_animes, :episodes, :string, default: [], array: true)
    add_column(:lr_animes, :lr_anime_title, :string, default: [], array: true)

    remove_column(:weekly_top_animes, :mal_id)
    remove_column(:weekly_top_animes, :animeImg)
    remove_column(:weekly_top_animes, :score)
    remove_column(:weekly_top_animes, :animeTitle)

    add_column(:weekly_top_animes, :mal_id, :string, default: [], array: true)
    add_column(:weekly_top_animes, :animeImg, :string, default: [], array: true)
    add_column(:weekly_top_animes, :score, :string, default: [], array: true)
    add_column(:weekly_top_animes, :animeTitle, :string, default: [], array: true)

  end
end
