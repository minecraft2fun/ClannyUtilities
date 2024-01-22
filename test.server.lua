--[[
    SERVER
```lua
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Event: RemoteEvent = ReplicatedStorage:WaitForChild("MakeSystemMessage")

local SpectatorTeam = BrickColor.new("White")

Players.PlayerAdded:Connect(function(player)
	local BackReady = false
	player.Chatted:Connect(function(message)
		if string.lower(message) == "!afk" then
			player.TeamColor = SpectatorTeam
			player:LoadCharacter()
			Event:FireAllClients(`{player.Name} has gone AFK,`, Color3.fromRGB(102, 47, 47))
			wait(2)
			BackReady = true
		end
	end)
	player.CharacterAdded:Connect(function(character)
		local Humanoid: Humanoid = character:WaitForChild("Humanoid")
		Humanoid.Changed:Connect(function(property)
			if not BackReady then
				return
			end
			if property == "MoveDirection" then
				if Humanoid.MoveDirection.Magnitude > 0 then
					BackReady = false
					Event:FireAllClients(`{player.Name} has returned from AFK,`, Color3.fromRGB(111, 228, 107))
				end
			end
		end)
	end)
end)
```
]]

--[[
CLIENT
```lua
local StarterGui = game:GetService("StarterGui")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local MakeSystemMessage:RemoteEvent = ReplicatedStorage:WaitForChild("MakeSystemMessage")

MakeSystemMessage.OnClientEvent:Connect(function(text:string, color:Color3)
	StarterGui:SetCore("ChatMakeSystemMessage", {
		Text = text;
		Color = color;
		Font = Enum.Font.SourceSansBold;
		FontSize = Enum.FontSize.Size24;
	})
end)
```
]]
type clanware = {
	Activate: () -> boolean,
	isListed: (player: Player) -> (boolean, boolean),
}

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Event: RemoteEvent = ReplicatedStorage:WaitForChild("MakeSystemMessage")
local ClanwareApi: clanware
ClanwareApi.Activate()

Players.PlayerAdded:Connect(function(player)
	local Xplt, Dgn = ClanwareApi.isListed(player)
	if Xplt then
		Event:FireAllClients(`[CW-XPLT] {player.Name} has joined the game.`, Color3.fromRGB(242, 85, 93))
	elseif Dgn then
		Event:FireAllClients(`[CW-DGN] {player.Name} has joined the game.`, Color3.fromRGB(242, 85, 93))
	end
end)
