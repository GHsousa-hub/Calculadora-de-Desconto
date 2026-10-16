function calculateDiscount(value) {
            let discountRate = 0;
            
            // Condições de desconto conforme especificado
            if (value < 100) {
                // Menor que 100: sem desconto
                discountRate = 0;
            } else if (value >= 100 && value < 500) {
                // Entre 100 e 499.99: 5% de desconto
                discountRate = 5;
            } else if (value >= 500) {
                // Maior ou igual a 500 (AAAA): 10% de desconto
                discountRate = 10;
            }
            
            const discountAmount = (value * discountRate) / 100;
            const finalTotal = value - discountAmount;
            
            return {
                discountRate,
                discountAmount,
                finalTotal
            };
        }

        function formatCurrency(value) {
            return value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        }

        document.getElementById('discountForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const purchaseValue = parseFloat(document.getElementById('purchaseValue').value);
            
            if (isNaN(purchaseValue) || purchaseValue < 0) {
                alert('Por favor, insira um valor válido.');
                return;
            }
            
            const result = calculateDiscount(purchaseValue);
            
            // Atualiza os valores na interface
            document.getElementById('originalValue').textContent = formatCurrency(purchaseValue);
            document.getElementById('discountRate').textContent = result.discountRate + '%';
            document.getElementById('discountAmount').textContent = formatCurrency(result.discountAmount);
            document.getElementById('finalTotal').textContent = formatCurrency(result.finalTotal);
            
            // Mostra a seção de resultados
            document.getElementById('result').classList.add('show');
        });