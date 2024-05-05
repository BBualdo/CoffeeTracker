using CoffeeTracker.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeeTracker.WebAPI.Data;

public class CoffeeTrackerContext(DbContextOptions options) : DbContext(options)
{
  public DbSet<CoffeeLog> Records { get; set; }
}
