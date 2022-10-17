class AnimesController < ApplicationController
  before_action :set_anime, only: %i[ show edit update destroy ]
  
  rescue_from ActiveRecord::RecordNotFound, with:, :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

  # GET /animes or /animes.json
  def index
    @animes = Anime.order(:anime_title).page params[:page]
    # @animes = Anime.order(:mal_id).page params[:page]
    # @animes = Anime.order(:anime_image).page params[:page]
    # @animes = Anime.order(:episode_count).page params[:page]
    # @animes = Anime.order(:status).page params[:page]
    # @animes = Anime.order(:score).page params[:page]
    # @animes = Anime.order(:synopsis).page params[:page]
    # @animes = Anime.order(:genre).page params[:page]

  end

  # GET /animes/1 or /animes/1.json
  def show
  end

  # GET /animes/new
  def new
    @anime = Anime.new
  end

  # GET /animes/1/edit
  def edit
  end

  # POST /animes or /animes.json
  def create
    @anime = Anime.new(anime_params)

    respond_to do |format|
      if @anime.save
        format.html { redirect_to anime_url(@anime), notice: "Anime was successfully created." }
        format.json { render :show, status: :created, location: @anime }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @anime.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /animes/1 or /animes/1.json
  def update
    respond_to do |format|
      if @anime.update(anime_params)
        format.html { redirect_to anime_url(@anime), notice: "Anime was successfully updated." }
        format.json { render :show, status: :ok, location: @anime }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @anime.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /animes/1 or /animes/1.json
  def destroy
    @anime.destroy

    respond_to do |format|
      format.html { redirect_to animes_url, notice: "Anime was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_anime
      @anime = Anime.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def anime_params
      params.require(:anime).permit(:api_id, :anime_title, :mal_id, :anime_image, :episode_count, :status, :score, :synopsis, :genre)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end 
  
  def render_not_found_response 
      render json: { error: "Anime not found"}, status: :not_found 
  end 


end
