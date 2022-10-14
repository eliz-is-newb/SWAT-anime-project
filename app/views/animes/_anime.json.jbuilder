json.extract! anime, :id, :api_id, :anime_title, :mal_id, :anime_image, :episodes, :status, :score, :synopsis, :genre, :created_at, :updated_at
json.url anime_url(anime, format: :json)
