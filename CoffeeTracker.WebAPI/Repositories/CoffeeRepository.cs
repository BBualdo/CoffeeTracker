using CoffeeTracker.WebAPI.Data;
using CoffeeTracker.WebAPI.Models;

namespace CoffeeTracker.WebAPI.Repositories;

public class CoffeeRepository : ICoffeeLogsRepository
{
  private readonly CoffeeTrackerContext _context;

  public CoffeeRepository(CoffeeTrackerContext context)
  {
    _context = context;
  }

  public Task AddAsync(CoffeeLog log)
  {
    throw new NotImplementedException();
  }

  public Task Delete(CoffeeLog log)
  {
    throw new NotImplementedException();
  }

  public Task<IEnumerable<CoffeeLog>> GetAllAsync()
  {
    throw new NotImplementedException();
  }

  public Task<CoffeeLog> GetByIdAsync(int id)
  {
    throw new NotImplementedException();
  }

  public Task UpdateAsync(CoffeeLog log)
  {
    throw new NotImplementedException();
  }
}
