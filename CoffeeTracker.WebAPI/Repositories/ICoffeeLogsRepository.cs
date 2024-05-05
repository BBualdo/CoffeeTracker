using CoffeeTracker.WebAPI.Models;

namespace CoffeeTracker.WebAPI.Repositories;

public interface ICoffeeLogsRepository
{
  Task<IEnumerable<CoffeeLog>> GetAllAsync();
  Task<CoffeeLog?> GetByIdAsync(int id);
  Task AddAsync(CoffeeLog log);
  Task UpdateAsync(CoffeeLog log);
  Task Delete(CoffeeLog log);
}
