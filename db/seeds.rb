# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Anime.destroy_all
Episode.destroy_all 




# ʚ♥ɞ Fetching our data from our AnimeAPI


response = RestClient.get(
'http://localhost:3000/animix/all')
result = JSON.parse response

    # ʚ♥ɞ anime title and api id
    title_of_anime      = []
    animes                  = []
    result.each do |entry| 
        title_of_anime.push(
            entry["animeTitle"]
        )
    animes.push(
        entry["animeId"]
    )

    end

    
                        animes.each do |anime|

                        # ʚ♥ɞ anime info 
                        anime_info_response = RestClient.get(
                        "https://localhost:3000/animix/info/#{anime}")
                        anime_info_result = JSON.parse anime_info_response

                        anime_mal_id    = anime_info_result["mal_id"]
                        anime_img       = anime_info_result["animeImg"]
                        anime_status    = anime_info_result["status"]
                        anime_score     = anime_info_result["score"]
                        anime_synopsis  = anime_info_result["synopsis"]
                        anime_genre     = anime_info_result["genres"]

                        #ʚ♥ɞ anime episode links 
                        anime_episode_links = RestClient.get(
                        "https://localhost:3000/animix/episodes/#{anime}")
                        anime_episode_links = JSON.parse anime_episode_links
                        
                        anime_total_episodes     = anime_episode_links["total_episodes"]
                        anime_episode_links_all = anime_episode_links["episodes"]


      
                        # ฅʕ>ᴥ<ʔฅ iterator for anime board 
        anime_entry =   Anime.create!(
                        anime_title:    anime["animeTitle"],
                        api_id:         anime["animeId"],
                        mal_id:         anime["mal_id"],
                        anime_image:    anime["animeImg"],
                        episode_count:  anime_episode_links["total_episodes"],
                        status:         anime["status"],
                        score:          anime["score"],
                        synopsis:       anime["synopsis"],
                        genre:          anime["genre"]
                        )

                            
                            # ฅʕ>ᴥ<ʔฅ iterator for episode table 
                            anime_episode_links_all.each do |link|
  episodes_for_each_entry = Episode.create!( 
            
                                    ep_num:     link["epNum"],
                                    link:             link["link"],
                                    anime_id:   anime_entry.id 
                                )

                        

                    end 
                end


# ʚ♥ɞ Comments Table 

# ʚ♥ɞ Users Table

# ʚ♥ɞ Followers Table




