require 'httparty'

puts "please enter an IP address"

answer = gets.chomp

send = HTTParty.get(answer)

puts send

answer2 = true
while answer2

puts "which celebrity might this be?"

celeb = gets.chomp

send2 = HTTParty.get("#{answer}/#{celeb}")

if send2['correct']
puts send2['correct']
answer2 = false

else send2['incorrect']
puts send2['incorrect']
answer2 = true
end

end


