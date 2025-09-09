import { DojoProvider, DojoCall } from "@dojoengine/core";
import { Account, AccountInterface, Number, CairoOption, CairoCustomEnum } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const build_achieve_achieveBeastChat_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_chat",
			calldata: [],
		};
	};

	const achieve_achieveBeastChat = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastChat_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveBeastClean_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_clean",
			calldata: [],
		};
	};

	const achieve_achieveBeastClean = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastClean_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveBeastFeed_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_feed",
			calldata: [],
		};
	};

	const achieve_achieveBeastFeed = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastFeed_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveBeastPet_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_pet",
			calldata: [],
		};
	};

	const achieve_achieveBeastPet = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastPet_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveBeastShare_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_share",
			calldata: [],
		};
	};

	const achieve_achieveBeastShare = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastShare_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveBeastSleep_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_beast_sleep",
			calldata: [],
		};
	};

	const achieve_achieveBeastSleep = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveBeastSleep_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveFlappyBeastHighscore_calldata = (score: Number): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_flappy_beast_highscore",
			calldata: [score],
		};
	};

	const achieve_achieveFlappyBeastHighscore = async (snAccount: Account | AccountInterface, score: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveFlappyBeastHighscore_calldata(score),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achievePlatformHighscore_calldata = (score: Number): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_platform_highscore",
			calldata: [score],
		};
	};

	const achieve_achievePlatformHighscore = async (snAccount: Account | AccountInterface, score: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achievePlatformHighscore_calldata(score),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achievePlayMinigame_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_play_minigame",
			calldata: [],
		};
	};

	const achieve_achievePlayMinigame = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achievePlayMinigame_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achievePlayerNewTotalPoints_calldata = (): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_player_new_total_points",
			calldata: [],
		};
	};

	const achieve_achievePlayerNewTotalPoints = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achievePlayerNewTotalPoints_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_achieve_achieveScoreShare_calldata = (score: Number): DojoCall => {
		return {
			contractName: "achieve",
			entrypoint: "achieve_score_share",
			calldata: [score],
		};
	};

	const achieve_achieveScoreShare = async (snAccount: Account | AccountInterface, score: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_achieve_achieveScoreShare_calldata(score),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_awake_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "awake",
			calldata: [],
		};
	};

	const game_awake = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_awake_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_clean_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "clean",
			calldata: [],
		};
	};

	const game_clean = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_clean_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_feed_calldata = (foodId: Number): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "feed",
			calldata: [foodId],
		};
	};

	const game_feed = async (snAccount: Account | AccountInterface, foodId: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_feed_calldata(foodId),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_getBeastAge_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "get_beast_age",
			calldata: [],
		};
	};

	const game_getBeastAge = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_getBeastAge_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_getBeastAgeWithAddress_calldata = (address: string): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "get_beast_age_with_address",
			calldata: [address],
		};
	};

	const game_getBeastAgeWithAddress = async (snAccount: Account | AccountInterface, address: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_getBeastAgeWithAddress_calldata(address),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_getTimestampBasedStatus_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "get_timestamp_based_status",
			calldata: [],
		};
	};

	const game_getTimestampBasedStatus = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_getTimestampBasedStatus_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_getTimestampBasedStatusWithAddress_calldata = (address: string): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "get_timestamp_based_status_with_address",
			calldata: [address],
		};
	};

	const game_getTimestampBasedStatusWithAddress = async (snAccount: Account | AccountInterface, address: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_getTimestampBasedStatusWithAddress_calldata(address),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_maxEnergy_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "max_energy",
			calldata: [],
		};
	};

	const game_maxEnergy = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_maxEnergy_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_pet_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "pet",
			calldata: [],
		};
	};

	const game_pet = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_pet_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_play_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "play",
			calldata: [],
		};
	};

	const game_play = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_play_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_revive_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "revive",
			calldata: [],
		};
	};

	const game_revive = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_revive_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_setBeastName_calldata = (name: Number): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "set_beast_name",
			calldata: [name],
		};
	};

	const game_setBeastName = async (snAccount: Account | AccountInterface, name: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_setBeastName_calldata(name),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_sleep_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "sleep",
			calldata: [],
		};
	};

	const game_sleep = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_sleep_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_spawnBeast_calldata = (specie: Number, beastType: Number, name: Number): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "spawn_beast",
			calldata: [specie, beastType, name],
		};
	};

	const game_spawnBeast = async (snAccount: Account | AccountInterface, specie: Number, beastType: Number, name: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_spawnBeast_calldata(specie, beastType, name),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_spawnBeastCustomStatus_calldata = (specie: Number, beastType: Number, beastStatus: models.BeastStatusCustom, name: Number): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "spawn_beast_custom_status",
			calldata: [specie, beastType, beastStatus, name],
		};
	};

	const game_spawnBeastCustomStatus = async (snAccount: Account | AccountInterface, specie: Number, beastType: Number, beastStatus: models.BeastStatusCustom, name: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_spawnBeastCustomStatus_calldata(specie, beastType, beastStatus, name),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_updateBeast_calldata = (): DojoCall => {
		return {
			contractName: "game",
			entrypoint: "update_beast",
			calldata: [],
		};
	};

	const game_updateBeast = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_updateBeast_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_addOrUpdateFoodAmount_calldata = (foodId: Number, amount: Number, price: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "add_or_update_food_amount",
			calldata: [foodId, amount, price],
		};
	};

	const player_addOrUpdateFoodAmount = async (snAccount: Account | AccountInterface, foodId: Number, amount: Number, price: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_addOrUpdateFoodAmount_calldata(foodId, amount, price),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_emitPlayerPushToken_calldata = (token: string): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "emit_player_push_token",
			calldata: [token],
		};
	};

	const player_emitPlayerPushToken = async (snAccount: Account | AccountInterface, token: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_emitPlayerPushToken_calldata(token),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_purchaseWithGems_calldata = (gems: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "purchase_with_gems",
			calldata: [gems],
		};
	};

	const player_purchaseWithGems = async (snAccount: Account | AccountInterface, gems: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_purchaseWithGems_calldata(gems),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_setPlayerName_calldata = (name: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "set_player_name",
			calldata: [name],
		};
	};

	const player_setPlayerName = async (snAccount: Account | AccountInterface, name: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_setPlayerName_calldata(name),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_setWorldCoinAddress_calldata = (address: EthAddress): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "set_world_coin_address",
			calldata: [address],
		};
	};

	const player_setWorldCoinAddress = async (snAccount: Account | AccountInterface, address: EthAddress) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_setWorldCoinAddress_calldata(address),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_spawnPlayer_calldata = (): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "spawn_player",
			calldata: [],
		};
	};

	const player_spawnPlayer = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_spawnPlayer_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_updatePlayerDailyStreak_calldata = (): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "update_player_daily_streak",
			calldata: [],
		};
	};

	const player_updatePlayerDailyStreak = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_updatePlayerDailyStreak_calldata(),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_updatePlayerMinigameHighestScore_calldata = (points: Number, minigameId: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "update_player_minigame_highest_score",
			calldata: [points, minigameId],
		};
	};

	const player_updatePlayerMinigameHighestScore = async (snAccount: Account | AccountInterface, points: Number, minigameId: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_updatePlayerMinigameHighestScore_calldata(points, minigameId),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_updatePlayerTotalCoins_calldata = (coins: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "update_player_total_coins",
			calldata: [coins],
		};
	};

	const player_updatePlayerTotalCoins = async (snAccount: Account | AccountInterface, coins: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_updatePlayerTotalCoins_calldata(coins),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_updatePlayerTotalGems_calldata = (gems: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "update_player_total_gems",
			calldata: [gems],
		};
	};

	const player_updatePlayerTotalGems = async (snAccount: Account | AccountInterface, gems: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_updatePlayerTotalGems_calldata(gems),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_player_updatePlayerTotalPoints_calldata = (points: Number): DojoCall => {
		return {
			contractName: "player",
			entrypoint: "update_player_total_points",
			calldata: [points],
		};
	};

	const player_updatePlayerTotalPoints = async (snAccount: Account | AccountInterface, points: Number) => {
		try {
			return await provider.execute(
				snAccount,
				build_player_updatePlayerTotalPoints_calldata(points),
				"tamagotchi",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};



	return {
		achieve: {
			achieveBeastChat: achieve_achieveBeastChat,
			buildAchieveBeastChatCalldata: build_achieve_achieveBeastChat_calldata,
			achieveBeastClean: achieve_achieveBeastClean,
			buildAchieveBeastCleanCalldata: build_achieve_achieveBeastClean_calldata,
			achieveBeastFeed: achieve_achieveBeastFeed,
			buildAchieveBeastFeedCalldata: build_achieve_achieveBeastFeed_calldata,
			achieveBeastPet: achieve_achieveBeastPet,
			buildAchieveBeastPetCalldata: build_achieve_achieveBeastPet_calldata,
			achieveBeastShare: achieve_achieveBeastShare,
			buildAchieveBeastShareCalldata: build_achieve_achieveBeastShare_calldata,
			achieveBeastSleep: achieve_achieveBeastSleep,
			buildAchieveBeastSleepCalldata: build_achieve_achieveBeastSleep_calldata,
			achieveFlappyBeastHighscore: achieve_achieveFlappyBeastHighscore,
			buildAchieveFlappyBeastHighscoreCalldata: build_achieve_achieveFlappyBeastHighscore_calldata,
			achievePlatformHighscore: achieve_achievePlatformHighscore,
			buildAchievePlatformHighscoreCalldata: build_achieve_achievePlatformHighscore_calldata,
			achievePlayMinigame: achieve_achievePlayMinigame,
			buildAchievePlayMinigameCalldata: build_achieve_achievePlayMinigame_calldata,
			achievePlayerNewTotalPoints: achieve_achievePlayerNewTotalPoints,
			buildAchievePlayerNewTotalPointsCalldata: build_achieve_achievePlayerNewTotalPoints_calldata,
			achieveScoreShare: achieve_achieveScoreShare,
			buildAchieveScoreShareCalldata: build_achieve_achieveScoreShare_calldata,
		},
		game: {
			awake: game_awake,
			buildAwakeCalldata: build_game_awake_calldata,
			clean: game_clean,
			buildCleanCalldata: build_game_clean_calldata,
			feed: game_feed,
			buildFeedCalldata: build_game_feed_calldata,
			getBeastAge: game_getBeastAge,
			buildGetBeastAgeCalldata: build_game_getBeastAge_calldata,
			getBeastAgeWithAddress: game_getBeastAgeWithAddress,
			buildGetBeastAgeWithAddressCalldata: build_game_getBeastAgeWithAddress_calldata,
			getTimestampBasedStatus: game_getTimestampBasedStatus,
			buildGetTimestampBasedStatusCalldata: build_game_getTimestampBasedStatus_calldata,
			getTimestampBasedStatusWithAddress: game_getTimestampBasedStatusWithAddress,
			buildGetTimestampBasedStatusWithAddressCalldata: build_game_getTimestampBasedStatusWithAddress_calldata,
			maxEnergy: game_maxEnergy,
			buildMaxEnergyCalldata: build_game_maxEnergy_calldata,
			pet: game_pet,
			buildPetCalldata: build_game_pet_calldata,
			play: game_play,
			buildPlayCalldata: build_game_play_calldata,
			revive: game_revive,
			buildReviveCalldata: build_game_revive_calldata,
			setBeastName: game_setBeastName,
			buildSetBeastNameCalldata: build_game_setBeastName_calldata,
			sleep: game_sleep,
			buildSleepCalldata: build_game_sleep_calldata,
			spawnBeast: game_spawnBeast,
			buildSpawnBeastCalldata: build_game_spawnBeast_calldata,
			spawnBeastCustomStatus: game_spawnBeastCustomStatus,
			buildSpawnBeastCustomStatusCalldata: build_game_spawnBeastCustomStatus_calldata,
			updateBeast: game_updateBeast,
			buildUpdateBeastCalldata: build_game_updateBeast_calldata,
		},
		player: {
			addOrUpdateFoodAmount: player_addOrUpdateFoodAmount,
			buildAddOrUpdateFoodAmountCalldata: build_player_addOrUpdateFoodAmount_calldata,
			emitPlayerPushToken: player_emitPlayerPushToken,
			buildEmitPlayerPushTokenCalldata: build_player_emitPlayerPushToken_calldata,
			purchaseWithGems: player_purchaseWithGems,
			buildPurchaseWithGemsCalldata: build_player_purchaseWithGems_calldata,
			setPlayerName: player_setPlayerName,
			buildSetPlayerNameCalldata: build_player_setPlayerName_calldata,
			setWorldCoinAddress: player_setWorldCoinAddress,
			buildSetWorldCoinAddressCalldata: build_player_setWorldCoinAddress_calldata,
			spawnPlayer: player_spawnPlayer,
			buildSpawnPlayerCalldata: build_player_spawnPlayer_calldata,
			updatePlayerDailyStreak: player_updatePlayerDailyStreak,
			buildUpdatePlayerDailyStreakCalldata: build_player_updatePlayerDailyStreak_calldata,
			updatePlayerMinigameHighestScore: player_updatePlayerMinigameHighestScore,
			buildUpdatePlayerMinigameHighestScoreCalldata: build_player_updatePlayerMinigameHighestScore_calldata,
			updatePlayerTotalCoins: player_updatePlayerTotalCoins,
			buildUpdatePlayerTotalCoinsCalldata: build_player_updatePlayerTotalCoins_calldata,
			updatePlayerTotalGems: player_updatePlayerTotalGems,
			buildUpdatePlayerTotalGemsCalldata: build_player_updatePlayerTotalGems_calldata,
			updatePlayerTotalPoints: player_updatePlayerTotalPoints,
			buildUpdatePlayerTotalPointsCalldata: build_player_updatePlayerTotalPoints_calldata,
		},
	};
}